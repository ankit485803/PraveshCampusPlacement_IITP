


const db = require("../config/db");



// Controller function to fetch all registered users with optional emails & phones
const printAllExistingUsers = (req, res) => {
  const userQuery = `
    SELECT id, name, email, role, created_at
    FROM users
    ORDER BY created_at DESC
  `;

  db.query(userQuery, (err, users) => {
    if (err) {
      console.error("❌ Error fetching users:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }



    const userIds = users.map(u => u.id);

    

    const emailsQuery = `SELECT user_id, email FROM user_emails`;
    const phonesQuery = `SELECT user_id, phone, type FROM user_phones`;

    db.query(emailsQuery, (emailErr, emailResults) => {
      if (emailErr) {
        console.error("❌ Error fetching emails:", emailErr.message);
        return res.status(500).json({ error: "Email fetch failed" });
      }

      db.query(phonesQuery, (phoneErr, phoneResults) => {
        if (phoneErr) {
          console.error("❌ Error fetching phones:", phoneErr.message);
          return res.status(500).json({ error: "Phone fetch failed" });
        }

        const userData = users.map(user => {
          return {
            ...user,
            extra_emails: emailResults
              .filter(e => e.user_id === user.id)
              .map(e => e.email),
            phones: phoneResults
              .filter(p => p.user_id === user.id)
              .map(p => ({ number: p.phone, type: p.type }))
          };
        });

        return res.json(userData);
      });
    });
  });
};





module.exports = printAllExistingUsers;
