import React from "react";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Bookmarks from "./../pages/Bookmarks";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar></Navbar>
      </div>

      {/* <Home></Home>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks> */}

      {/* blank dynamic packet */}
      {/* <Outlet></Outlet> */}
      {/* <div className="min-h-screen"> */}
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
