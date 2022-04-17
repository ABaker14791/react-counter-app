import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo flex justify-center my-10">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button
        onClick={completeHandler}
        className="complete-btn mx-4 px-6 py-4 rounded bg-white"
      >
        <i className="fas fa-check">
          <FontAwesomeIcon icon={faCheck} />
        </i>
      </button>
      <button
        onClick={deleteHandler}
        className="trash-btn mx-4 px-6 py-4 rounded bg-white"
      >
        <i className="fas fa-trash">
          <FontAwesomeIcon icon={faTrash} />
        </i>
      </button>
    </div>
  );
};

export default Todo;
