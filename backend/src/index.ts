import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3003;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/nutriedge")
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log("Failed to connect", err));

app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
