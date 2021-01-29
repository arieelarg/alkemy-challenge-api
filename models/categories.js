const db = require("../db");
const { tables } = require("../config/constants");
const { CATEGORIES } = tables;

const list = () =>
  db.query(
    `SELECT id, name FROM ${CATEGORIES} WHERE enabled = 1 AND deleted <> 1;`
  );

module.exports = {
  list,
};
