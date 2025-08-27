


USE campus_placement;

SELECT id, name, email AS primary_email, role, created_at
FROM users;

SHOW DATABASES;
USE campus_placement;
SHOW TABLES;

--  cout the no of req user in our db
SELECT COUNT(*) FROM users;
DESCRIBE users;


USE campus_placement;
SELECT * FROM users ORDER BY id DESC;
