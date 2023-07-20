import { useState } from "react";
import { useSelector } from "react-redux";

import FormSignUp from "./signup-forms/FormSignUp";
import FormCompleteSignUp from "./signup-forms/FormCompleteSignUp";
import Login from "./login-form/Login";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  const [isMember, setIsMember] = useState(false);

  const { formStage } = useSelector((state) => state.registerForm);

  let content;

  if (isMember) {
    content = <Login />;
  } else if (!isMember && formStage === 1) {
    content = <FormSignUp pageTitle="Signup" />;
  } else if (!isMember && formStage === 2) {
    content = <FormCompleteSignUp pageTitle="Complete signup" />;
  }

  const toggleMemberHandler = () => {
    setIsMember((prevState) => !prevState);
  };

  return (
    <section className="p-4 bg-white md:p-8 dark:bg-[var(--secondaryDark-bg)]">
      {content}
      <aside className="text-center">
        <p className="text-[var(--mainTxt)] dark:text-[var(--mainDark-txt)]">
          {isMember ? t("have_no_account") : t("have_account")}
        </p>
        <button
          className="text-[var(--mainColor)]"
          onClick={toggleMemberHandler}
        >
          {isMember ? t("signUp_title") : t("login")}
        </button>
      </aside>
    </section>
  );
};
export default SignUp;
