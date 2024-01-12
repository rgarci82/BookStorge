import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBook from "./pages/CreateBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createbook" element={<CreateBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
