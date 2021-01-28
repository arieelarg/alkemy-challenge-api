const db = require("../db");
const { tables } = require("../config/constants");
const { TRANSACTIONS, CATEGORIES, TYPES } = tables;

const list = (userId) =>
  db.query(
    `SELECT TS.id, TS.concept, TS.amount, DATE_FORMAT(TS.tsCreate,'%d-%m-%Y') as tsCreate, TY.name AS Type, CA.name AS Category
        FROM ${TRANSACTIONS} AS TS
            JOIN ${CATEGORIES} AS CA ON CA.id = TS.idCategory
            JOIN ${TYPES} AS TY ON TY.id = TS.idType
        WHERE TS.idUser = ${userId} AND TS.deleted = 0
    ORDER BY TS.id DESC`
  );

const create = (obj) => db.query(`INSERT INTO ${TRANSACTIONS} SET ?`, [obj]);

const update = (id, obj) =>
  db.query(`UPDATE ${TRANSACTIONS} SET ? WHERE id = ${id}`, [obj]);

module.exports = { list, create, update };
