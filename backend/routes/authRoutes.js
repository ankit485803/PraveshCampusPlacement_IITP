const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();
//show all req user
const printAllExistingUsers = require("./printAllExistingUsers");


// Register route with form parsing middleware
const registerFormParser = require("../middleware/registerForm");


// REGISTER
router.post("/register", (req, res) => {
  const {
    name,
    email,
    password,
    role,
    emails = [],     // optional extra emails
    phones = []      // optional phone numbers
  } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);

  // Step 1: Insert user into users table
  db.query(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword, role],
    (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).json({ message: "Email already registered" });
        }
        return res.status(500).json({ error: err });
      }

      const userId = result.insertId;

      // Step 2: Insert extra emails (if any)
      if (emails.length > 0) {
        const emailValues = emails.map(email => [userId, email, false]);
        db.query(
          "INSERT INTO user_emails (user_id, email, is_primary) VALUES ?",
          [emailValues],
          (err) => {
            if (err) {
              console.error("❌ Error inserting extra emails:", err.message);
            }
          }
        );
      }

      // Step 3: Insert phone numbers (if any)
      if (phones.length > 0) {
        const phoneValues = phones.map(phone => [
          userId,
          phone.number,
          phone.type || "personal"
        ]);
        db.query(
          "INSERT INTO user_phones (user_id, phone, type) VALUES ?",
          [phoneValues],
          (err) => {
            if (err) {
              console.error("❌ Error inserting phone numbers:", err.message);
            }
          }
        );
      }

      // Final response and Return the newly created user (without password)
      const newUser = {
        id: userId,
        name,
        email,
        role
      };

      res.status(201).json({
        message: "✅ User registered successfully!",
        user: newUser
      });
    }
  );
});







// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(400).json({ message: "User not found" });

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) return res.status(401).json({ message: "Invalid password" });


    // JWT secret & expiry from .env
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );

    res.json({ message: "✅ Login successful", token, role: user.role });
  });
});






// Show all registered users with optional contact info
router.get("/users", printAllExistingUsers);




module.exports = router;
