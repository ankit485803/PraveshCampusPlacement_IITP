


const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();
const db = require("./config/db"); // MySQL connection file (db.js)

const app = express();


app.use(cors());
// Middlewares
app.use(express.json());
app.use("/api/auth", authRoutes); // all auth routes prefixed with /api/auth




// Sample route
app.get("/", (req, res) => {
  res.send("🚀 Backend running successfully!");
});

// Take port from .env (default 5000 if not set)
const PORT = process.env.BACKEND_SERVER_PORT || 5000;


app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});