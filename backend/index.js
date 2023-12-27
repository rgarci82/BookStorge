import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

export default app;
