module.exports = [
"[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ADMIN_VERIFY_URL = "/api/admin/verify";
const ADMIN_ATTENDANCE_URL = "/api/admin/attendance";
function AdminPage() {
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loggedIn, setLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loginError, setLoginError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingLogin, setLoadingLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [teacherId, setTeacherId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [records, setRecords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingResults, setLoadingResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resultsError, setResultsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 text-slate-900 py-10 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold tracking-tight",
                                    children: "Admin Attendance"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        loggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                !loggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold",
                            children: "Admin Login"
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-slate-700",
                                    children: "Admin Password"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                        loginError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-600",
                            children: loginError
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                            lineNumber: 148,
                            columnNumber: 28
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 lg:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-3xl border border-slate-200 bg-slate-50 p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold",
                                            children: "Date Filter"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-slate-600",
                                            children: "Select a single date or a range."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-slate-700",
                                                            children: "Start Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 165,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-slate-700",
                                                            children: "End Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold",
                                            children: "Teacher Filter"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-slate-600",
                                            children: "Search attendance by teacher ID."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex flex-col gap-4 sm:flex-row sm:items-end",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "w-full sm:w-1/2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "block text-sm font-medium text-slate-700",
                                                            children: "Teacher ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        resultsError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto rounded-3xl border border-slate-200 bg-white p-4 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: "Attendance Results"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 min-w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "min-w-full divide-y divide-slate-200 text-left text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-slate-100",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 font-semibold text-slate-700",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 218,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 font-semibold text-slate-700",
                                                            children: "Teacher ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 219,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 font-semibold text-slate-700",
                                                            children: "Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 220,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 font-semibold text-slate-700",
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-slate-200 bg-white",
                                                children: records.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                                                }, this) : records.map((record)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-slate-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-slate-700",
                                                                children: formatTimestamp(record.timestamp)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                                lineNumber: 235,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-slate-700",
                                                                children: record.teacherId || "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                                lineNumber: 236,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-slate-700",
                                                                children: record.name || "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                                lineNumber: 237,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-4 text-slate-700",
                                                                children: record.status || "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/admin/page.jsx",
                                                                lineNumber: 238,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
}),
"[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=Documents_coding_appDev_AttendanceApp_TeacherAttendanceWebStand_0bd-2yu._.js.map