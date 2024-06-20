import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
