import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="text-center w-full">
      <div className="container mx-auto flex text-center justify-center">
        <input
          onChange={inputTextHandler}
          value={inputText}
          type="text"
          className="px-6 py-2 text-lg w-600 rounded"
        />
        <button
          onClick={submitTodoHandler}
          type="submit"
          className="px-5 py-2 mx-6 rounded bg-white"
        >
          <i>
            <FontAwesomeIcon icon={faPlus} />
          </i>
        </button>
        <div className="select">
          <select
            onChange={statusHandler}
            name="todos"
            id=""
            className="block
                    w-full
                    px-3
                    py-2
                    text-base
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
