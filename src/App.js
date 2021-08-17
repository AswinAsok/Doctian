import "./App.css";
import { useState } from "react";
import Hero from "./Components/Hero/Hero Section/Hero";
import Terms from "./Components/Terms/Terms";
import Symptoms from "./Components/AddSymptoms/Symptoms";
import SymDisplay from "./Components/SymDisplay/SymDisplay";

function App() {
  const [start, setStart] = useState(false);
  const [diagfeatures, setDiagfeatures] = useState([]);

  const [sessionId, setSessionId] = useState();

  return (
    <div className="App">
      <Hero start={start} setStart={setStart} setSessionId={setSessionId} />
      <Terms start={start} setStart={setStart} sessionId={sessionId} />

      <Symptoms diagfeatures={diagfeatures} setDiagfeatures={setDiagfeatures} />
      <SymDisplay
        diagfeatures={diagfeatures}
        setDiagfeatures={setDiagfeatures}
      />
    </div>
  );
}

export default App;
