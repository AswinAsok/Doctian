import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "./Components/Hero/Hero Section/Hero";
import Terms from "./Components/Terms/Terms";
import Symptoms from "./Components/AddSymptoms/Symptoms";
import SymDisplay from "./Components/SymDisplay/SymDisplay";
import Diagnose from "./Components/Diagnose/Diagnose";

function App() {
  const [start, setStart] = useState(false);
  const [diagfeatures, setDiagfeatures] = useState([]);

  const [sessionId, setSessionId] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://endlessmedicalapi1.p.rapidapi.com/InitSession",
      headers: {
        "x-rapidapi-key": "79b12daedbmshefa74dba1d17b54p1e2497jsn262f1d43d61b",
        "x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSessionId(response.data.SessionID);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <Hero start={start} setStart={setStart} />
      <Terms start={start} setStart={setStart} sessionId={sessionId} />

      <Symptoms diagfeatures={diagfeatures} setDiagfeatures={setDiagfeatures} sessionId={sessionId}/>
      <SymDisplay
        diagfeatures={diagfeatures}
        setDiagfeatures={setDiagfeatures}
      />

      <Diagnose sessionId={sessionId}/>
    </div>
  );
}

export default App;
