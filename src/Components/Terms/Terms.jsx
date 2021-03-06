import React from "react";
import "./Terms.css";
import axios from "axios";
import { Fade } from "react-awesome-reveal";

function Terms({ start, setStart, sessionId, setAgree }) {
  const options = {
    // Options for the axios request.
    method: "POST",
    url: "https://endlessmedicalapi1.p.rapidapi.com/AcceptTermsOfUse",
    params: {
      passphrase:
        "I have read, understood and I accept and agree to comply with the Terms of Use of EndlessMedicalAPI and Endless Medical services. The Terms of Use are available on endlessmedical.com",
      SessionID: sessionId,
    },
    headers: {
      "x-rapidapi-key": "79b12daedbmshefa74dba1d17b54p1e2497jsn262f1d43d61b",
      "x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
    },
  };

  const getTerms = () => {
    // Function to verify the terms and conditions.
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setAgree(true); // Changing the state variable.
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (sessionId && start) {
    // Checking whether the user has clicked the "Get Started" Button and sessionId is recieved or not.
    return (
      <Fade>
        <div className="terms-container">
          <hr className="terms-line" />
          <div className="terms">
            "I have read, understood and I accept and agree to comply with the
            Terms of Use of EndlessMedicalAPI and Endless Medical services. The
            Terms of Use are available on endlessmedical.com"
          </div>
          <button
            onClick={() => {
              getTerms(); // Calling the function to check terms on "Agree" button click.
              setStart(false); // Changing the state variable so that the terms section gets hidden.
            }}
            className="agree-button"
          >
            Agree
          </button>
        </div>
      </Fade>
    );
  } else {
    return <div></div>;
  }
}

export default Terms;
