import React from "react";
import "./SymDisplay.css";
import { Fade } from "react-awesome-reveal";

function SymDisplay({ diagfeatures, setDiagfeatures, sessionId, agree }) {
  /* Checking whether the user has agreed to the terms, 
    whether there is sessionId and 
    the user has added atleast one symptom to be displayed */

  if (agree && sessionId && diagfeatures.length > 0) {
    return (
      <Fade>
        <div>
          <div className="symdisplay-container">
            <div className="table-container">
              <div className="top-bar">
                <p className="heading-text">Sl.No</p>
                <p className="heading-text">Symptoms</p>
                <p className="heading-text">Values</p>
              </div>

              {diagfeatures.map(
                (
                  diagfeature,
                  index // Iterating through the array in which the symptoms and values is stored and displaying them.
                ) => (
                  <div className="value-bar">
                    <p className="values-text">{index + 1}</p>
                    <p className="values-text">{diagfeature.symptom}</p>
                    <p className="values-text">{diagfeature.value}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Fade>
    );
  } else {
    return <div></div>;
  }
}

export default SymDisplay;
