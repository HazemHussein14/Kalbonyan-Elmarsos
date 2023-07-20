const REQUIRED = "REQUIRED";
const MIN_LENGTH = "MIN_LENGTH";

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function getUserInput(inputElementId) {
  return document.getElementById(inputElementId).value;
}

function createUser(userName, userPassowrd) {
  if (!validate(userName, REQUIRED) || !validate(userPassowrd, MIN_LENGTH, 5)) {
    throw new Error(
      "Invalid input - username or password is wrong (passowrd should be at least 5 characters)"
    );
  }
  return {
    userName: userName,
    passowrd: userPassowrd,
  };
}

function greetUser(user) {
  console.log(`Hi, I am ${user.userName}`)
}

function signupHandler(e) {
  e.preventDefault();
  const enteredUserName = getUserInput("username");
  const enteredPassword = getUserInput("password");
  try {
    const newUser = createUser(enteredUserName, enteredPassword);
    console.log(newUser)
    greetUser(newUser)
  } catch (err) {
    alert(err.message);
  }
}

function connectForm(fromId, formSubmitHandler) {
  const form = document.getElementById(fromId);
  form.addEventListener("submit", formSubmitHandler);
}

connectForm("user-input", signupHandler);
