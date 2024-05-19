import React from "react";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="w-48 fixed md:block">
        <SideBar />
      </div>
      <div className="ml-48">
        <div className="p-5 bg-[#FCFAFC] min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
