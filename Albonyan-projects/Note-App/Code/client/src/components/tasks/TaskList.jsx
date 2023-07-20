import { useState } from "react";
import TaskItem from "./TaskItem";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { deleteCompletedTasks } from "../../store/tasksSlice";

const TaskList = ({ tasks }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [activeButton, setActiveButton] = useState("All");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const clearCompletedTasks = () => {
    dispatch(deleteCompletedTasks());
  };

  const handleFilter = () => {
    switch (activeButton) {
      case "All":
        return tasks;
      case "Active":
        return tasks.filter((task) => !task.checked);
      case "Completed":
        return tasks.filter((task) => task.checked);
      default:
        return tasks;
    }
  };

  return (
    <div className="dark:bg-[var(--secondaryDark-bg)]  rounded bg-white register-light">
      {tasks.length > 0 ? (
        <>
          <ul>
            {handleFilter().map((task, idx) => (
              <TaskItem
                key={idx}
                id={task._id}
                title={task.title}
                completed={task.checked}
              />
            ))}
          </ul>
          <div className="border-t-[1px] dark:border-[var(--secondaryDark-txt)] p-2 flex justify-between text-[0.7rem] sm:text-base">
            <p className="text-[var(--mainTxt)] dark:text-[var(--mainDark-txt)] items-center">
              {tasks.filter((task) => !task.checked).length} {t("items_left")}
            </p>

            <div className="flex items-center gap-3 action-buttons">
              <button
                className={`text-[var(--mainTxt)] dark:text-[var(--mainDark-txt)] ${
                  activeButton === "All" ? "active" : ""
                }`}
                onClick={() => handleClick("All")}
              >
                {t("filter_all")}
              </button>
              <button
                className={`text-[var(--mainTxt)] dark:text-[var(--mainDark-txt)] ${
                  activeButton === "Active" ? "active" : ""
                }`}
                onClick={() => handleClick("Active")}
              >
                {t("filter_active")}
              </button>
              <button
                className={`text-[var(--mainTxt)] dark:text-[var(--mainDark-txt)] ${
                  activeButton === "Completed" ? "active" : ""
                }`}
                onClick={() => handleClick("Completed")}
              >
                {t("filter_completed")}
              </button>
            </div>

            <button
              className="text-[var(--mainTxt)] dark:text-[var(--mainDark-txt)]"
              onClick={clearCompletedTasks}
            >
              {t("clear_completed")}
            </button>
          </div>
        </>
      ) : (
        <p className="p-5 text-xl text-center text-[var(--secondaryColor)] dark:txt-[var(--secondaryDark-txt)]">
          {t("no_todos")}
        </p>
      )}
    </div>
  );
};

export default TaskList;
