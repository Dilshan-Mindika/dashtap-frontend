import React, { useState, useEffect } from 'react';

const DriverRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
  // Fetch driver registration requests data from the backend
    fetch('/api/driver-requests/pending')
      .then(response => response.json())
      .then(data => setRequests(data))
      .catch(error => console.error('Error fetching driver requests:', error));
  }, []);

  // Approve function
  const approveDriver = (id) => {
    fetch(`/api/driver-requests/${id}/approve`, { method: 'POST' })
      .then(() => setRequests(requests.filter(request => request.id !== id)))
      .catch(error => console.error('Error approving driver:', error));
  };
// Reject Function
  const rejectDriver = (id) => {
    fetch(`/api/driver-requests/${id}/reject`, { method: 'POST' })
      .then(() => setRequests(requests.filter(request => request.id !== id)))
      .catch(error => console.error('Error rejecting driver:', error));
  };

  return (
    <div>
      <h1>Driver Registration Requests</h1>
      <ul>
        {requests.map(request => (
          <li key={request.id}>
            {request.name} - {request.licenseNumber}
            <button onClick={() => approveDriver(request.id)}>Approve</button>
            <button onClick={() => rejectDriver(request.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverRequest;
