import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

function ShowBook() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  const formatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false, // Use 24-hour format
  };

  const createdAtFormatted = new Date(book.createdAt).toLocaleDateString(
    undefined,
    formatOptions
  );
  const updatedAtFormatted = new Date(book.updatedAt).toLocaleDateString(
    undefined,
    formatOptions
  );

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
      <h1 className="text-3xl my-4">Show Book</h1>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Id</span>
          <span>{book._id}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Title</span>
          <span>{book.title}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Author</span>
          <span>{book.author}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Publish Year</span>
          <span>{book.publishedYear}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Create Time</span>
          <span>{createdAtFormatted}</span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
          <span>{updatedAtFormatted}</span>
        </div>
      </div>
    </div>
  );
}

export default ShowBook;
