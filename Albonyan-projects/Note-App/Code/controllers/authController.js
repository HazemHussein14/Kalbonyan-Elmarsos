import User from "../model/user.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { userName, email, password, phone, birthday } = req.body;

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already exists");
  }
  const user = await User.create({
    userName,
    email,
    password,
    phone,
    birthday,
  });

  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      userName: user.userName,
      phone: user.phone,
      birthday: user.birthday,
    },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Email does not exist");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Password is incorrect!");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};

const updateUser = async (req, res) => {
  const { email, password, userName, phone, birthday } = req.body;
  const user = await User.findOne({ _id: req.user.userId });

  console.log(email);

  if (!user) {
    throw new BadRequestError("User not found");
  }

  user.email = email;
  user.userName = userName;
  user.phone = phone;
  user.birthday = birthday;

  if (password) {
    user.password = password;
  }

  await user.save();

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user, token });
};


export { register, login, updateUser };
