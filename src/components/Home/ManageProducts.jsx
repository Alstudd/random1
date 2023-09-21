import React from "react";
import "../../css/hero.css";

export default function ManageProducts() {
  return (
    <div className="relative mb-16 sm:pr-0 pr-8">
      <img className="absolute top-14 left-[1.9rem]" src="/Home/Ellipse4.svg" alt="" />
      <div className="flex flex-col gap-6 sm:ml-24 ml-0 2xl:w-[80rem] xl:w-[72.5rem] lg:w-[50rem] md:w-[41rem] sm:w-[28rem] w-full sm:pr-0 pr-8">
        <h1 className="pt-16 lg:text-6xl md:text-5xl text-4xl font-extrabold md:leading-normal leading-tight sm:ml-0 ml-24 sm:w-full w-[17rem]">
          Online <span className="gradText1">Consultation</span>
        </h1>
        <p className="ml-10 text-xl font-medium text-[#616161] sm:w-full w-[20rem]">WeWomen offers live online consultations with doctors, ensuring women can seek medical guidance conveniently.</p>
        <img className="ml-8 rounded-2xl md:w-[48rem] sm:w-[28rem] w-full" src="/Home/pic4.jpg" alt="" />
      </div>
    </div>
  );
}
