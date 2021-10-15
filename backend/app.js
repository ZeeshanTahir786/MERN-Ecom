const express = require("express");
const errorMiddleware = require("./middleware/error");

const app = express();
app.use(express.json());
// Route Import
const product = require("./routes/productRoute");

app.use("/api/v1", product);

// Err middleware
app.use(errorMiddleware);

module.exports = app;
