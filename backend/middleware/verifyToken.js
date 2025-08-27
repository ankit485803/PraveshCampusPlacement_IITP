

const jwt = require("jsonwebtoken");


const verifyToken = (req, res, next) => {
  // Get token from the Authorization header
  const authHeader = req.headers["authorization"];

  // Format: "Bearer <token>"
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // decoded contains the user payload (e.g., id, role)
    next(); // move to the next middleware or route
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};




module.exports = verifyToken;
