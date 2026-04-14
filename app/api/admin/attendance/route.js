import mongoose from "mongoose";

let conn = null;

const attendanceSchema = new mongoose.Schema({
  teacherId: String,
  name: String,
  timestamp: { type: Date, default: Date.now },
  location: { latitude: Number, longitude: Number },
  status: String,
});
const Attendance = mongoose.models.Attendance || mongoose.model("Attendance", attendanceSchema);

const requireAdminPassword = (req) => {
  const password = req.headers.get("x-admin-password");
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return false;
  }
  return true;
};

export async function GET(req) {
  if (!requireAdminPassword(req)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const url = new URL(req.url);
  const startDate = url.searchParams.get("startDate");
  const endDate = url.searchParams.get("endDate");
  const teacherId = url.searchParams.get("teacherId");

  const filter = {};

  if (teacherId) {
    filter.teacherId = teacherId;
  }

  if (startDate) {
    const start = new Date(`${startDate}T00:00:00.000Z`);
    const end = endDate ? new Date(`${endDate}T23:59:59.999Z`) : new Date(`${startDate}T23:59:59.999Z`);
    filter.timestamp = { $gte: start, $lte: end };
  } else if (endDate) {
    const end = new Date(`${endDate}T23:59:59.999Z`);
    filter.timestamp = { $lte: end };
  }

  if (!teacherId && !startDate && !endDate) {
    return new Response(JSON.stringify({ error: "Please provide a date or teacher ID filter." }), { status: 400 });
  }

  if (!conn) {
    conn = await mongoose.connect(process.env.MONGO_URI);
  }

  const records = await Attendance.find(filter).sort({ timestamp: -1 }).limit(200).lean();
  return new Response(JSON.stringify({ records }), { status: 200 });
}
