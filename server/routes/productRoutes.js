import express from "express";
import Product from "../models/products.js";
const productRoutes = express.Router();

const getProducts = async (req, res) => {
  const product = await Product.find({});
  res.json(product);
};

productRoutes.route("/").get(getProducts);

export default productRoutes;
