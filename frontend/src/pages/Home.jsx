import React, { useEffect, useState } from "react";
import axios from "axios";

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
      {books.map((book) => (
        <div>
          {book.title} by {book.author}
        </div>
      ))}
    </div>
  );
}

export default Home;
