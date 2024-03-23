const db = require("mysql2");

const pool = db.createPool({
  host: "localhost",
  user: "root",
  database: "services_app",
  password: "artoriastm",
});

module.exports = pool.promise();
