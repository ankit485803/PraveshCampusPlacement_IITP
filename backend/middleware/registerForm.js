

// backend/middleware/registerForm.js


module.exports = function(req, res, next) {
  // Use express built-in body parsers
  // This middleware will run before your register route handler

  // Parse URL encoded data (from HTML forms)
  const express = require("express");
  express.urlencoded({ extended: true })(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: "Invalid form data" });
    }

    // If Content-Type is JSON, parse JSON body
    if (req.is("application/json")) {
      express.json()(req, res, next);
    } else {
      // For URL-encoded or others, proceed to next middleware
      next();
    }
  });
};
