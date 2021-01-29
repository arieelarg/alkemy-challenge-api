const express = require("express");
const router = express.Router();
const service = require("../models/categories");

const list = async (req, res) => {
  try {
    const data = await service.list();
    return res.json({ results: data });
  } catch (e) {
    console.log(e);
    return res.json({ error: true, message: "Ocurrió un error" });
  }
};

router.get("/", list);

module.exports = router;
