const mongoose = require('mongoose');
const geolib = require('geolib');

let conn = null; // cached connection

// Schema
const attendanceSchema = new mongoose.Schema({
  teacherId: String,
  name: String,
  timestamp: { type: Date, default: Date.now },
  location: { latitude: Number, longitude: Number },
  status: String
});
const Attendance = mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema);

// College coordinates
const COLLEGE_COORDS = { latitude: 28.731821, longitude: 77.114732 };
const MAX_DISTANCE = 200; // meters

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Connect to MongoDB Atlas (reuse connection if already open)
  if (!conn) {
    conn = await mongoose.connect(process.env.MONGO_URI);
  }

  const { teacherId, name, latitude, longitude } = req.body;

  const distance = geolib.getDistance({ latitude, longitude }, COLLEGE_COORDS);

  if (distance <= MAX_DISTANCE) {
    try {
      const log = new Attendance({
        teacherId,
        name,
        location: { latitude, longitude },
        status: 'PRESENT'
      });
      await log.save();

      return res.status(200).json({
        message: `Attendance marked! You are ${distance}m away.`,
        distance
      });
    } catch (error) {
      return res.status(500).json({ message: "Database Error" });
    }
  } else {
    return res.status(403).json({ message: "Not in premise.", distance });
  }
};
