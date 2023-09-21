import React from "react";
import Hero from "../components/Home/Hero";
import WhatWeDo from "../components/Home/WhatWeDo";
import ManageProducts from "../components/Home/ManageProducts";
import StartYourJourney from "../components/Home/StartYourJourney";
import HeroSection from "../components/Home/HeroSection";
import Carousel from "../components/Home/Carousel";
import Counts from "../components/Home/Counts";
import Slider from '../components/Home/Slider'
import OurServices from "../components/Home/OurServices";
import CompC from "../assets/Home/CompC.jpg";
import CompCGirls from "../assets/Home/CompCGirls.jpg";
import CompCBoys from "../assets/Home/CompCBoys.png";
import groupPic from "../assets/Home/groupPic.jpg";
import purvaKhushi from "../assets/Home/purvaKhushi.jpg";
import APIday from "../assets/Home/APIday.jpeg";
import MulticonPythonFirst from "../assets/Home/MulticonPythonFirst.jpeg";
import { FaSmile, FaBook, FaBookReader, FaCode } from "react-icons/fa";
import "../css/contact.css";

export default function Home() {
  const slides = [
    { image: CompC },
    { image: CompCGirls },
    { image: CompCBoys },
    { image: groupPic },
    { image: purvaKhushi },
    { image: APIday },
  ];
  const containerStyles = {
    // width: '500px',
    // height: '280px',
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "100px",
  };
  const countCards = [
    {
      image: <FaBook className="m-auto w-10 h-10 text-blue-500" />,
      number: 6,
      title: "Sem-1 10 pointers",
    },
    {
      image: <FaCode className="m-auto w-10 h-10 text-blue-500" />,
      number: 7,
      title: "Open Source Contributors",
    },
    {
      image: <FaBookReader className="m-auto w-10 h-10 text-blue-500" />,
      number: 2,
      title: "Sem-2 10 pointers",
    },
    {
      image: <FaSmile className="m-auto w-10 h-10 text-blue-500" />,
      number: 63,
      title: "COMP-C Students",
    },
  ];
  return (
    <div>
      <HeroSection />
      <div
        className="w-[350px] h-[190px] xs:w-[450px] xs:h-[250px] sm:w-[500px] sm:h-[280px] md:h-[620px] md:w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:[1300px] mt-5"
        style={containerStyles}
      >
        <Carousel slides={slides} />
      </div>

      <div className="pt-10 mb-10">
        <Hero />
        <WhatWeDo />
        <div className="xl:mt-0 md:mt-[36rem] mt-0">
          <ManageProducts />
        </div>
      </div>
      <section id="contact" className="mb-16 contact flex justify-center">
        <div className="container">
          <header className="section-header pb-[40px]">
            <h2>Opportunities</h2>
            <p>Upcoming Events</p>
          </header>
          <Slider />
        </div>
      </section>
      <OurServices />
      <div className="justify-center flex flex-wrap gap-10 pb-20 mt-10">
        {countCards.map((card, i) => {
          return (
            <Counts
              key={i}
              image={card.image}
              number={card.number}
              title={card.title}
            />
          );
        })}
      </div>
      <StartYourJourney />
    </div>
  );
}
