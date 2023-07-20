import { useState } from "react";
import LogoIcon from "../UI/LogoIcon";
import UserModal from "../UI/UserModal";
import ToggleLangBtn from "../UI/ToggleLangBtn";
import ToggleThemeBtn from "../UI/ToggleThemeBtn";
import { FaUserLarge } from "react-icons/fa6";

const Navbar = ({ editUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const showModelHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-mainBg dark:bg-mainBgDark h-[18rem] text-[var(--mainColor)] header-shadow bg-no-repeat bg-cover">
        <nav className="fixed flex items-center justify-between w-full p-4 bg-white dark:bg-[var(--mainDark)] z-[999]">
          <div className="flex items-center gap-2">
            <LogoIcon css="" fill="#D375B9" width="32" height="30" />
            <h2 className="text-2xl">Your Notes</h2>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <ToggleLangBtn useInNav />
            <ToggleThemeBtn />
            <button aria-label="user info" onClick={showModelHandler}>
              <FaUserLarge style={{ fontSize: "28px" }} />
            </button>
          </div>
        </nav>
      </header>
      {isOpen && (
        <UserModal closeModal={closeModalHandler} editUser={editUser} />
      )}
    </>
  );
};

export default Navbar;
