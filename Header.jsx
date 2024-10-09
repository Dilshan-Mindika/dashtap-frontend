import React from 'react';
import './header.css';

function Header() {
  const handleAddVehicleClick = () => {
    alert("Add Vehicle button clicked!");
  };

  return (
    <header className="navbar">
      <div className="logo">
        {/* Replace "logo.png" with the actual path to your logo */}
        <img src="01.jpeg" alt="Logo" className="logo-img" />
        <span className="brand-name">DASH TAP</span>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="add-vehicle-btn">
        <button onClick={handleAddVehicleClick}>Add Vehicle</button>
      </div>
    </header>
  );
}

export default Header;