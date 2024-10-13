import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import { seedIntialAccessories, seedIntialProducts, seedIntialVitamins } from "./services/productService";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute"
import cors from "cors"
import dotenv from 'dotenv';
import accessoriesRoute from "./routes/accessoriesRoute";
import vitaminsRoute from "./routes/vitaminsRoute";

dotenv.config();

const app = express();
const port = 3003;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/NutriEdge")
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log("Failed to connect", err));

//Seed products to database
seedIntialAccessories();
seedIntialProducts();
seedIntialVitamins();

app.use("/User", userRoute);
app.use("/Product", productRoute);
app.use("/Cart", cartRoute)
app.use("/Accessories", accessoriesRoute)
app.use("/Vitamins", vitaminsRoute)

app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});
