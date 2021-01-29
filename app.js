const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8000;
const host = "0.0.0.0";

// Controllers
const transactions = require("./controllers/transactions");
const panel = require("./controllers/panel");
const categories = require("./controllers/categories");

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());

// Endpoints
app.use("/transactions", transactions);
app.use("/panel", panel);
app.use("/categories", categories);

app.listen(port, host, () => console.log(`Listening on port: ${port}`));

module.exports = app;
