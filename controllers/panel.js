const express = require("express");
const router = express.Router();
const service = require("../models/panel");

const balance = async (req, res) => {
  try {
    const data = await service.balance();
    return res.json({ results: data });
  } catch (e) {
    console.log(e);
    return res.json({ error: true, message: "Ocurrió un error" });
  }
};

router.get("/balance", balance);

module.exports = router;
