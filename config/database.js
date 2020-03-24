// require("dotenv").config();
const mysql = require("mysql");
const keys = require("./keys");

const con = mysql.createConnection({
  host:keys.sql.host,
  user:keys.sql.user,
  password:keys.sql.pass,
  database:keys.sql.db
});

con.connect(function(err){
  if(err) console.log(err);;
  console.log("DB Connected");
});

module.exports = con;
