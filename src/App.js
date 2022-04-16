import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CounterPage from "./pages/CounterPage";
import ErrorPage from "./pages/ErrorPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <>
      <Router>
        <nav>
          <div className="">
            <div className="text-left">Page Logo</div>
            <div className="text-right justify-end justify-items-end">
              <Link to="/" className="">
                Home
              </Link>
              <Link to="/counter" className="">
                Counter
              </Link>
              <Link to="/todo" className="">
                Todo List
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
