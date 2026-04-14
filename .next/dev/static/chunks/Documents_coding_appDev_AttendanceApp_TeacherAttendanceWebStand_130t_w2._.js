(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ADMIN_VERIFY_URL = "/api/admin/verify";
const ADMIN_ATTENDANCE_URL = "/api/admin/attendance";
function AdminPage() {
    _s();
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loggedIn, setLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loginError, setLoginError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingLogin, setLoadingLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [teacherId, setTeacherId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingResults, setLoadingResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resultsError, setResultsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const authHeader = ()=>({
            "x-admin-password": password
        });
    const handleLogin = async (event)=>{
        event.preventDefault();
        setLoginError("");
        if (!password) {
            setLoginError("Enter admin password.");
            return;
        }
        setLoadingLogin(true);
        try {
            const res = await fetch(ADMIN_VERIFY_URL, {
                method: "GET",
                headers: authHeader()
            });
            if (!res.ok) {
                setLoginError("Invalid password.");
                setLoggedIn(false);
            } else {
                setLoggedIn(true);
                setLoginError("");
            }
        } catch (error) {
            setLoginError("Unable to verify admin password.");
            setLoggedIn(false);
        } finally{
            setLoadingLogin(false);
        }
    };
    const handleLogout = ()=>{
        setLoggedIn(false);
        setPassword("");
        setLoginError("");
        setRecords([]);
        setResultsError("");
    };
    const handleSearch = async ()=>{
        setResultsError("");
        setRecords([]);
        if (!startDate && !teacherId) {
            setResultsError("Please select a date or enter a teacher ID.");
            return;
        }
        if (!password) {
            setResultsError("Admin password is required.");
            return;
        }
        if (startDate && endDate && endDate < startDate) {
            setResultsError("End date cannot be earlier than start date.");
            return;
        }
        setLoadingResults(true);
        try {
            const params = new URLSearchParams();
            if (startDate) params.append("startDate", startDate);
            if (endDate) params.append("endDate", endDate);
            if (teacherId) params.append("teacherId", teacherId.trim());
            const url = `${ADMIN_ATTENDANCE_URL}?${params.toString()}`;
            const res = await fetch(url, {
                headers: authHeader()
            });
            const json = await res.json();
            if (!res.ok) {
                setResultsError(json.error || "Something went wrong.");
            } else {
                setRecords(json.records || []);
                if ((json.records || []).length === 0) {
                    setResultsError("No attendance records found for these filters.");
                }
            }
        } catch (error) {
            setResultsError("Unable to fetch attendance data.");
        } finally{
            setLoadingResults(false);
        }
    };
    const formatTimestamp = (value)=>{
        if (!value) return "-";
        const date = new Date(value);
        return date.toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 text-slate-900 py-10 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold tracking-tight",
                                    children: "Admin Attendance"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-slate-600",
                                    children: "Use your admin password in `.env.local` as `ADMIN_PASSWORD`."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        loggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800",
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                !loggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold",
                            children: "Admin Login"
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-slate-700",
                                    children: "Admin Password"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    className: "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-200",
                                    placeholder: "Enter admin password"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this),
                        loginError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-600",
                            children: loginError
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                            lineNumber: 148,
                            columnNumber: 28
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loadingLogin,
                            className: "inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60",
                            children: loadingLogin ? "Verifying..." : "Login"
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 lg:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-3xl border border-slate-200 bg-slate-50 p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold",
                                            children: "Date Filter"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-slate-600",
                                            children: "Select a single date or a range."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-slate-700",
                                                            children: "Start Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: startDate,
                                                            onChange: (e)=>setStartDate(e.target.value),
                                                            className: "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 166,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                    lineNumber: 164,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-slate-700",
                                                            children: "End Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: endDate,
                                                            onChange: (e)=>setEndDate(e.target.value),
                                                            className: "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 175,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold",
                                            children: "Teacher Filter"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-slate-600",
                                            children: "Search attendance by teacher ID."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex flex-col gap-4 sm:flex-row sm:items-end",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "w-full sm:w-1/2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-sm font-medium text-slate-700",
                                                            children: "Teacher ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: teacherId,
                                                            onChange: (e)=>setTeacherId(e.target.value),
                                                            placeholder: "e.g. 420",
                                                            className: "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-200"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 191,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleSearch,
                                                    disabled: loadingResults,
                                                    className: "inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60",
                                                    children: loadingResults ? "Loading..." : "Show Result"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                    lineNumber: 199,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        resultsError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-sm text-red-600",
                                            children: resultsError
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                            lineNumber: 208,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto rounded-3xl border border-slate-200 bg-white p-4 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: "Attendance Results"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 min-w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "min-w-full divide-y divide-slate-200 text-left text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-slate-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 font-semibold text-slate-700",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 218,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 font-semibold text-slate-700",
                                                            children: "Teacher ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 219,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 font-semibold text-slate-700",
                                                            children: "Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 220,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 font-semibold text-slate-700",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 font-semibold text-slate-700",
                                                            children: "Location"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 222,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-slate-200 bg-white",
                                                children: records.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: "5",
                                                        className: "px-4 py-8 text-center text-slate-500",
                                                        children: "No records to display. Use the filters and click Show Result."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                        lineNumber: 228,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                    lineNumber: 227,
                                                    columnNumber: 23
                                                }, this) : records.map((record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-slate-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-slate-700",
                                                                children: formatTimestamp(record.timestamp)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                                lineNumber: 235,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-slate-700",
                                                                children: record.teacherId || "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                                lineNumber: 236,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-slate-700",
                                                                children: record.name || "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                                lineNumber: 237,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-slate-700",
                                                                children: record.status || "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                                lineNumber: 238,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-slate-700",
                                                                children: record.location?.latitude && record.location?.longitude ? `${record.location.latitude.toFixed(5)}, ${record.location.longitude.toFixed(5)}` : "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                                lineNumber: 239,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, record._id, true, {
                                                        fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                        lineNumber: 234,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                    lineNumber: 158,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "sUg2jHJdvWzBPeN67x5iLFKi4E4=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=Documents_coding_appDev_AttendanceApp_TeacherAttendanceWebStand_130t_w2._.js.map