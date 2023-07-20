import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUpUser } from "../../../store/authSlice";

import FormRow from "../../UI/FormRow";
import PasswordInput from "../../UI/PasswordInput";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isLoading, user } = useSelector((state) => state.authSlice);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValid = formData.email && formData.password;

  const currentUser = { ...formData };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      dispatch(setUpUser({ currentUser, endPoint: "login" }));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <form className="flex flex-col gap-4 mb-3" onSubmit={handleSubmit}>
      <h2 className="mb-2 text-center font-bold text-4xl text-[var(--mainColor)]">
        {t("login")}
      </h2>
      {isLoading && (
        <span className="px-3 py-2 mx-auto text-center rounded bg-cyan-200 w-fit">
          {t("logging_user")}
        </span>
      )}
      {error && (
        <span className="px-3 py-2 mx-auto text-center text-red-600 bg-red-200 rounded w-fit">
          {error}
        </span>
      )}
      <FormRow
        type="email"
        name="email"
        labelText={t("label_email")}
        handleChange={changeHandler}
      />
      <PasswordInput
        labelText={t("label_password")}
        handleChange={changeHandler}
        name="password"
      />
      <button
        type="submit"
        disabled={!isValid}
        className={`py-2 w-full flex items-center ${
          isValid ? "bg-[var(--mainColor)]" : "bg-[#b3b3b3]"
        }
               justify-center gap-2 text-xl rounded-md text-white font-semibold shadow-md`}
      >
        {t("login")}
      </button>
    </form>
  );
};
export default Login;
