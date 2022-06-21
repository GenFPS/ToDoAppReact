// отдельный компонент
import React from "react";
import Check from "./Check"; // иконка галочки
import { FaTrashRestore } from "react-icons/fa"; // иконка мусора

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div
      className="flex items-center justify-between mb-4 rounded-2xl bg-gray-700
     p-5 w-full"
    >
      <button className="flex items-center" onClick={() => changeTodo(todo.id)}>
        <Check
          isCompleted={todo.isCompleted}
          className="hover:text-purple-200"
        />
        <span className={`${todo.isCompleted ? "line-through" : ""}`}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <FaTrashRestore
          size={22}
          className="text-white-600 hover:text-red-400
        transition-colors ease-in-out duration-100"
        />
      </button>
    </div>
  );
};

export default TodoItem;

//onClick={() => changeTodo(todo.id)} // передаем функцию changeTodo
