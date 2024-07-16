import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="flex w-full min-h-screen relative bg-[#0F0F0F] text-gray-200">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
