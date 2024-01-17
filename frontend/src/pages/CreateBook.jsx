import axios from "axios";
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");

  const navigate = useNavigate();

  function handleCreateBook(e) {
    const newBook = {
      title,
      author,
      publishedYear,
    };

    axios
      .post("http://localhost:5555/books", newBook)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="p-4">
      <div className="flex">
        <Link
          className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
          to={"/"}
        >
          <BsArrowLeft className="text-2xl" />
        </Link>
      </div>
      <h1 className="text-2xl my-4 text-center">Create Book</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl p-4 mx-auto md:w-[600px]">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="number"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-md"
          />
        </div>
        <button
          className="p-2 bg-sky-300 m-8 rounded-md"
          onClick={handleCreateBook}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBook;
