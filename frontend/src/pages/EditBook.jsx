import axios from "axios";
import React, { useEffect, useState } from "react";
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
    <div>
      <Link to={"/"}>Home</Link>
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
        <label htmlFor="book-publishedYear">Book Published Year</label>
        <input
          type="text"
          id="book-publishedYear"
          value={publishedYear}
          onChange={(e) => setPublishedYear(e.target.value)}
        />
      </div>
      <button onClick={handleEditBook}>Edit Book</button>
    </div>
  );
}

export default EditBook;
