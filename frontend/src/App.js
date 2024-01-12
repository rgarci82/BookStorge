import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createbook" element={<CreateBook />} />
        <Route path="/deletebook/:id" element={<DeleteBook />} />
        <Route path="/editbook/:id" element={<EditBook />} />
        <Route path="/showbook/:id" element={<ShowBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
