import React from "react";
import "../../css/hero.css";

export default function ManageProducts() {
  return (
    <div className="relative mb-16 sm:pr-0 pr-8">
      <img className="absolute top-14 left-[1.9rem]" src="/Home/Ellipse4.svg" alt="" />
      <div className="flex flex-col gap-6 sm:ml-24 ml-0 2xl:w-[80rem] xl:w-[72.5rem] lg:w-[50rem] md:w-[41rem] sm:w-[28rem] w-full sm:pr-0 pr-8">
        <h1 className="pt-16 lg:text-6xl md:text-5xl text-4xl font-extrabold md:leading-normal leading-tight sm:ml-0 ml-24 sm:w-full w-[17rem]">
          View Your <span className="gradText1">Details</span>
        </h1>
        <p className="ml-10 text-xl font-medium text-[#616161] sm:w-full w-[17rem]">Get an exemplary tabular form of your data with the help of our platform.</p>
        <img className="ml-8 rounded-lg 2xl:w-[80rem] xl:w-[70rem] lg:w-[50rem] md:w-[41rem] sm:w-[28rem] w-full" src="/Home/blockchain.jpg" alt="" />
      </div>
    </div>
  );
}
