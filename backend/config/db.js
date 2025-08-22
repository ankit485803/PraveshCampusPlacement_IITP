


require("dotenv").config();
const mysql = require("mysql2");


// DB connection
const db = mysql.createConnection({
    
    host: process.env.HOST_NAME || process.env.DB_HOST, // prefer HOST_NAME if set
    user: process.env.DB_USER,    // your MySQL username
    password: process.env.DB_PASSWORD,    // // replace with your password
    database: process.env.DB_NAME
});




// Test DB
db.connect(err => {
  if (err) throw err;
  console.log("✅ MySQL Connected...");
});



module.exports = db;
