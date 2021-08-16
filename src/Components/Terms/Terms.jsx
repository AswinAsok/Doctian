import React from "react";
import "./Terms.css";

function Terms({ start, setStart }) {
  if (start) {
    return (
      <div className="terms-container">
        <hr className="terms-line" />
        <div className="terms">
          "I have read, understood and I accept and agree to comply with the
          Terms of Use of EndlessMedicalAPI and Endless Medical services. The
          Terms of Use are available on endlessmedical.com"
        </div>
        <button onClick={() => setStart(false)} className="agree-button">
          Agree
        </button>
      </div>
    );
  }
  else{
    return(
      <div></div>
    );
  }
}

export default Terms;
