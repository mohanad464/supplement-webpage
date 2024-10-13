import express from "express";
import { getAllAccessories } from "../services/productService";

const router = express.Router();


router.get("/", async (req, res) => {
    try {
      const accessories = await getAllAccessories();
      res.status(200).json(accessories);
    } catch (err) {
      res.status(500).json({ message: "Something went wrong!" });
    }
  });

  export default router;
