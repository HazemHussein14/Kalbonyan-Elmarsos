import { useDispatch } from "react-redux";
import { deleteTask, updateTask, getAllTasks } from "../../store/tasksSlice";
import { HiXMark } from "react-icons/hi2";

const TaskItem = ({ title, completed, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
    dispatch(getAllTasks());
  };

  const handleToggle = () => {
    dispatch(updateTask(id));
  };

  return (
    <li className="flex justify-between p-3 py-4 border-b-[1px] dark:border-b dark:border-[var(--secondaryDark-txt)] last:border-none">
      <div className="flex items-center gap-4 text-[-mainTxt]">
        <button
          aria-label="mark checked"
          className={`checkbox-button hover:checked ${
            completed ? "checked" : ""
          }`}
          onClick={handleToggle}
        />
        <p
          className={`text-[--mainTxt] dark:text-[var(--mainDark-txt)] ${
            completed ? "line-through text-[#aaa]" : ""
          }`}
        >
          {title}
        </p>
      </div>
      <button onClick={handleDelete} aria-label="delete todo">
        <HiXMark className="text-2xl text-[var(--mainTxt)] dark:text-[var(--mainDark-txt)]" />
      </button>
    </li>
  );
};

export default TaskItem;
