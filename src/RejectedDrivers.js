import React, { useState, useEffect } from 'react';

const RejectedDrivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Fetch rejected drivers data from the backend database
    fetch('/api/driver-requests/rejected')
      .then(response => response.json())
      .then(data => setDrivers(data))
      .catch(error => console.error('Error fetching rejected drivers:', error));
  }, []);

  return (
    <div>
      <h1>Rejected Drivers</h1>
      <ul>
        {drivers.map(driver => (
          <li key={driver.id}>
            {driver.name} - {driver.licenseNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RejectedDrivers;
