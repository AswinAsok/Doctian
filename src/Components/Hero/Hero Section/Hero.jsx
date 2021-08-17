import React from "react";
import "./Hero.css";
import axios from "axios";

function Hero({ start, setStart, setSessionId }) {
  const options = {
    method: "GET",
    url: "https://endlessmedicalapi1.p.rapidapi.com/InitSession",
    headers: {
      "x-rapidapi-key": "79b12daedbmshefa74dba1d17b54p1e2497jsn262f1d43d61b",
      "x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
    },
  };

  const getSessionId = () => {
    axios
      .request(options)
      .then(function (response) {
        return response.data.sessionID;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero-container">
        <div className="left-side">
          Doctian
          <button
            onClick={() => {
              setSessionId(getSessionId());
              setStart(!start);
            }}
            className="start-button"
          >
            Get Started
          </button>
        </div>
        <div className="right-side">
          We at Doction will provide you <b>Endless Medical Support 24x7</b>.
        </div>
      </div>
    </div>
  );
}

export default Hero;
