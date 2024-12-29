import React from 'react';  
import UploadPage from './components/UploadPage';
import HomePage from './components/HomePage';
import PatientRegistration from './components/PatientRegistration';
import DoctorRegistration from './components/DoctorRegistration';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Correct imports for Router, Route, and Routes
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import LandingPage from './components/LandingPage';
import RegistrationForm from './components/RegistrationForm';
import AlreadyDoctor from './components/AlreadyDoctor';
import AlreadyPatient from './components/AlreadyPatient';
import MainDashApp from './components/MainDashApp';
import MainDash from './components/PatientDashboard/Maindash';
import CheckDiabetes from './components/CheckDiabetes';


const App = () => {
  return(
    <Router>
    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patient-data" element={<PatientRegistration />} />
        <Route path="/doctor-data" element={<DoctorRegistration />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/UploadPage' element={<UploadPage/>}/>
        <Route path='/login'element={<LandingPage/>}/>
        <Route path="/landingpage" element={<LandingPage/>} />
        <Route path='/registrationform' element={<RegistrationForm/>}/>
        <Route path='/alreadydoctor' element={<AlreadyDoctor/>}/>
        <Route path='/alreadypatient' element={<AlreadyPatient/>}/>
        <Route path="/dashboard" element={<MainDashApp />} />
        <Route path='/patientdashboard' element={<MainDash/>}/>
        <Route path="/check-diabetes" component={CheckDiabetes} />

      </Routes>
    </div>
  </Router>
  )
  

};

export default App;

