import React from "react";
import "../../css/hero.css";

export default function WhatWeDo() {
  return (
    <div className="flex flex-col gap-6 sm:ml-24 ml-0 2xl:w-[80rem] xl:w-[72.5rem] lg:w-[50rem] md:w-[41rem] sm:w-[28rem] w-full sm:pr-0 pr-8">
      <h1 className="mt-12 lg:text-6xl md:text-5xl text-4xl font-extrabold md:leading-normal leading-tight sm:ml-0 ml-24 sm:w-full w-[17rem]">What we do?</h1>
      <p className="ml-10 text-xl font-medium text-[#616161] sm:w-full w-[17rem]">
        We provide facilities like data security, immutability, transparency, and interoperability. We use technologies like React JS, Next JS and Solidity to keep your data safe and secure.
      </p>
      <div className="ml-10 relative md:h-[33.5rem] rounded-2xl border-[1px] border-solid border-black bg-white drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
        <div className="flex xl:flex-row xl:gap-0 flex-col gap-8">
          <div className="xl:w-[43rem] sm:w-full flex flex-col gap-8">
            <div>
              <div className="flex absolute top-4 left-4">
                <img src="/Home/mingcuteRight.svg" alt="" />
                <img src="/Home/mingcuteLeft.svg" alt="" />
              </div>
              <div className="shadow-lg flex flex-col items-center gap-7 p-[4.6rem]">
                <h1 className="sm:text-5xl text-4xl text-center font-extrabold">
                  Welcome, User
                </h1>
                <div className="flex items-start gap-8">
                  <div className="flex px-4 py-2 justify-center items-center rounded-2xl border-[1px] border-solid border-black bg-black">
                    <a
                      href="#"
                      className="text-white text-sm font-semibold text-center"
                    >
                      Add Details
                    </a>
                  </div>
                  <div className="flex px-4 py-2 justify-center items-center rounded-2xl border-[1px] border-solid border-black">
                    <a href="#" className="text-sm font-semibold text-center">
                      Transfer
                    </a>
                  </div>
                </div>
                <div className="flex gap-2 absolute md:top-60 top-72">
                  {Array.from({ length: 5 }, (_, index) => {
                    return <img key={index} src="/Home/Ellipse3.svg" alt="" />;
                  })}
                </div>
              </div>
            </div>
            <div className="pl-10">
              <h1 className="text-3xl font-semibold pb-[0.9rem]">
                View Tabular Data
              </h1>
              <div className="flex gap-4 overflow-hidden">
                <img src="/Home/Square1.svg" alt="" />
                <img src="/Home/Square2.svg" alt="" />
                <img className="" src="/Home/Square3.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:items-start items-center gap-8 border-l-[1px] xl:border-l-black border-l-none xl:shadow-none shadow-lg h-[33.4rem] bg-white rounded-tr-2xl rounded-br-2xl xl:rounded-tl-none xl:w-[34.4rem] lg:w-[47.5rem] md:w-[38.9rem] rounded-tl-2xl xl:rounded-bl-none rounded-bl-2xl">
            <div className="flex items-center w-full md:gap-36 gap-18 justify-between px-4 py-4 bg-[#3A3A3A] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:rounded-tr-2xl rounded-tr-none xl:rounded-tl-none md:rounded-tl-2xl rounded-tl-none">
              <img src="/Home/akar-icon.svg" alt="" />
              <h2 className="text-white text-xl font-light"><b>Medichain</b></h2>
              <img src="/Home/bell-icon.svg" alt="" />
            </div>
            <div className="myShadow flex self-center justify-center w-[9rem] items-center rounded-[2.5rem]">
              <a href="#">
                <img className="mt-2 mr-3" src="/Home/upload-icon.svg" alt="" />
              </a>
              <a href="#">
                <p className="text-center text-xl font-normal">Add</p>
              </a>
            </div>
            <div className="mx-8">
              <p className="text-xl font-normal mb-4">Your Details</p>
              <div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-4">
                <img src="/Home/Square4.svg" alt="" />
                <img src="/Home/Square5.svg" alt="" />
                <img src="/Home/Square6.svg" alt="" />
                <img src="/Home/Square7.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
