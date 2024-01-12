import axios from "axios";
import React, { useEffect, useState } from "react";
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
    <div>
      <Link to={"/"}>Home</Link>
      <div>
        <div>Book Title: {book.title}</div>
        <div>Book Author: {book.author}</div>
        <div>Book Publish Year{book.publishedYear}</div>
        <div>Created At: {createdAtFormatted}</div>
        <div>Updated At:{updatedAtFormatted}</div>
      </div>
    </div>
  );
}

export default ShowBook;
