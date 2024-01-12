import axios from "axios";
import React from "react";
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
    <div>
      <Link to={"/"}>Home</Link>
      <button onClick={handleDeleteBook}>Delete Book</button>
    </div>
  );
}

export default DeleteBook;
