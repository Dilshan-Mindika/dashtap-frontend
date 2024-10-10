import React, { useState, useEffect } from 'react';

const RejectedVehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch rejected vehicles data from the backend database
    fetch('/api/vehicle-requests/rejected')
      .then(response => response.json())
      .then(data => setVehicles(data))
      .catch(error => console.error('Error fetching rejected vehicles:', error));
  }, []);

  return (
    <div>
      <h1>Rejected Vehicles</h1>
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

export default RejectedVehicles;
