const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productsRouter = require("./routes/product");
const path = require("path");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect(process.env.DATABASE_CONNECTION)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
