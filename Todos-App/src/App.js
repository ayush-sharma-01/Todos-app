import React, { useState } from "react";

import TodoList from "./components/Todos/TodosList/TodoList";
import Input from "./components/Todos/Input/Input";
import "./App.css";

const App = () => {
  const [courseTodo, setCourseTodo] = useState([
    { text: "Do exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addTodoHandler = (enteredText) => {
    setCourseTodo((prevTodo) => {
      const updatedTodo = [...prevTodo];
      updatedTodo.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTodo;
    });
  };

  const deleteItemHandler = (todoId) => {
    setCourseTodo((prevTodo) => {
      const updatedTodo = prevTodo.filter((todo) => todo.id !== todoId);
      return updatedTodo;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No Todo found. Maybe add one?</p>
  );

  if (courseTodo.length > 0) {
    content = <TodoList items={courseTodo} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div>
      <section id="goal-form">
        <Input onAddTodo={addTodoHandler} />
      </section>
      <section id="Todo">{content}</section>
    </div>
  );
};

export default App;
