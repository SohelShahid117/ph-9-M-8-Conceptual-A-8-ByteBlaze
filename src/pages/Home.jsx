import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      {/* <div className="h-16">
        <Navbar></Navbar>
      </div> */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-116px)]">
        <Hero></Hero>
      </div>
      {/* <h2>This is home page</h2> */}
    </div>
  );
};

export default Home;
