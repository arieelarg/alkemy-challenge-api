const express = require("express");
const path = require("path");
const app = express();

// Controllers
const transactions = require("./controllers/transactions");

// Endpoints
app.use("/transactions", transactions);

app.use(express.static(path.join(__dirname, "public")));


module.exports = app;