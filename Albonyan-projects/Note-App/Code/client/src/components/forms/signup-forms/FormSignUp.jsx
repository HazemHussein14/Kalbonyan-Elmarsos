import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  updateFormSignUp,
  updateFormStage,
} from "../../../store/registerSlice";

import PasswordInput from "../../UI/PasswordInput";
import FormRow from "../../UI/FormRow";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { useTranslation } from "react-i18next";

const FormSignUp = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  // get redux store values
  const { email, password, confirmPassword } = useSelector(
    (state) => state.registerForm.formSignUp
  );

  // form values initial state
  const [formData, setFormData] = useState({
    email,
    password,
    confirmPassword,
  });

  // match and check length for passwords
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [validPasswordFormat, setValidPasswordFormat] = useState(true);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "confirmPassword" && value !== formData.password) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
    }

    if (name === "password" && value.length < 6) {
      setValidPasswordFormat(false);
    } else {
      setValidPasswordFormat(true);
    }
  };

  // validate and move to next step

  const isValid =
    formData.email &&
    formData.password &&
    validPasswordFormat &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;
  const submitHandler = (e) => {
    e.preventDefault();

    if (isValid) {
      dispatch(updateFormStage(2));
      dispatch(
        updateFormSignUp({
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        })
      );
    }
  };

  const direction = document.documentElement.getAttribute("dir");

  return (
    <>
      <h2 className="mb-3 text-center font-bold text-4xl text-[var(--mainColor)]">
        {t("signUp_title")}
      </h2>
      <form className="flex flex-col gap-4 mb-3" onSubmit={submitHandler}>
        <FormRow
          type="email"
          name="email"
          labelText={t("label_email")}
          value={formData.email}
          handleChange={changeHandler}
        />
        <PasswordInput
          labelText={t("label_password")}
          name="password"
          value={formData.password}
          handleChange={changeHandler}
        />
        {!validPasswordFormat && (
          <span className="text-red-600">{t("password_characters")}</span>
        )}
        <PasswordInput
          labelText={t("label_confirmPass")}
          name="confirmPassword"
          value={formData.confirmPassword}
          handleChange={changeHandler}
        />

        {!passwordsMatch && (
          <span className="text-red-600">{t("password_match")}</span>
        )}
        <button
          type="submit"
          className={`py-2 w-full flex items-center ${
            isValid ? "bg-[var(--mainColor)]" : "bg-[#b3b3b3]"
          } justify-center gap-2 text-xl rounded-md text-white font-semibold shadow-md`}
          disabled={!isValid}
        >
          {t("complete_signUp_title")}{" "}
          {direction === "rtl" ? <BsArrowLeft /> : <BsArrowRight />}
        </button>
      </form>
    </>
  );
};
export default FormSignUp;
