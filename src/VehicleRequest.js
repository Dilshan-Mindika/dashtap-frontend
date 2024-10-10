import React, { useState, useEffect } from 'react';
import './VehicleRequest.css';
import { Link } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';
const VehicleRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch vehicle registration requests data from the backend database
    fetch('/api/vehicle-requests/pending')
      .then(response => response.json())
      .then(data => setRequests(data))
      .catch(error => console.error('Error fetching vehicle requests:', error));
  }, []);

  const approveVehicle = (id) => {
    fetch(`/api/vehicle-requests/${id}/approve`, { method: 'POST' })
      .then(() => setRequests(requests.filter(request => request.id !== id)))
      .catch(error => console.error('Error approving vehicle:', error));
  };

  const rejectVehicle = (id) => {
    fetch(`/api/vehicle-requests/${id}/reject`, { method: 'POST' })
      .then(() => setRequests(requests.filter(request => request.id !== id)))
      .catch(error => console.error('Error rejecting vehicle:', error));
  };
  const [formData, setFormData] = useState({
    fullName: '',
    vehicleNumber: '',
    vehicleType: '',
    seatingCapacity: '',
    yearOfManufacture: '',
    contactNumber: '',
    driverAvailability: '',
    revenueLicense: './download (1).jpg',
    insuranceCard: './download (1).jpg',
    vehiclePhoto: './download (1).jpg',
  });

  // Fetch data from the database (Replace with actual API call)
  useEffect(() => {
    
    const fetchedData = {
      fullName: 'John Doe',
      vehicleNumber: 'XXX-XXXX',
      vehicleType: 'SUV',
      seatingCapacity: '5',
      yearOfManufacture: '2019',
      contactNumber: '+94XX-XXX-XXXX',
      driverAvailability: 'With Driver',
      revenueLicense: 'path-to-revenue-license-image.jpg',
      insuranceCard: 'path-to-insurance-card-image.jpg',
      vehiclePhoto: 'path-to-vehicle-photo.jpg',
    };

    setFormData(fetchedData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
//submit data logic
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Data:', formData);
  };

  return (
    <div className="vehicleRequest-Dashboard">


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

    
    <div className="Vehicle-content">
      <AdminNavBar /> 
{/* Form Display */}
        <div className="vehicle-form-container">
          <h2 className="form-title">Vehicle Details</h2>
          <form className="vehicle-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name :</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your name"
                disabled
              />
            </div>

            <div className="input-group">
              <label>Vehicle Number :</label>
              <input
                type="text"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleInputChange}
                placeholder="XXX-XXXX"
                disabled
              />
            </div>

            <div className="input-group">
              <label>Vehicle Type :</label>
              <div className="vehicle-type-options">
                <label>
                  <input
                    type="radio"
                    name="vehicleType"
                    value="Car"
                    checked={formData.vehicleType === 'Car'}
                    onChange={handleInputChange}
                    disabled
                  /> Car
                </label>
                <label>
                  <input
                    type="radio"
                    name="vehicleType"
                    value="Van"
                    checked={formData.vehicleType === 'Van'}
                    onChange={handleInputChange}
                    disabled
                  /> Van
                </label>
                <label>
                  <input
                    type="radio"
                    name="vehicleType"
                    value="Bus"
                    checked={formData.vehicleType === 'Bus'}
                    onChange={handleInputChange}
                    disabled
                  /> Bus
                </label>
                <label>
                  <input
                    type="radio"
                    name="vehicleType"
                    value="SUV"
                    checked={formData.vehicleType === 'SUV'}
                    onChange={handleInputChange}
                    disabled
                  /> SUV
                </label>
              </div>
            </div>

            <div className="input-group">
              <label>Seating Capacity :</label>
              <input
                type="number"
                name="seatingCapacity"
                value={formData.seatingCapacity}
                onChange={handleInputChange}
                placeholder="Enter seating capacity"
                disabled
              />
            </div>

            <div className="input-group">
              <label>Year of Manufacture :</label>
              <input
                type="text"
                name="yearOfManufacture"
                value={formData.yearOfManufacture}
                onChange={handleInputChange}
                placeholder="Enter year"
                disabled
              />
            </div>

            <div className="input-group">
              <label>Contact Number :</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder="Enter your contact number"
                disabled
              />
            </div>

            <div className="input-group">
              <label>Driver Availability :</label>
              <div className="driver-availability-options">
                <label>
                  <input
                    type="radio"
                    name="driverAvailability"
                    value="With Driver"
                    checked={formData.driverAvailability === 'With Driver'}
                    onChange={handleInputChange}
                    disabled
                  /> With Driver
                </label>
                <label>
                  <input
                    type="radio"
                    name="driverAvailability"
                    value="Without Driver"
                    checked={formData.driverAvailability === 'Without Driver'}
                    onChange={handleInputChange}
                    disabled
                  /> Without Driver
                </label>
              </div>
            </div>

            <div className="input-group">
              <label>Vehicle Revenue License Preview :</label>
              {formData.revenueLicense && (
                <img
                  src={formData.revenueLicense}
                  alt="Revenue License"
                  className="image-preview"
                />
              )}
            </div>

            <div className="input-group">
              <label>Insurance Card Preview :</label>
              {formData.insuranceCard && (
                <img
                  src={formData.insuranceCard}
                  alt="Insurance Card"
                  className="image-preview"
                />
              )}
            </div>

            <div className="input-group">
              <label>Vehicle Photo Preview :</label>
              {formData.vehiclePhoto && (
                <img
                  src={formData.vehiclePhoto}
                  alt="Vehicle Photo"
                  className="image-preview"
                />
              )}
            </div>

            <div className="form-actions">
              <button type="submit" className="approve-btn">Approve</button>
              <button type="button" className="reject-btn">Reject</button>
            </div>
          </form>
      </div>

  {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <img src="src\components\WhatsApp Image 2024-08-19 at 13.58.55.jpeg" alt="Footer Logo" />
          <p>&copy; 2024. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <p>Contact us: +94XX-XXX-XXXX</p>
          <div className="social-icons">
            <a href="#"><img src="path-to-facebook-icon.png" alt="Facebook" /></a>
            <a href="#"><img src="path-to-twitter-icon.png" alt="Twitter" /></a>
            <a href="#"><img src="path-to-instagram-icon.png" alt="Instagram" /></a>
          </div>
        </div>
      </footer>
      </div>
  </div>
);
};


export default VehicleRequest;

 {/* <header className="header">
      <div className="header-left">
        <img src="path-to-logo.png" alt="Logo" className="logo" />
        <h1 className="brand-name">DASH TAP</h1>
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <button className="add-vehicle-btn">ADD VEHICLE</button>
    </header> */}