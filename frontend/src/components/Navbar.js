

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">PraveshCampusPlacement_IITP</Link>
      {token ? (
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      ) : (
        <Link className="btn btn-success" to="/">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
