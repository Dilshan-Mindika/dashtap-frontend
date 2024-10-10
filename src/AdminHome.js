import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminHome.css';
import AdminNavBar from './AdminNavBar';

const AdminHome = () => {
    const [totalDrivers, setTotalDrivers] = useState(0);
    const [totalVehicles, setTotalVehicles] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalVehicleOwners, setTotalVehicleOwners] = useState(0);
  
    // Fetch table data from backend
    useEffect(() => {
      fetch("/admin/counts")
        .then(response => response.json())
        .then(data => {
          setTotalDrivers(data.totalDrivers);
          setTotalVehicles(data.totalVehicles);
          setTotalUsers(data.totalUsers);
          setTotalVehicleOwners(data.totalVehicleOwners);
        })
        .catch(error => {
          console.error("Error fetching counts:", error);
        });
    }, []);

  return (
    
       

    <div className="admin-dashboard">
      
      
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
          <li><Link to="/user-list" className="nav-link">Registered Users</Link></li>
        </ul>
      </div>

      
      <div className="main-content">
      <AdminNavBar /> 
       
          <div className="dashboard-stats">
          <div className="stat-box">
            <h3>Total Drivers</h3>
            <p>{totalDrivers}</p>
            
          </div>
          <div className="stat-box">
            <h3>Total Vehicles</h3>
            <p>{totalVehicles}</p>
            
          </div>
          <div className="stat-box">
            <h3>Total Users</h3>
            <p>{totalUsers}</p>
          
          </div>
          <div className="stat-box vehicle-owners">
            <h2>Total Vehicle Owners</h2>
            <p>{totalVehicleOwners}</p>
          </div>
        </div>

{/* Booking Details updating */}
        <div className="recent-bookings">
          <h2>Recent Car Bookings</h2>
          <table>
            <thead>
              <tr>
                <th>Booking</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
