import { useState } from "react";
import { HiOutlineEye,HiOutlineEyeOff } from "react-icons/hi";
const PasswordInput = ({ labelText, value, handleChange, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <label
        htmlFor={labelText}
        className="block mb-1 text-[var(--mainTxt)] dark:text-[var(--mainDark-txt)]"
      >
        {labelText}
      </label>
      <input
        autoComplete="password"
        id={labelText}
        className="p-1 border-[1px] solid rounded-lg w-full input-shadow focus:outline-[var(--mainColor)] dark:bg-[#404363] dark:text-white dark:focus:outline-none"
        type={showPassword ? "text" : "password"}
        name={name}
        onChange={handleChange}
        value={value}
      />
      <button
        aria-label="show password"
        type="button"
        className="absolute translate-y-1 ltr:right-2 rtl:left-3 text-[var(--secondaryTxt)]"
        onClick={showPasswordHandler}
      >
        {!showPassword ? <HiOutlineEyeOff className="text-2xl dark:text-[var(--mainDark-txt)]" /> : <HiOutlineEye className="text-2xl dark:text-[var(--mainDark-txt)]"/>}
      </button>
    </div>
  );
};

export default PasswordInput;
