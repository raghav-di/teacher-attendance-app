const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const geolib = require('geolib');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// 1. Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("Could not connect to MongoDB", err));

// 2. Define the Attendance Schema
const attendanceSchema = new mongoose.Schema({
  teacherId: String,
  name: String,
  timestamp: { type: Date, default: Date.now },
  location: { latitude: Number, longitude: Number },
  status: String
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

// 3. College Coordinates (Change these to your college's actual location)
const COLLEGE_COORDS = {
  latitude: 28.731821, 
  longitude: 77.114732
};
const MAX_DISTANCE = 200; // Meters

// 4. The Attendance Endpoint
app.post('/api/attendance', async (req, res) => {
  const { teacherId, name, latitude, longitude } = req.body;

  // Calculate distance between teacher and college
  const distance = geolib.getDistance(
    { latitude, longitude },
    COLLEGE_COORDS
  );

  if (distance <= MAX_DISTANCE) {
    try {
      const log = new Attendance({
        teacherId,
        name,
        location: { latitude, longitude },
        status: 'PRESENT'
      });
      await log.save();
      
      res.status(200).json({ 
        message: `Attendance marked! You are ${distance}m away.`, 
        distance 
      });
    } catch (error) {
      res.status(500).json({ message: "Database Error" });
    }
  } else {
    res.status(403).json({ 
      message: "Not in premise.", 
      distance 
    });
  }
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


//R4w1MWRLjuExHNK9
//