import React from "react";
import "../../css/creators.css";

export default function Creators() {
  return (
    <div class="row py-0 text-center">
      <div class="row justify-content-center">
        <div class="col-sm-8">
          <div
            class="crea1 section_heading text-center wow fadeInUp next"
            data-wow-delay="0.2s"
          >
            {/* <h1 className="text-3xl">Behind the Code, Presenting to you the creators of Medichain</h1> */}
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center flex sm:flex-row flex-col items-center gap-10 justify-center py-6">
        <div class="crea2 col-sm-2">
          <div
            class="crea3 single_advisor_profile wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div class="crea4 advisor_thumb alston">
              <div class="social-info">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="single_advisor_details_info">
              <h6>Alston Soares</h6>
              <p class="designation">Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div class="crea2 col-sm-2">
          <div
            class="crea1 single_advisor_profile wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="crea4 advisor_thumb alvin">
              <div class="social-info">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="single_advisor_details_info">
              <h6>Vikrant Singh</h6>
              <p class="designation">Backend Developer</p>
            </div>
          </div>
        </div>
        {/* <div class="crea2 col-sm-2">
          <div
            class="crea5 single_advisor_profile wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="crea4 advisor_thumb joy">
              <div class="social-info">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div class="single_advisor_details_info">
              <h6>Name</h6>
              <p class="designation">Frontend Developer</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
