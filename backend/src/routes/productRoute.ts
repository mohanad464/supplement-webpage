import express from "express";
import { getAllProducts } from "../services/productService";
import router from "./userRoute";

const route = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.status(200).send(products);
});

export default router;
