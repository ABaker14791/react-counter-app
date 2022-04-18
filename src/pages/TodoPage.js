import React from "react";
import Form from "../components/Form";
import TodoList from "../components/TodoList";

const TodoPage = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
  filteredTodos,
}) => {
  return (
    <div className="bg-orange-400 h-screen">
      <header>
        <div className="text-5xl font-bold text-center py-8">Todo List</div>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default TodoPage;
