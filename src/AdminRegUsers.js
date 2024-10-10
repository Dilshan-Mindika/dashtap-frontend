import React from 'react';
import './AdminRegUsers.css'; 
import { Link } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

const RegisteredUsers = () => {
  return (
    <div className="admin-dashboard">
{/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-logo">
          <h2>DashTap Admin Dashboard</h2>
        </div>
        <ul>
        <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
        <li><Link to="/vehicle-request" className="nav-link">Vehicle Requests</Link></li>
          <li><Link to="/driver-request" className="nav-link">Driver Requests</Link></li>
          <li><Link to="/approved-vehicles" className="nav-link">Approved Vehicles</Link></li>
          <li><Link to="/rejected-vehicles" className="nav-link">Rejected Vehicles</Link></li>
          <li><Link to="/approved-drivers" className="nav-link">Approved Drivers</Link></li>
          <li><Link to="/rejected-drivers" className="nav-link">Rejected Drivers</Link></li>
          <li><Link to="/user-list" className="nav-link1">Registered Users</Link></li>
        </ul>
      </div>

      
      <div className="main-content">
      <AdminNavBar /> 

        
        <div className="user-list-container">
          <h2>Registered Users</h2>
          <div className="action-buttons">
            <button className="active-btn">Active</button>
            <button className="inactive-btn">Inactive</button>
            <button className="delete-btn">Delete</button>
            <button className="export-btn">Export All Users</button>
          </div>

          
          <table className="user-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email-ID</th>
                <th>Image</th>
                <th>Login Type</th>
                <th>Created Date</th>
                <th>Last Login Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisteredUsers;
