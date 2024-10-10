import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './components/AdminHome';
import VehicleRequest from './components/VehicleRequest';
import DriverRequest from './components/DriverRequest';
import ApprovedVehicles from './components/ApprovedVehicles';
import RejectedVehicles from './components/RejectedVehicles';
import ApprovedDrivers from './components/ApprovedDrivers';
import RejectedDrivers from './components/RejectedDrivers';
import UserList from './components/AdminRegUsers';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<AdminHome />} />
        <Route path="/dashboard" element={<AdminHome />} />
        <Route path="/vehicle-request" element={<VehicleRequest />} />
        <Route path="/driver-request" element={<DriverRequest />} />
        <Route path="/approved-vehicles" element={<ApprovedVehicles />} />
        <Route path="/rejected-vehicles" element={<RejectedVehicles />} />
        <Route path="/approved-drivers" element={<ApprovedDrivers />} />
        <Route path="/rejected-drivers" element={<RejectedDrivers />} />
        <Route path="/user-list" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
