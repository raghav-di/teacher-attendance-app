import mongoose from 'mongoose';
import { getDistance } from 'geolib';

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
const COLLEGE_COORDS = { latitude: 28.7196184, longitude: 77.0661762 };
const MAX_DISTANCE = 500; // meters

export async function POST(req) {
  // Connect to MongoDB Atlas (reuse connection if already open)
  if (!conn) {
    conn = await mongoose.connect(process.env.MONGO_URI);
  }

  const { teacherId, name, latitude, longitude } = await req.json();

  const distance = getDistance({ latitude, longitude }, COLLEGE_COORDS);

  if (distance <= MAX_DISTANCE) {
    try {
      const log = new Attendance({
        teacherId,
        name,
        location: { latitude, longitude },
        status: 'PRESENT'
      });
      await log.save();

      return Response.json({
        message: `Attendance marked! You are ${distance}m away.`,
        distance
      });
    } catch (error) {
      return Response.json({ message: "Database Error" }, { status: 500 });
    }
  } else {
    return Response.json({ message: "Not in premise.", distance }, { status: 403 });
  }
}