import { useEffect } from "react";
import TasksForm from "./TasksForm";
import TaskList from "./TaskList";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasks } from "../../store/tasksSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasksSlice.tasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <main className="flex flex-col gap-5 dark:tasks-container-dark mx-w-[600px] w-[310px] sm:w-[540px] mx-auto mt-[-80px]">
      <TasksForm />
      <TaskList tasks={tasks} />
    </main>
  );
};

export default Tasks;
