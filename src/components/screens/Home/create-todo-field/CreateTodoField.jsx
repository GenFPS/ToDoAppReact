import React, { useState } from "react";

// Функция Записывания цели или задачи
const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  //функция добавления задачи
  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };

  return (
    <div
      className="flex items-center justify-between
       mb-4 rounded-2xl bg-gray-700 border-2 px-5 py-4 w-full mt-20"
    >
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
        className="bg-transparent w-full border-one outline-none"
        placeholder="Add your task"
      />
    </div>
  );
};

export default CreateTodoField;
