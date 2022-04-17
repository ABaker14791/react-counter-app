import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CounterPage from "./pages/CounterPage";
import ErrorPage from "./pages/ErrorPage";
import TodoPage from "./pages/TodoPage";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Router>
        <nav>
          <div className="flex justify-between">
            <div className="text-left mx-10 my-5">React Mini Projects</div>
            <div className="text-right mx-10 my-5">
              <Link to="/" className="mx-5">
                Home
              </Link>
              <Link to="/counter" className="mx-5">
                Counter
              </Link>
              <Link to="/todo" className="mx-5">
                Todo List
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route
            path="/todo"
            element={
              <TodoPage
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
