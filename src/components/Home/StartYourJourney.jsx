import React from "react";
import "../../css/hero.css";

export default function StartYourJourney() {
  return (
    <div>
      <div className="flex flex-col gap-10 xl:items-center lg:items-start items-center xl:ml-0 lg:ml-24 ml-0 xl:mr-14 mr-0">
        <h1 className="text-center lg:text-6xl md:text-5xl text-4xl font-extrabold md:leading-normal leading-tight sm:w-auto w-[21rem]">
          Start Your <span className="gradText2">Journey</span> With Us
        </h1>
        <div className="xl:ml-0 lg:ml-10 ml-0 flex items-center justify-center gap-5 mb-28">
          <div className="flex justify-center items-center gap-5">
            <a href="/login">
              <button className="flex justify-center items-center px-6 py-2 rounded-lg bg-white buttonBoxShadow">
                Log in
              </button>
            </a>
          </div>
          <p className="text-xl text-[#959595] font-medium">or</p>
          <div className="flex justify-center items-center gap-5">
            <a href="/register">
              <button className="flex justify-center items-center px-6 py-2 rounded-lg text-white bg-black">
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <img className="absolute -top-20 lg:left-[27rem] md:left-[22rem] sm:left-[15rem] left-[12rem]" src="/Home/plane.svg" alt="" />
        <div className="flex items-baseline overflow-hidden">
          <img src="/Home/building1.svg" alt="" />
          <img src="/Home/building2.svg" alt="" />
          <img src="/Home/building3.svg" alt="" />
          <img src="/Home/building4.svg" alt="" />
          <img src="/Home/building5.svg" alt="" />
          <img src="/Home/building6.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
