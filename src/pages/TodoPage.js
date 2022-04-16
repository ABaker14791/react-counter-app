import React from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  return (
    <>
      <header>
        <div className="text-5xl font-bold text-center my-8">Todo List</div>
      </header>
      <Form />
      <TodoList />
    </>
  );
};

export default TodoPage;
