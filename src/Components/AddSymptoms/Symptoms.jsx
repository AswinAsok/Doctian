import { useState, React, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./Symptoms.css";
import axios from "axios";

function Symptoms({ diagfeatures, setDiagfeatures }) {
  const [features, setFeatures] = useState([]); //Symptoms recieved from the server

  const [choice, setChoice] = useState(); //Selected Symptom
  const [cvalue, setCvalue] = useState(); //Entered Value

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
        setFeatures(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <div>
      <hr className="line" />
      <div className="symptoms-container">
        <div className="symleft-side">
          <div className="header">Symptoms</div>
          <div className="sub-header">
            From the selections given alongside you can select the symptoms you
            are having so that we can diagnose you.{" "}
            <b>
              According to the symptom you have selected enter either a value or
              Yes or No.
            </b>
          </div>
        </div>
        <div className="symright-side">
          <div className="choose">
            <Autocomplete
              className="features-select"
              options={features}
              getOptionLabel={(option) => option}
              onChange={(event, selectedValue) => setChoice(selectedValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label="Symptoms"
                  variant="outlined"
                />
              )}
            />
          </div>
          <div className="valuesel">
            <form className="value-selection" noValidate autoComplete="off">
              <TextField
                required
                onChange={(event) => setCvalue(event.target.value)}
                className="standard-basic"
                label="Standard"
              />
            </form>
          </div>
          <div className="button">
            <button
              type="submit"
              onClick={() => {
                setDiagfeatures((diagfeatures) => [
                  ...diagfeatures,
                  { symptom: choice, value: cvalue },
                ]);
                setChoice("");
                setCvalue("");
              }}
              className="updatebtn"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Symptoms;
