import connectToDatabase from "./database.js";
import express from "express";
import dotenv from "dotenv";
//Routes
import productRoutes from "./routes/productRoutes.js";
dotenv.config();

connectToDatabase();
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;
//Routes
app.use("/api/products", productRoutes);
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
