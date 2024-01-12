import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);

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
    <div>
      {books.map((book, id) => (
        <div key={book._id}>
          {book.title} by {book.author}
          <Link to={`/deletebook/${book._id}`}>Delete Book</Link>
          <Link to={`/editbook/${book._id}`}>Edit Book</Link>
          <Link to={`/showbook/${book._id}`}>Show Book</Link>
        </div>
      ))}
      <Link to="/createbook">Create Book</Link>
    </div>
  );
}

export default Home;
