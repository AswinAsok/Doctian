import React from "react";
import "./Hero.css";
import { Fade } from "react-awesome-reveal";

function Hero({ start, setStart }) {
  return (
    <div>
      <Fade>
      <div className="hero-container">
        <div className="left-side">
          Doctian
          <button
            onClick={() => {  // Starting the session on "Get Started" Button Click.
              setStart(!start); //  Changing the State variable.
            }}
            className="start-button"
          >
            Get Started
          </button>
        </div>
        <div className="right-side">
          We at Doctian will provide you <b>Endless Medical Support 24x7</b> and
          will <b>Diganose you in one Scroll.</b>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Hero;
