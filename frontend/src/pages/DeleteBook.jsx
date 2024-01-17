import axios from "axios";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDeleteBook() {
    axios
      .delete(`http://localhost:5555/books/${id}`)
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
      <h1 className="text-3xl my-4 text-center">Delete Book</h1>
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl p-8 mx-auto md:w-[600px]">
        <h3 className="text-2xl ">
          Are you sure you want to delete this book?
        </h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full rounded-md"
          onClick={handleDeleteBook}
        >
          Yes, Delete Book
        </button>
      </div>
    </div>
  );
}

export default DeleteBook;
