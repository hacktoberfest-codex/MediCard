import React, { useEffect, useState } from "react";

import { MdOutlineHealthAndSafety } from 'react-icons/md'

import Doctor from "../Assets/doctor-picture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import "../Styles/Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Paper less medical features</p>
          <h2 className="text-title">
            Lorem ipsum dolormet Lorem ipsum dolormet.
          </h2>
          <p className="text-descritpion">
            Unlocking Effortless Healthcare: QR-Driven Records, Efficient Appointments, and Expert Advice
          </p>
          <button
            className="text-appointment-btn"
            type="button"
          >
            <MdOutlineHealthAndSafety icon={faCalendarCheck} /> Open Your Health Account
          </button>
          <div className="text-stats">

            {/* <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div> */}

            <div className="text-stats-container">
              <p>400+</p>
              <p>Doctors Near You</p>
            </div>

            <div className="text-stats-container">
              <p>20+</p>
              <p>Specialist Doctors</p>
            </div>

          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
