const db = require("../db");
const { tables } = require("../config/constants");
const { TRANSACTIONS } = tables;

const balance = () =>
  db.query(
    `SELECT SUM(amount) as total, idType FROM ${TRANSACTIONS} group by idType;`
  );

module.exports = {
  balance,
};
