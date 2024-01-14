import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/BooksTable";
import BooksCard from "../components/BooksCard";

function Home() {
  const [books, setBooks] = useState([]);
  const [showType, setShowType] = useState("card");

  useEffect(() => {
    function getBooks() {
      axios
        .get("http://localhost:5555/books")
        .then((res) => {
          setBooks(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getBooks();
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {showType === "card" ? (
        <BooksCard books={books} />
      ) : (
        <BooksTable books={books} />
      )}
    </div>
  );
}

export default Home;
