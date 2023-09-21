import React from "react";
import Hero from "../components/Home/Hero";
import WhatWeDo from "../components/Home/WhatWeDo";
import ManageProducts from "../components/Home/ManageProducts";
import StartYourJourney from "../components/Home/StartYourJourney";
import HeroSection from "../components/Home/HeroSection";
import Carousel from "../components/Home/Carousel";
import Slider from "../components/Home/Slider";
import OurServices from "../components/Home/OurServices";
import carouselPic1 from "../assets/Home/carouselPic1.png";
import carouselPic2 from "../assets/Home/carouselPic2.png";
import "../css/contact.css";

export default function Home() {
  const slides = [
    { image: carouselPic2 },
    { image: "/Home/pic2.png" },
    { image: "/Home/pic3.png" },
    { image: "/Home/pic5.png" },
    { image: carouselPic1 },
    { image: "/Home/pic6.png" },
  ];
  const containerStyles = {
    // width: '500px',
    // height: '280px',
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "100px",
  };
  return (
    <div>
      <HeroSection />
      <div
        className="w-[350px] h-[190px] xs:w-[450px] xs:h-[250px] sm:w-[500px] sm:h-[280px] md:h-[620px] md:w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:[1300px] mt-5"
        style={containerStyles}
      >
        <Carousel slides={slides} />
      </div>

      <div className="pt-10">
        <Hero />
        <WhatWeDo />
        <div className="">
          <ManageProducts />
        </div>
      </div>
      <section id="contact" className="mb-16 contact flex justify-center">
        <div className="container">
          <header className="section-header pb-[40px]">
            <h2>Features</h2>
            <p>Our Features</p>
          </header>
          <Slider />
        </div>
      </section>
      <OurServices />
      <div className="mt-10">
        <StartYourJourney />
      </div>
    </div>
  );
}
