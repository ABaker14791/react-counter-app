import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-center my-8">Counter</h1>
        <h2
          className={
            count > 0
              ? "text-green-600 text-3xl"
              : count < 0
              ? "text-red-600 text-3xl"
              : "text-3xl"
          }
        >
          {count}
        </h2>
        <div className="row">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-4 my-10 border border-blue-500 hover:border-transparent rounded"
          >
            -
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-4 my-10 border border-blue-500 hover:border-transparent rounded"
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            onClick={() => setCount(0)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
