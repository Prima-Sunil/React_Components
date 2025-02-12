import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, setTask, updateTask } from "../../redux/features/TodoSlice";
import { setMessage, setVisible } from "../../redux/features/alertSlice";

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TaskState {
  task: Task | null;
  items: Task[];
  filter: "All" | "Active" | "Completed";
}

const TodoForm = () => {
  const [text, setText] = useState("");
  const [invalid, setInvalid] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const task = useSelector((state: { tasks: TaskState }) => state.tasks.task);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      setInvalid(true);
      inputRef.current?.focus();
      return;
    }

    let taskObj: Task;
    let alertMessage = ``;

    if (task) {
      taskObj = { ...task, title: text };
      dispatch(updateTask(taskObj));
      alertMessage = `✅ Task updated successfully!`;
    } else {
      taskObj = { id: Date.now(), title: text, isCompleted: false };
      dispatch(addTask(taskObj));
      alertMessage = `✅ Task added successfully!`;
    }

    dispatch(setTask(null));
    dispatch(setMessage(alertMessage));
    dispatch(setVisible(true));
    setText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvalid(e.target.value.trim() === "");
    setText(e.target.value);
  };

  useEffect(() => {
    setText(task?.title || "");
  }, [task?.id, task?.title]);

  return (
    <form className="w-full flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className={`flex-1 px-4 py-2 text-lg border rounded-md outline-none transition-all ${
          invalid ? "border-red-500" : "border-gray-300 focus:border-green-500"
        }`}
        placeholder="✏️ Write your task here..."
        autoComplete="off"
        value={text}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="px-6 py-2 text-white font-semibold rounded-md transition-all bg-green-600 hover:bg-green-700"
      >
        {task ? `Update` : `Add`}
      </button>
    </form>
  );
};

export default TodoForm;
