import React, { useState } from "react";
import "./Diganose.css";
var axios = require("axios").default;

function Diagnose({ sessionId }) {
  const [result, setResult] = useState();

  const getresult = () => {
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
        console.log(response.data.Diseases);
        // setResult(response.data.Diseases);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <button className="analyse" onClick={() => getresult()}>
        Analyse
      </button>

      <div className="diagnose-container">{result}</div>
    </div>
  );
}

export default Diagnose;
