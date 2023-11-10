//トップレベルの予約ページコンポーネント
import AppBar from "../components/AppBar";
import Sidebar from "../components/Sidebar";
// import BookingForm from "../features/booking";
import React from "react";

export default function booking() {
  return (
    <div className="flex flex-col h-screen">
      <AppBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 p-4 overflow-auto"></div>
      </div>
    </div>
  );
}
