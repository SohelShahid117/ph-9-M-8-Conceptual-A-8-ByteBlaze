// import React from "react";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import wave from "../assets/wave.svg";
// import sky from "../assets/sky.svg";
const Home = () => {
  return (
    <div>
      {/* <div className="h-16">
        <Navbar></Navbar>
      </div> */}
      <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)]">
        <Hero></Hero>
        <img className="absolute bottom-0 w-full" src={wave}></img>
        {/* animated svg background --- https://loading.io/background */}
        {/* <img className="absolute bottom-0 w-full" src={sky}></img> */}
      </div>
      {/* <h2>This is home page</h2> */}
    </div>
  );
};

export default Home;
