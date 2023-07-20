import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUpUser } from "../../../store/authSlice";

import {
  updateFormStage,
  updateFormCompleteSignUp,
} from "../../../store/registerSlice";

import FormRow from "../../UI/FormRow";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const FormCompleteSignUp = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // user data from the inputs
  const currentStage = useSelector((state) => state.registerForm.formStage);
  const { userName, phone, birthday } = useSelector(
    (state) => state.registerForm.formCompleteSignUp
  );
  const { formSignUp, formCompleteSignUp } = useSelector(
    (state) => state.registerForm
  );
  // request status
  const { error, isLoading, user } = useSelector((state) => state.authSlice);
  // all user data to submit
  const currentUser = { ...formSignUp, ...formCompleteSignUp };

  const [formData, setFormData] = useState({
    userName,
    phone,
    birthday,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    dispatch(
      updateFormCompleteSignUp({
        userName: formData.userName,
        phone: formData.phone,
        birthday: formData.birthday,
      })
    );
  };

  const isValid = formData.userName && formData.phone && formData.birthday;

  const submitHandler = (e) => {
    e.preventDefault();
    if (isValid) {
      dispatch(setUpUser({ currentUser, endPoint: "register" }));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const direction = document.documentElement.getAttribute("dir");

  return (
    <form className="flex flex-col gap-4 mb-3" onSubmit={submitHandler}>
      <h2 className="mb-2 text-center font-bold text-4xl text-[var(--mainColor)]">
        {t("complete_signUp_title")}
      </h2>
      {isLoading && (
        <span className="px-3 py-2 mx-auto text-center rounded bg-cyan-200 w-fit">
          {t("signing_user")}
        </span>
      )}
      {error && (
        <span className="px-3 py-2 mx-auto text-center text-red-600 bg-red-200 rounded w-fit">
          {error}
        </span>
      )}
      <FormRow
        type="text"
        name="userName"
        labelText={t("label_username")}
        value={formData.userName}
        handleChange={changeHandler}
      />
      <FormRow
        type="number"
        labelText={t("label_phone")}
        name="phone"
        value={formData.phone}
        handleChange={changeHandler}
      />
      <FormRow
        type="date"
        name="birthday"
        labelText={t("label_birthday")}
        value={formData.birthday}
        handleChange={changeHandler}
      />
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
      <button
        type="button"
        className="flex items-center justify-center w-full gap-2 py-2 text-xl font-semibold text-white bg-[var(--secondaryColor)] rounded-md"
        onClick={() => dispatch(updateFormStage(currentStage - 1))}
      >
        {t("back_btn")}{" "}
        {direction === "rtl" ? <BsArrowRight /> : <BsArrowLeft />}
      </button>
    </form>
  );
};
export default FormCompleteSignUp;
