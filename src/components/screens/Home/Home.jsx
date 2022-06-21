import React from "react";
import { useState } from "react";
import CreateTodoField from "./create-todo-field/CreateTodoField";
import TodoItem from "./item/TodoItem";

const data = [
  {
    id: "1",
    title: "Take a shower and breafast",
    isCompleted: false,
  },
  {
    id: "2",
    title: "Make an simple apllication",
    isCompleted: false,
  },
  {
    id: "3",
    title: "Show your own project",
    isCompleted: false,
  },
  {
    id: "4",
    title: "Pass the exame",
    isCompleted: false,
  },
  {
    id: "5",
    title: "Thank the examiner",
    isCompleted: false,
  },
];

const Home = () => {
  // локальное состояние массива через хук useState,
  // чтобы можно было в дальнейшем менять состояние массива данных data
  const [todos, setTodos] = useState(data);

  // Функция выполнения задачи
  const changeTodo = (id) => {
    const copy = [...todos]; // дублируем
    const current = copy.find((t) => t.id == id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy); // перезаписываем массив, в которым уже сделан дубликат во избежании мутации  data
  };

  // Функция удаления задачи
  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id != id));
  };

  return (
    <div className="text-white w-4/5 mx-auto  ">
      <h1 className="text-2xl font-bold text-center mb-10">
        Daily's Todo List
      </h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};

export default Home; // экспортируем ф-ию
