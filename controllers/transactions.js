const express = require("express");
const router = express.Router();
const service = require("../models/transactions");

const list = async (req, res) => {
  try {
    //    const {userId} = req.userId
    const transactions = await service.list(1);
    return res.json({ results: transactions });
  } catch (e) {
    return res.json({ error: true, message: "Ocurrió un error" });
  }
};

const create = async (req, res) => {
  try {
    // TO-DO
  } catch (e) {
    console.log(e);
    res.json({ error: true, message: "Ocurrió un error" });
    throw e;
  }
};

const update = async (req, res) => {
  try {
    // TO-DO
  } catch (e) {
    console.log(e);
    res.json({ error: true, message: "Ocurrió un error" });
    throw e;
  }
};

router.get("/", list);
router.post("/create", create);
router.put("/update", update);

module.exports = router;
