import { useState, React, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./Symptoms.css";
import axios from "axios";

function Symptoms() {
  const [features, setFeatures] = useState([]);

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
        <div className="header">Add Symptoms</div>
        <Autocomplete
          id="combo-box-demo"
          options={features}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Combo box" variant="outlined" />
          )}
        />
      </div>
    </div>
  );
}

export default Symptoms;
