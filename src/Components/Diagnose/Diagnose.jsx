import React, { useState } from "react";
import "./Diganose.css";
var axios = require("axios").default;

function Diagnose({ sessionId, agree, diagfeatures }) {
  const [result, setResult] = useState(); // State variable to store the diagnosis result from the server.

  const getresult = () => {
    // Function to get the analysis result form the server.
    var options = {
      method: "GET",
      url: "https://endlessmedicalapi1.p.rapidapi.com/Analyze",
      params: { SessionID: sessionId },
      headers: {
        "x-rapidapi-key": "79b12daedbmshefa74dba1d17b54p1e2497jsn262f1d43d61b",
        "x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setResult(response.data.Diseases); // Storing the diagnosis analysis
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (result) {
    // Checking whether the diagnosis analysis is present or not.
    return (
      <div>
        <button className="analyse" onClick={() => getresult()}>
          Analyse
        </button>

        <div className="diagnose-display">
          <div className="lside">
            <div className="heading">Diagnose Results</div>
            <div className="sub-heading">
              These results are{" "}
              <b>based on the data which you have entered previously</b> and the
              Diagnose which are displayed are{" "}
              <b>completely machine generated</b>. If you are having any{" "}
              <b>severe health issuses</b> we recommed you to{" "}
              <b>directly consult a doctor.</b>
              <br></br>
              <br></br>
              Made By <b>Aswin Asok</b>, for <b>TECHSIAS Hacktoons.</b>
              <br></br>
              <a href="https://github.com/AswinAsok/Doctian">Give a 🌟 on GitHub</a>
            </div>
          </div>
          <div className="rside">
            <div className="results-container">
              {result.map((disease, index) => (
                <div className="Disease Bar">
                  <p className="disease">
                    • &nbsp; {Object.keys(disease)[0]} (
                    {Math.round(Object.values(disease)[0] * 100)}%)
                  </p>
                  <p className="percentage"></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (sessionId && agree && diagfeatures.length > 0) {
    // If the diagnosis result is not present showing the analyse button only if the user has added atleast one symptom.
    return (
      <div>
        <button className="analyse" onClick={() => getresult()}>
          Analyse
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Diagnose;
