import React from "react";
import "./SymDisplay.css";

function SymDisplay({ diagfeatures, setDiagfeatures, sessionId, agree }) {
  if (agree && sessionId) {
    return (
      <div>
        <div className="symdisplay-container">
          <div className="table-container">
            <div className="top-bar">
              <p className="heading-text">Sl.No</p>
              <p className="heading-text">Symptoms</p>
              <p className="heading-text">Values</p>
            </div>

            {diagfeatures.map((diagfeature, index) => (
              <div className="value-bar">
                <p className="values-text">{index + 1}</p>
                <p className="values-text">{diagfeature.symptom}</p>
                <p className="values-text">{diagfeature.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }else{
    return(
      <div></div>
    )
  }
}

export default SymDisplay;
