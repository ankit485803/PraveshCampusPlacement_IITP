


# PraveshCampusPlacement_IITP

🚀 A lightweight **Campus Placement Automation System** built with the **MERN stack** + MySQL.  
This project was developed as a small full-stack application to automate the student placement process in colleges.  

---

## 📌 Features

- **User Roles**
  - 🎓 Student → Register, login, view jobs, apply for jobs  
  - 🏢 Recruiter → Register, login, post jobs  
  - 🛠️ Placement Officer (Admin) → Manage applications & placement rounds  

- **Modules**
  - 🔑 Authentication (JWT-based)  
  - 📄 Job Posting  
  - 📝 Applications (round-wise results)  

---

## 🏗️ Tech Stack

- **Frontend** → React + Axios + React Router  
- **Backend** → Node.js + Express.js  
- **Database** → MySQL  
- **Auth** → JWT + bcrypt  

---

## 📂 Project Structure

- **PraveshCampusPlacement_IITP/**
  - **backend/**
    - config/db.js → Database connection  
    - routes/authRoutes.js → Auth APIs  
    - server.js → Express server 

  - **frontend/src/**
    - pages/ → Login, Register, Dashboards  
    - components/ → Navbar, PrivateRoute  
    - api/axios: Config.js  
    - App.js  
    - index.js  
    
  - **database/**
    - schema.sql → MySQL schema  



<br>

## 📡 API Endpoints

### Auth
- `POST /api/auth/register` → Register new user
- `POST /api/auth/login` → Login and receive JWT

### Jobs
- `POST /api/jobs` → Create new job (Recruiter only)
- `GET /api/jobs` → List all jobs
- `POST /api/jobs/:id/apply` → Apply for a job (Student only)

### Applications
- `GET /api/applications` → View student applications (Admin/Recruiter)
- `PUT /api/applications/:id` → Update round results
