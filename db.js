const { log } = require("console");
const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb",
});

// mysqlPool
//   .query("SELECT 1")
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));
// module.exports = mysqlPool;

module.exports = mysqlPool;
