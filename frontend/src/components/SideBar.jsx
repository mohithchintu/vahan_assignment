import React from "react";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { BsPlayBtn } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="border shadow-md space-y-2 h-screen bg-[#F5F5F5] py-5 px-3">
      <h1 className="text-black">Logo</h1>
      <Link
        to="/"
        className={`flex items-center gap-2 text-md p-4 hover:bg-[#FCFCFC] rounded-lg
                    ${pathname === "/" ? "bg-[#FCFCFC] shadow-md" : ""}`}
      >
        <GoHome size={24} />
        <h2 className="text-sm font-semibold">Home</h2>
      </Link>
      <Link
        to="/dashboard"
        className={`flex items-center gap-2 text-md p-4 hover:bg-[#FCFCFC] rounded-lg
                    ${
                      pathname === "/dashboard" ? "bg-[#FCFCFC] shadow-md" : ""
                    }`}
      >
        <RxDashboard size={24} />
        <h2 className="text-sm font-semibold">Dashboard</h2>
      </Link>
      <Link
        to="/video"
        className={`flex items-center gap-2 text-md p-4 hover:bg-[#FCFCFC] rounded-lg
                    ${pathname === "/video" ? "bg-[#FCFCFC] shadow-md" : ""}`}
      >
        <BsPlayBtn size={24} />
        <h2 className="text-sm font-semibold">Demo Video</h2>
      </Link>
    </div>
  );
};

export default SideBar;
