// AdminNavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavBar.css'; 


// LogOut Function
const AdminNavBar = () => {
  const handleLogout = () => {
    alert("Logged out!"); 
  };

  return (
    <nav className="admin-navbar">
      <ul className="navbar-list">
      <li>
          <Link to="/admin" className="navbar-link">
             Home
          </Link>
        </li>
        <li>
          <Link to="/notifications" className="navbar-link">
            Notifications
          </Link>
        </li>
        
        <li>
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/drivers" className="navbar-link">
            Drivers
          </Link>
        </li>
        <li>
          <Link to="/vehicles" className="navbar-link">
            Vehicles
          </Link>
        </li>
        <li>
          <button className="navbar-logout" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavBar;
