import React from "react";
import { BsCheckLg } from "react-icons/bs"; // импорт галочки

// Функция галочки
const Check = ({ isCompleted }) => {
  return (
    <div
      className={`border-2 rounded-lg border-purple-400 
      ${isCompleted ? "bg-purple-400" : ""} w-5 h-5
    mr-3 flex items-center justify-center`} // настройка расположения галочек
    >
      {isCompleted && <BsCheckLg size={20} className="text-white-900" />}
    </div>
  );
};

export default Check;
