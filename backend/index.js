import express from "express";
import bookRoute from "./routes/booksRoute.js";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

const port = process.env.PORT || 5000;
const MONGO_URI = process.env.mongodb;
const app = express();

app.use(
  cors({
    origin: ["https://book-storge-ei1q.vercel.app"],
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/books", bookRoute);

function connect() {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("connected");
      app.listen(port, () => {
        console.log(`listening on ${port}`);
      });
    })
    .catch((error) => {
      console.error("Couldn't connect", error.message);
    });
}

connect();

export default app;
