import { useState, React, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Fade } from "react-awesome-reveal";
import "./Symptoms.css";
import axios from "axios";

function Symptoms({ diagfeatures, setDiagfeatures, sessionId, agree }) {
  const [features, setFeatures] = useState([]); // List of Symptoms recieved from the server

  const [choice, setChoice] = useState(); // Selected Symptom
  const [cvalue, setCvalue] = useState(); // Entered Value

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://endlessmedicalapi1.p.rapidapi.com/GetFeatures",
      headers: {
        "x-rapidapi-key": "79b12daedbmshefa74dba1d17b54p1e2497jsn262f1d43d61b",
        "x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setFeatures(response.data.data); // Recieveing the list of symptoms from the server.
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // Update Features

  const updatefeature = (value, name) => {
    // Function to update the server with each selected symptom for the user.
    var options = {
      method: "POST",
      url: "https://endlessmedicalapi1.p.rapidapi.com/UpdateFeature",
      params: {
        SessionID: sessionId,
        value: value,
        name: name,
      },
      headers: {
        "x-rapidapi-key": "79b12daedbmshefa74dba1d17b54p1e2497jsn262f1d43d61b",
        "x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (agree && sessionId) {
    // Checking whether the user has agreed to the terms and whether sessionId is there or not.
    return (
      <Fade>
        <div>
          <hr className="line" />
          <div className="symptoms-container">
            <div className="symleft-side">
              <div className="header">Symptoms</div>
              <div className="sub-header">
                From the selections given alongside you can select the symptoms
                you are having so that we can diagnose you.{" "}
                <b>
                  According to the symptom you have selected enter either a
                  value or Yes or No.
                </b>
              </div>
            </div>
            <div className="symright-side">
              <Autocomplete
                className="features-select" // Setting the list of Symptoms recieved form the server to the options.
                options={features}
                value={choice}
                getOptionLabel={(option) => option}
                onChange={(event, selectedValue) => setChoice(selectedValue)} // Storing the input value to a state variable.
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    label="Symptoms"
                    variant="outlined"
                  />
                )}
              />

              <div className="valuesel">
                <form className="value-selection" noValidate autoComplete="off">
                  <TextField // Input for the user to Type in the values for the selected Symptom.
                    required
                    value={cvalue}
                    onChange={(event) => setCvalue(event.target.value)} // Storing the input value to a state variable.
                    className="standard-basic"
                    label="Value"
                  />
                </form>
              </div>
              <div className="button">
                <button
                  type="submit" // Button to validate the fields and store the value to a single array.
                  onClick={() => {
                    setDiagfeatures((diagfeatures) => [
                      ...diagfeatures,
                      { symptom: choice, value: cvalue },
                    ]);
                    updatefeature(cvalue, choice);
                    setChoice(""); // Clearing the Fields
                    setCvalue(""); // Clearing the Fields
                  }}
                  className="updatebtn"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  } else {
    return <div></div>;
  }
}

export default Symptoms;
