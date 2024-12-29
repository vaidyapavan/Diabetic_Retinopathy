import './Maindash.css';
import Sidebar from '../Sidebar';
import Header from './Header';
import PatientDetails from './PatientDetails';
import Vitals from './Vitals';
import PatientHistory from './PatientHistory';
import DashboardCard from './DashboardCard'; // Add the import for the DashboardCard component

function Maindash() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div className="mainContent">
          <Header /> {/* Header at the top */}
          <div className="sectionContainer">
            <DashboardCard /> {/* Here, render your DashboardCard */}
            <PatientDetails />
            <Vitals />
            <PatientHistory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maindash;
