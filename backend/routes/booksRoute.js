import express from "express";
import { Book } from "../models/Book.js";
const router = express.Router();

//create a book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishedYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishedYear",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishedYear: req.body.publishedYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//get book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get book by id and update
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.body.title || !req.body.author || !req.body.publishedYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishedYear",
      });
    }

    const book = await Book.findByIdAndUpdate(id, req.body);

    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

//delete book by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).send({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {}
});

export default router;
