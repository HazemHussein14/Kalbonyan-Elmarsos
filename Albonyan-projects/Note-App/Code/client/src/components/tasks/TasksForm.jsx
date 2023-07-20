import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../store/tasksSlice";
import { useTranslation } from "react-i18next";
import {IoAddCircleOutline} from 'react-icons/io5'

const TasksForm = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    }
    const todo = {
      title: value,
      checked: isChecked,
    };
    dispatch(createTask(todo));
    setValue("");
  };

  return (
    <form
      className="flex gap-3 register-light px-3 py-4 bg-white rounded dark:bg-[var(--secondaryDark-bg)] dark:text-[var(--mainDark-txt)] dark:tasks-container-dark"
      onSubmit={handleSubmit}
    >
      <button
        type="button"
        className={`checkbox-button hover:checked focus:outline-none ${
          isChecked ? "checked" : ""
        }`}
        aria-label="create a todo"
        onClick={handleCheckboxChange}
      />
      <input
        className="w-full focus:outline-none dark:bg-[var(--secondaryDark-bg)]"
        type="text"
        placeholder={t("form_placeholder")}
        onChange={handleChange}
        value={value}
      />
      <button aria-label="add task" className="text-[var(--mainColor)]">
        <IoAddCircleOutline className="text-2xl"/>
      </button>
    </form>
  );
};
export default TasksForm;
