const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8000;
const host = "0.0.0.0";

// Controllers
const transactions = require("./controllers/transactions");
const panel = require("./controllers/panel");

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());

// Endpoints
app.use("/transactions", transactions);
app.use("/panel", panel);

// To keep alive session.
app.get("/balancer", (req, res) => {
  return res.send("Hello");
});

app.listen(port, host, () => console.log(`Listening on port: ${port}`));

module.exports = app;
