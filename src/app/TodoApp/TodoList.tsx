import React, { useMemo, useState } from "react";
import { CheckIcon, DeleteIcon, EditIcon } from "./Icon";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, setTask, updateTask } from "../../redux/features/TodoSlice";
import { setMessage, setVisible } from "../../redux/features/alertSlice";

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

type TaskList = Task[];
type FilterType = "All" | "Active" | "Completed"; 

const TodoList: React.FC = () => {
  const [filteredTasks, setFilteredTasks] = useState<TaskList>([]);

  const tasks = useSelector((state: { tasks: { items: TaskList } }) => state.tasks.items);
  const selectedTab = useSelector((state: { tasks: { filter: FilterType } }) => state.tasks.filter);
  const dispatch = useDispatch();

  const handleClickAction = (item: Task, action: "markAsDone" | "delete") => {
    if (action === "markAsDone") {
      dispatch(updateTask({ ...item, isCompleted: !item.isCompleted }));
    } else if (action === "delete") {
      if (confirm("Are you sure you want to delete this task?")) {
        dispatch(deleteTask(item.id));
        dispatch(setMessage("Task has been deleted successfully!"));
        dispatch(setVisible(true));
      }
    }
  };


  useMemo(() => {
    let results: TaskList;
    switch (selectedTab) {
      case "Active":
        results = tasks.filter((item) => !item.isCompleted);
        break;
      case "Completed":
        results = tasks.filter((item) => item.isCompleted);
        break;
      default:
        results = tasks;
        break;
    }
    setFilteredTasks(results);
  }, [selectedTab, tasks]);

  return (
    <div className="w-full flex items-center justify-start">
      <ul className="w-full flex flex-col items-center">
        {filteredTasks.length === 0 ? (
          <li className="w-full text-lg text-gray-500 py-2 border-b border-gray-300">
            No task available.
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="w-full flex justify-between items-center py-2 text-lg border-b border-gray-300 last:border-b-0"
            >
              <div className="flex items-center gap-2">
                <span
                  onClick={() => handleClickAction(task, "markAsDone")}
                  className="cursor-pointer"
                >
                  <CheckIcon checked={task.isCompleted} />
                </span>
                <span className={`${task.isCompleted ? "opacity-50 text-gray-500" : ""}`}>
                  {task.title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span title="Edit" onClick={() => dispatch(setTask(task))} className="cursor-pointer">
                  <EditIcon />
                </span>
                <span title="Delete" onClick={() => handleClickAction(task, "delete")} className="cursor-pointer">
                  <DeleteIcon />
                </span>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
