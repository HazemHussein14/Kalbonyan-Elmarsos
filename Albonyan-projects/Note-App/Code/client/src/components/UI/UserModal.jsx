import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { logoutUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
const UserModal = ({ closeModal, editUser }) => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  function handleLogout() {
    logoutUser();
    navigate("/register");
    window.location.reload();
  }

  const modalContentStyle =
    "left-1/2 translate-x-[-50%] lg:bg-white lg:header-shadow lg:rounded-2xl absolute lg:translate-x-0 lg:inset-auto lg:top-[5rem] lg:right-3 lg:p-3 lg:dark:bg-[var(--mainDark)] lg:dark:border-solid lg:dark:border-white lg:dark:border-[1px] z-50";
  return (
    <>
      <div
        className="fixed inset-0 z-20 bg-black/75 lg:hidden"
        onClick={closeModal}
      />
      <div className={modalContentStyle}>
        <div className="w-[250px] text-center">
          <h2 className="mb-3 text-xl text-[var(--mainColor)]">
            {t("user_greeting")} {user.userName}
          </h2>
          <div className="flex flex-col gap-3">
            <button
              className="bg-[var(--secondaryColor)] text-white p-1 rounded dark:bg-white dark:text-[var(--mainDark)] dark:font-bold"
              onClick={() => {
                editUser(true);
              }}
            >
              {t("modify_user_model")}
            </button>
            <button
              className="bg-[var(--mainColor)] text-white p-1 rounded"
              onClick={handleLogout}
            >
              {t("logout")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
