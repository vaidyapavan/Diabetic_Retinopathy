const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://vaidyapavan1000:vaidyapavan1000@cluster0.ppxhn.mongodb.net/user')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Hospital Schema for 'Hospital_Credentials' collection
const hospitalSchema = new mongoose.Schema({
  name: String,
  address: String,
  hospital_id: String,
  password: String,
}, { collection: 'Hospital_Credentials' });

const Hospital = mongoose.model('Hospital', hospitalSchema);

// Hospital Registration Route
app.post('/register-hospital', async (req, res) => {
  const { name, address, hospital_id, password } = req.body;

  // Simple validation for required fields
  if (!name || !address || !hospital_id || !password) {
    return res.status(400).json({ success: false, message: 'Please fill in all the fields.' });
  }

  try {
    // Check if the hospital already exists
    const existingHospital = await Hospital.findOne({ hospital_id });
    if (existingHospital) {
      return res.status(400).json({ success: false, message: 'Hospital with this ID already exists.' });
    }

    // Create a new hospital object
    const newHospital = new Hospital({
      name,
      address,
      hospital_id,
      password
    });

    // Save hospital to the database
    const savedHospital = await newHospital.save();
    if (savedHospital) {
      res.status(200).json({ success: true, message: 'Hospital successfully registered!' });
    } else {
      res.status(500).json({ success: false, message: 'Error saving hospital to database' });
    }

  } catch (error) {
    console.error('Error saving hospital to database:', error);
    res.status(500).json({ success: false, message: 'Error saving hospital to database' });
  }
});


// MongoDB connection
mongoose.connect('mongodb+srv://vaidyapavan1000:vaidyapavan1000@cluster0.ppxhn.mongodb.net/user')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Patient Schema for 'patient_credentials' collection
const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  bloodGroup: String,
  address: String,
  phone: String,
  isGenetic: String,
}, { collection: 'patient_credentials' });

const Patient = mongoose.model('Patient', patientSchema);

// Patient Registration Route
app.post('/register-patient', async (req, res) => {
  const { name, age, bloodGroup, address, phone, isGenetic } = req.body;

  // Simple validation for required fields
  if (!name || !age || !bloodGroup || !address || !phone) {
    return res.status(400).json({ success: false, message: 'Please fill in all the fields.' });
  }

  try {
    // Create a new patient object
    const newPatient = new Patient({
      name,
      age,
      bloodGroup,
      address,
      phone,
      isGenetic
    });

    // Save patient to the database
    const savedPatient = await newPatient.save();
    if (savedPatient) {
      res.status(200).json({ success: true, message: 'Patient successfully registered!' });
    } else {
      res.status(500).json({ success: false, message: 'Error saving patient to database' });
    }

  } catch (error) {
    console.error('Error saving patient to database:', error);
    res.status(500).json({ success: false, message: 'Error saving patient to database' });
  }
});




app.post('/login-hospital', async (req, res) => {
    const { hospital_id, password } = req.body;
  
    // Simple validation for required fields
    if (!hospital_id || !password) {
      return res.status(400).json({ success: false, message: 'Please provide both Hospital ID and password.' });
    }
  
    try {
      // Check if the hospital credentials exist in the database
      const hospital = await Hospital.findOne({ hospital_id, password });
  
      if (!hospital) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
  
      // If hospital credentials are valid, respond with success
      res.status(200).json({ success: true, message: 'Login successful' });
  
    } catch (error) {
      console.error('Error logging in hospital:', error);
      res.status(500).json({ success: false, message: 'Error logging in hospital' });
    }
  });




  // Contact Query Schema for 'contact_queries' collection
const contactQuerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now } // Adds a timestamp for when the query was submitted
}, { collection: 'contact_queries' });

const ContactQuery = mongoose.model('ContactQuery', contactQuerySchema);

// Route to handle Contact Form Submission
app.post('/submit-query', async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation for required fields
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all the fields.' });
  }

  try {
    // Create a new contact query object
    const newContactQuery = new ContactQuery({
      name,
      email,
      message
    });

    // Save contact query to the database
    const savedQuery = await newContactQuery.save();
    if (savedQuery) {
      res.status(200).json({ success: true, message: 'Query successfully submitted!' });
    } else {
      res.status(500).json({ success: false, message: 'Error saving query to database' });
    }

  } catch (error) {
    console.error('Error saving query to database:', error);
    res.status(500).json({ success: false, message: 'Error saving query to database' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
