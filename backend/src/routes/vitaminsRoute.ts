import express from "express";
import { getAllVitamins } from "../services/productService";

const router = express.Router();


router.get("/", async (req, res) => {
    try {
      const vitamins = await getAllVitamins();
      res.status(200).json(vitamins);
    } catch (err) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  });

  export default router;
