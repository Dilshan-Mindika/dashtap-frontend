import React, { useState, useEffect } from 'react';

const ApprovedDrivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Fetch approved drivers data from the backend database
    fetch('/api/driver-requests/approved')
      .then(response => response.json())
      .then(data => setDrivers(data))
      .catch(error => console.error('Error fetching approved drivers:', error));
  }, []);

  return (
    <div>
      <h1>Approved Drivers</h1>
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

export default ApprovedDrivers;
