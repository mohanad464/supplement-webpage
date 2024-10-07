import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import { seedIntialProducts } from "./services/productService";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute"
import cors from "cors"

const app = express();
const port = 3003;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/NutriEdge")
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log("Failed to connect", err));

//Seed products to database
seedIntialProducts();

app.use("/User", userRoute);
app.use("/Product", productRoute);
app.use("/Cart", cartRoute)

app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
