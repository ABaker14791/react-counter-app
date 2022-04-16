import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  return (
    <form className="text-center w-full">
      <div className="container flex text-center justify-center">
        <input
          type="text"
          className="px-6 py-4 text-lg w-600 bg-orange-400 rounded"
        />
        <button type="submit" className="px-5 py-4 mx-6 bg-orange-600 rounded">
          <i>
            <FontAwesomeIcon icon={faPlus} />
          </i>
        </button>
        <div className="select">
          <select
            name="todos"
            id=""
            className="block
      w-full
      px-3
      py-5
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
