import express from "express";
import bookRoute from "./routes/booksRoute.js";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

const port = process.env.PORT || 5000;
const MONGO_URI = process.env.mongodb;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

app.use("/books", bookRoute);

mongoose.connect(MONGO_URI);

export default app;
