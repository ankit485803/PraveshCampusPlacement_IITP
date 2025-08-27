

-- Extra user contact details extension for campus_placement DB

USE campus_placement;

-- Table: user_emails
CREATE TABLE IF NOT EXISTS user_emails (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  email VARCHAR(100) NOT NULL,
  is_primary BOOLEAN DEFAULT false,
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE KEY unique_user_email (user_id, email)
);

-- Table: user_phones
CREATE TABLE IF NOT EXISTS user_phones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  phone VARCHAR(20) NOT NULL,
  type ENUM('personal', 'office') DEFAULT 'personal',
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE KEY unique_user_phone (user_id, phone)
);


USE campus_placement;

CREATE TABLE IF NOT EXISTS user_emails (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  email VARCHAR(100) NOT NULL,
  is_primary BOOLEAN DEFAULT false,
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE KEY unique_user_email (user_id, email)
);

CREATE TABLE IF NOT EXISTS user_phones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  phone VARCHAR(20) NOT NULL,
  type ENUM('personal', 'office') DEFAULT 'personal',
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE KEY unique_user_phone (user_id, phone)
);

