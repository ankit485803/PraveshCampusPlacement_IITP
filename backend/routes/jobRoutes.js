

const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");




// Example of protected route
router.get("/dashboard", verifyToken, (req, res) => {
  // You can access req.user here
  res.json({ message: `Hello, user ${req.user.id}`, user: req.user });
});





module.exports = router;
