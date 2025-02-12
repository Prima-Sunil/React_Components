import React from "react";
import Alert from "./Alert";
import TodoForm from "./TodoForm";
import Tabs from "./Tabs";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
        ✅ My Todo List
      </h2>
      <Alert />
      <div className="mb-4">
        <TodoForm />
      </div>
      <div className="mb-4">
        <Tabs />
      </div>
      <TodoList />
    </div>
  );
};

export default TodoApp;
