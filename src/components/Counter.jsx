import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-center my-4">Counter</h1>
        <h2
          className={
            count > 0 ? "text-green-600" : count < 0 ? "text-red-600" : null
          }
        >
          {count}
        </h2>
        <button
          onClick={() => setCount(count - 1)}
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-4 my-10 border border-blue-500 hover:border-transparent rounded"
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-4 my-10 border border-blue-500 hover:border-transparent rounded"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
