import React, { useState, useEffect } from 'react';

const ApprovedVehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
// Fetch approved vehicles data from the backend database
    fetch('/api/vehicle-requests/approved')
      .then(response => response.json())
      .then(data => setVehicles(data))
      .catch(error => console.error('Error fetching approved vehicles:', error));
  }, []);

  return (
    <div>
      <h1>Approved Vehicles</h1>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            {vehicle.make} - {vehicle.model} ({vehicle.registrationNumber})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApprovedVehicles;
