module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/api/admin/attendance/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/mongoose)");
;
let conn = null;
const attendanceSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    teacherId: String,
    name: String,
    timestamp: {
        type: Date,
        default: Date.now
    },
    location: {
        latitude: Number,
        longitude: Number
    },
    status: String
});
const Attendance = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$mongoose$29$__["default"].models.Attendance || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$mongoose$29$__["default"].model("Attendance", attendanceSchema);
const requireAdminPassword = (req)=>{
    const password = req.headers.get("x-admin-password");
    if (!password || password !== process.env.ADMIN_PASSWORD) {
        return false;
    }
    return true;
};
async function GET(req) {
    if (!requireAdminPassword(req)) {
        return new Response(JSON.stringify({
            error: "Unauthorized"
        }), {
            status: 401
        });
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
        filter.timestamp = {
            $gte: start,
            $lte: end
        };
    } else if (endDate) {
        const end = new Date(`${endDate}T23:59:59.999Z`);
        filter.timestamp = {
            $lte: end
        };
    }
    if (!teacherId && !startDate && !endDate) {
        return new Response(JSON.stringify({
            error: "Please provide a date or teacher ID filter."
        }), {
            status: 400
        });
    }
    if (!conn) {
        conn = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$mongoose$29$__["default"].connect(process.env.MONGO_URI);
    }
    const records = await Attendance.find(filter).sort({
        timestamp: -1
    }).limit(200).lean();
    return new Response(JSON.stringify({
        records
    }), {
        status: 200
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0hbhxx7._.js.map