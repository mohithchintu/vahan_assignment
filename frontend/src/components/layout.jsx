import React from "react";
import SideBar from "./SideBar";
import Search from "./search";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="w-48 fixed md:block">
        <SideBar />
      </div>
      <div className="ml-48">
        <Search />
        <div className="p-5 bg-[#FCFAFC] h-screen">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
