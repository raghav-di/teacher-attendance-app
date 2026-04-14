module.exports = [
"[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "/api/attendance";
function Home() {
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [teacherName, setTeacherName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [teacherId, setTeacherId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusMsg, setStatusMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Please set your profile first");
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const name = localStorage.getItem("name");
        const id = localStorage.getItem("id");
        if (name && id) {
            setTeacherName(name);
            setTeacherId(id);
            setStatusMsg(`Welcome ${name}! Ready to check in.`);
        }
    }, []);
    const toggleModal = ()=>setIsModalOpen((open)=>!open);
    const saveProfile = ()=>{
        if (!teacherName || !teacherId) {
            setStatusMsg("Enter both name and teacher ID.");
            return;
        }
        localStorage.setItem("name", teacherName);
        localStorage.setItem("id", teacherId);
        setStatusMsg(`Welcome ${teacherName}! Ready to check in.`);
        setIsModalOpen(false);
    };
    const markAttendance = ()=>{
        if (!teacherName || !teacherId) {
            setStatusMsg("Please save your profile before checking in.");
            setIsModalOpen(true);
            return;
        }
        if (isProcessing) return;
        setIsProcessing(true);
        setStatusMsg("Locating...");
        navigator.geolocation.getCurrentPosition(async (pos)=>{
            const payload = {
                teacherId,
                name: teacherName,
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            };
            try {
                const response = await fetch(BACKEND_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                const resData = await response.json();
                if (response.ok) {
                    setStatusMsg(`✅ ${resData.message}`);
                } else {
                    setStatusMsg(`❌ ${resData.message} (${resData.distance}m away)`);
                }
            } catch (err) {
                setStatusMsg("❌ Network error. Is backend live?");
            } finally{
                setIsProcessing(false);
            }
        }, (err)=>{
            alert("Location Error: Please enable GPS.");
            setIsProcessing(false);
        }, {
            enableHighAccuracy: true
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "w-full bg-white shadow-md py-4 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-800",
                            children: "Teacher Attendance"
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin",
                            className: "text-blue-600 hover:text-blue-800",
                            children: "Admin Panel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 right-6 border-2 border-gray-300 rounded-full p-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleModal,
                            className: "text-blue-600 hover:text-blue-800 border-2 border-blue-600 rounded-full w-10 h-10 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: teacherName ? teacherName.charAt(0).toUpperCase() : "~"
                            }, void 0, false, {
                                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mt-12 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-800 mb-2",
                        children: "Mark Attendance"
                    }, void 0, false, {
                        fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mb-8 italic",
                        children: statusMsg
                    }, void 0, false, {
                        fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: markAttendance,
                        disabled: isProcessing,
                        className: `ripple w-40 h-40 bg-blue-600 text-white rounded-full text-xl font-bold shadow-xl hover:bg-blue-700 focus:outline-none flex items-center justify-center mx-auto ${isProcessing ? "opacity-50" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "CHECK IN"
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: "Teacher Profile"
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: teacherName,
                            onChange: (e)=>setTeacherName(e.target.value),
                            placeholder: "Full Name",
                            className: "w-full border-b-2 border-gray-300 p-2 mb-4 focus:border-blue-500 outline-none"
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: teacherId,
                            onChange: (e)=>setTeacherId(e.target.value),
                            placeholder: "Teacher ID (e.g. T101)",
                            className: "w-full border-b-2 border-gray-300 p-2 mb-6 focus:border-blue-500 outline-none"
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: saveProfile,
                            className: "w-full bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition",
                            children: "SAVE DETAILS"
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$coding$2f$appDev$2f$AttendanceApp$2f$TeacherAttendanceWebStand$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleModal,
                            className: "w-full mt-4 text-gray-400 text-sm",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/coding/appDev/AttendanceApp/TeacherAttendanceWebStand/app/page.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=0m4n_coding_appDev_AttendanceApp_TeacherAttendanceWebStand_app_page_tsx_10bre9~._.js.map