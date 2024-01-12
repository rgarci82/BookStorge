import axios from "axios";
import React, { useState } from "react";
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
    <div>
      <Link to="/">Home</Link>
      <div>
        <label htmlFor="book-title">Book Title</label>
        <input
          type="text"
          id="book-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="book-author">Book Author</label>
        <input
          type="text"
          id="book-author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="book-publishedYear"> Book Published Year</label>
        <input
          type="number"
          id="book-publishedYear"
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
        />
      </div>
      <button onClick={handleCreateBook}>Create Book</button>
    </div>
  );
}

export default CreateBook;
