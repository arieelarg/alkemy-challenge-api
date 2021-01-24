const mysql = require('mysql');
const util = require('util');
const dbCfg = require('./config/dbConfig');

const pool = mysql.createPool(dbCfg.dev);
pool.query = util.promisify(pool.query);

module.exports = pool;
