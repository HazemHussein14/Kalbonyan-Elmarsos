import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormRow from "../UI/FormRow";
import PasswordInput from "../UI/PasswordInput";
import { useTranslation } from "react-i18next";
import { updateUser } from "../../store/authSlice";

const EditUserForm = ({ cancelEdit }) => {
  const { t } = useTranslation();
  const { user, isLoading, error, updateUserSuccess } = useSelector(
    (state) => state.authSlice
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: user.email,
    password: "",
    userName: user.userName,
    phone: user.phone,
    birthday: "",
  });

  console.log(user.birthday);

  useEffect(() => {
    const date = new Date(user.birthday);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setFormData((prevFormData) => ({
      ...prevFormData,
      birthday: formattedDate,
    }));
  }, [user.birthday]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const currentUser = { ...formData };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ currentUser }));
  };

  return (
    <form
      className="flex flex-col gap-5 dark:tasks-container-dark mx-w-[540px] w-[310px] sm:w-[540px] mx-auto mt-[-80px]"
      onSubmit={submitHandler}
    >
      <h2 className="register-light px-3 py-4 bg-white rounded dark:bg-[var(--secondaryDark-bg)] dark:text-[var(--mainDark-txt)] dark:tasks-container-dark text-center text-[var(--mainColor)] font-bold">
        {t("modify_user_form")}
      </h2>
      <div className="dark:bg-[var(--secondaryDark-bg)]  rounded bg-white register-light py-8 px-4">
        {isLoading && (
          <span className="block px-3 py-2 mx-auto mb-2 text-center rounded bg-cyan-200 w-fit">
            {t('updating_user')}
          </span>
        )}
        {updateUserSuccess && (
          <span className="block px-3 py-2 mx-auto mb-2 text-center bg-green-300 rounded w-fit">
            {t('update_user_success')}
          </span>
        )}
        {error && (
          <span className="block px-3 py-2 mx-auto mb-2 text-center text-red-600 bg-red-200 rounded w-fit">
            {error}
          </span>
        )}
        <div className="flex flex-col gap-4 mb-3">
          <FormRow
            type="email"
            name="email"
            labelText={t("label_email")}
            value={formData.email}
            handleChange={changeHandler}
          />
          <PasswordInput
            value={formData.password}
            handleChange={changeHandler}
            labelText={t("label_password")}
            name="password"
          />
          <FormRow
            type="text"
            name="userName"
            labelText={t("label_username")}
            handleChange={changeHandler}
            value={formData.userName}
          />
          <FormRow
            type="text"
            name="phone"
            labelText={t("label_phone")}
            handleChange={changeHandler}
            value={formData.phone}
          />
          <FormRow
            type="date"
            name="birthday"
            handleChange={changeHandler}
            labelText={t("label_birthday")}
            value={formData.birthday}
          />
        </div>
      </div>

      <button
        type="submit"
        className="p-3 rounded bg-[var(--mainColor)] text-white text-xl"
      >
        {t("save_changes")}
      </button>
      <button
        type="button"
        className="p-3 rounded bg-[var(--secondaryColor)] text-white text-xl"
        onClick={() => {
          cancelEdit(false);
        }}
      >
        {t("cancel_changes")}
      </button>
    </form>
  );
};

export default EditUserForm;
