import React from "react";
import "./vehicleRegistration.css"; // Linking to the CSS file

const VehicleRegistration = () => {
  return (
    <div className="vehicle-form-container">
        <form className="vehicle-form">
            {/* Left Column */}
            <div className="form-left">
                <div className="input-group">
                    <label>Full Name :</label>
                    <input type="text" placeholder="email@.com" />
                </div>
                
                <div className="input-group">
                    <label>Vehicle Number :</label>
                    <input type="text" placeholder="+94xx-xxx-xxxx" />
                </div>
                
                <div className="input-group">
                    <label>Vehicle Type :</label>
                </div>
                <div className = "VT-Container">
                    <div className="vehicle-type-container">
                    <div>
                        <input type="radio" id="car" name="vehicleType" />
                        <label htmlFor="car">Car</label>
                    </div>
                    <div>
                        <input type="radio" id="van" name="vehicleType" />
                        <label htmlFor="van">Van</label>
                    </div>
                    <div>
                        <input type="radio" id="bus" name="vehicleType" />
                        <label htmlFor="bus">Bus</label>
                    </div>
                    <div>
                        <input type="radio" id="suv" name="vehicleType" />
                        <label htmlFor="suv">SUV</label>
                    </div>
                    </div>
        
                    <div className="input-group ac-options">
                        <label id="WITHIN">Within</label>
                        <div className="ac-container">
                            <div>
                                <input type="radio" id="ac" name="acType" />
                                <label htmlFor="ac">A/C</label>
                            </div>
                            <div>
                                <input type="radio" id="nonac" name="acType" />
                                <label htmlFor="nonac">Non A/C</label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="input-group">
                    <label>Seating Capacity :</label>
                    <input type="text" placeholder="Enter seating capacity" />
                </div>

                <div className="input-group">
                    <label>Year Of Manufacture :</label>
                    <input type="text" placeholder="Enter year" />
                </div>

                <div className="input-group">
                    <label>Contact Number :</label>
                    <input type="text" placeholder="Enter contact number" />
                </div>
                
                <label>Driver Availability :</label>
                <div className="input-group driver-availability">
                    <div>
                    <input type="radio" id="withDriver" name="driverAvailability" />
                    <label htmlFor="withDriver">With Driver</label>
                    </div>
                    <div>
                    <input type="radio" id="withoutDriver" name="driverAvailability" />
                    <label htmlFor="withoutDriver">Without Driver</label>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="form-right">
            <div className="input-group">
                <label>Add the photo of vehicle revenue licences :</label>
                <input className = "input-group-right" type="file" />
            </div>

            <div className="input-group">
                <label>Add the photo of insurance card :</label>
                <input className = "input-group-right" type="file" />
            </div>

            <div className="input-group">
                <label>Add your vehicle's photo (Inside and outside required):</label>
                <input className = "input-group-right" type="file" multiple />
            </div>

            <div className="button-group">
                <button className="approve-btn">Approval</button>
                <button className="reject-btn">Reject</button>
                </div>
            </div>
        </form>
    </div>
  );
};

export default VehicleRegistration;
