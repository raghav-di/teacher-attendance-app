"use client";

import { useState, useEffect } from "react";
import Link from "next/link";


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "/api/attendance";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teacherName, setTeacherName] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [statusMsg, setStatusMsg] = useState("Please set your profile first");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");
    if (name && id) {
      setTeacherName(name);
      setTeacherId(id);
      setStatusMsg(`Welcome ${name}! Ready to check in.`);
    }
  }, []);

  const toggleModal = () => setIsModalOpen((open) => !open);

  const saveProfile = () => {
    if (!teacherName || !teacherId) {
      setStatusMsg("Enter both name and teacher ID.");
      return;
    }

    localStorage.setItem("name", teacherName);
    localStorage.setItem("id", teacherId);
    setStatusMsg(`Welcome ${teacherName}! Ready to check in.`);
    setIsModalOpen(false);
  };

  const markAttendance = () => {
    if (!teacherName || !teacherId) {
      setStatusMsg("Please save your profile before checking in.");
      setIsModalOpen(true);
      return;
    }

    if (isProcessing) return;

    setIsProcessing(true);
    setStatusMsg("Locating...");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const payload = {
          teacherId,
          name: teacherName,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };

        try {
          const response = await fetch(BACKEND_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          const resData = await response.json();

          if (response.ok) {
            setStatusMsg(`✅ ${resData.message}`);
          } else {
            setStatusMsg(`❌ ${resData.message} (${resData.distance}m away)`);
          }
        } catch (err) {
          setStatusMsg("❌ Network error. Is backend live?");
        } finally {
          setIsProcessing(false);
        }
      },
      (err) => {
        alert("Location Error: Please enable GPS.");
        setIsProcessing(false);
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <div>
      <nav className="w-full bg-white shadow-md py-4 relative">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">Teacher Attendance</h1>
        </div>
        <div className="">
          <Link href="/admin" className="text-blue-600 hover:text-blue-800">
            Admin Panel
          </Link>
        </div>
        <div className="absolute top-2 right-6 border-2 border-gray-300 rounded-full p-1">
          <button
            onClick={toggleModal}
            className="text-blue-600 hover:text-blue-800 border-2 border-blue-600 rounded-full w-10 h-10 flex items-center justify-center"
          >
            <span>{teacherName ? teacherName.charAt(0).toUpperCase() : "~"}</span>
          </button>
        </div>
      </nav>

      <div className="text-center mt-12 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Mark Attendance</h1>
        <p className="text-gray-500 mb-8 italic">{statusMsg}</p>

        <button
          onClick={markAttendance}
          disabled={isProcessing}
          className={`ripple w-40 h-40 bg-blue-600 text-white rounded-full text-xl font-bold shadow-xl hover:bg-blue-700 focus:outline-none flex items-center justify-center mx-auto ${
            isProcessing ? "opacity-50" : ""
          }`}
        >
          <span>CHECK IN</span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Teacher Profile</h2>
            <input
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              placeholder="Full Name"
              className="w-full border-b-2 border-gray-300 p-2 mb-4 focus:border-blue-500 outline-none"
            />
            <input
              type="text"
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
              placeholder="Teacher ID (e.g. T101)"
              className="w-full border-b-2 border-gray-300 p-2 mb-6 focus:border-blue-500 outline-none"
            />

            <button
              onClick={saveProfile}
              className="w-full bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition"
            >
              SAVE DETAILS
            </button>
            <button onClick={toggleModal} className="w-full mt-4 text-gray-400 text-sm">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
