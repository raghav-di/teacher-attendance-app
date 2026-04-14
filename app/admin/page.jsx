"use client";

import { useState } from "react";

const ADMIN_VERIFY_URL = "/api/admin/verify";
const ADMIN_ATTENDANCE_URL = "/api/admin/attendance";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [records, setRecords] = useState([]);
  const [loadingResults, setLoadingResults] = useState(false);
  const [resultsError, setResultsError] = useState("");

  const authHeader = () => ({ "x-admin-password": password });

  const handleLogin = async (event) => {
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
        headers: authHeader(),
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
    } finally {
      setLoadingLogin(false);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setPassword("");
    setLoginError("");
    setRecords([]);
    setResultsError("");
  };

  const handleSearch = async () => {
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
      const res = await fetch(url, { headers: authHeader() });
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
    } finally {
      setLoadingResults(false);
    }
  };

  const formatTimestamp = (value) => {
    if (!value) return "-";
    const date = new Date(value);
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Attendance</h1>
          </div>
          {loggedIn && (
            <button
              onClick={handleLogout}
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Logout
            </button>
          )}
        </div>

        {!loggedIn ? (
          <form onSubmit={handleLogin} className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold">Admin Login</h2>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-200"
                placeholder="Enter admin password"
              />
            </div>
            {loginError && <p className="text-sm text-red-600">{loginError}</p>}
            <button
              type="submit"
              disabled={loadingLogin}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
            >
              {loadingLogin ? "Verifying..." : "Login"}
            </button>
          </form>
        ) : (
          <div className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold">Date Filter</h2>
                <p className="mt-2 text-sm text-slate-600">Select a single date or a range.</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Start Date</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">End Date</label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-200"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:col-span-2">
                <h2 className="text-lg font-semibold">Teacher Filter</h2>
                <p className="mt-2 text-sm text-slate-600">Search attendance by teacher ID.</p>
                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end">
                  <label className="w-full sm:w-1/2">
                    <span className="block text-sm font-medium text-slate-700">Teacher ID</span>
                    <input
                      type="text"
                      value={teacherId}
                      onChange={(e) => setTeacherId(e.target.value)}
                      placeholder="e.g. 01020323"
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-200"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={handleSearch}
                    disabled={loadingResults}
                    className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
                  >
                    {loadingResults ? "Loading..." : "Show Result"}
                  </button>
                </div>
                {resultsError && <p className="mt-4 text-sm text-red-600">{resultsError}</p>}
              </div>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <h2 className="text-lg font-semibold">Attendance Results</h2>
              <div className="mt-4 min-w-full">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-slate-700">Date</th>
                      <th className="px-4 py-3 font-semibold text-slate-700">Teacher ID</th>
                      <th className="px-4 py-3 font-semibold text-slate-700">Name</th>
                      <th className="px-4 py-3 font-semibold text-slate-700">Status</th>
                      <th className="px-4 py-3 font-semibold text-slate-700">Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {records.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="px-4 py-8 text-center text-slate-500">
                          No records to display. Use the filters and click Show Result.
                        </td>
                      </tr>
                    ) : (
                      records.map((record) => (
                        <tr key={record._id} className="hover:bg-slate-50">
                          <td className="px-4 py-4 text-slate-700">{formatTimestamp(record.timestamp)}</td>
                          <td className="px-4 py-4 text-slate-700">{record.teacherId || "-"}</td>
                          <td className="px-4 py-4 text-slate-700">{record.name || "-"}</td>
                          <td className="px-4 py-4 text-slate-700">{record.status || "-"}</td>
                          <td className="px-4 py-4 text-slate-700">
                            {record.location?.latitude && record.location?.longitude
                              ? `${record.location.latitude.toFixed(5)}, ${record.location.longitude.toFixed(5)}`
                              : "-"}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}