import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todo";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route
          path="/todos"
          element={
              <Todos />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
