


-- Create Database
CREATE DATABASE IF NOT EXISTS campus_placement;
USE campus_placement;

-- Users Table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('student','recruiter','officer') NOT NULL
);

-- Jobs Table
CREATE TABLE jobs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  recruiter_id INT NOT NULL,
  FOREIGN KEY (recruiter_id) REFERENCES users(id)
);

-- Applications Table
CREATE TABLE applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  job_id INT NOT NULL,
  round INT DEFAULT 1,
  status ENUM('applied','selected','rejected') DEFAULT 'applied',
  FOREIGN KEY (student_id) REFERENCES users(id),
  FOREIGN KEY (job_id) REFERENCES jobs(id)
);


-- SHOW TABLES;

