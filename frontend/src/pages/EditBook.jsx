import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishedYear(res.data.publishedYear);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleEditBook() {
    const updatedBook = {
      title,
      author,
      publishedYear,
    };
    axios.put(`http://localhost:5555/books/${id}`, updatedBook).then(() => {
      navigate("/");
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
      <h1 className="text-2xl my-4">Edit Book</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
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
          onClick={handleEditBook}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditBook;
