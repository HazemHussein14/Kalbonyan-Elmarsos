const FormRow = ({ type, labelText, value, handleChange, name }) => {
  return (
    <div>
      <label
        htmlFor={labelText}
        className="block mb-1 text-[var(--mainTxt)] dark:text-[var(--mainDark-txt)]"
      >
        {labelText}
      </label>
      <input
        autoComplete={labelText}
        id={labelText}
        className="p-1 border-[1px] solid rounded-lg w-full input-shadow focus:outline-[var(--mainColor)] dark:bg-[#404363] dark:text-white dark:focus:outline-none"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default FormRow;
