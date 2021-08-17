import "./App.css";
import { useState } from "react";
import Hero from "./Components/Hero/Hero Section/Hero";
import Terms from "./Components/Terms/Terms";
import Symptoms from "./Components/AddSymptoms/Symptoms";
import SymDisplay from "./Components/SymDisplay/SymDisplay";

function App() {
  const [start, setStart] = useState(false);
  const [diagfeatures, setDiagfeatures] = useState([]);

  return (
    <div className="App">
      <Hero start={start} setStart={setStart} />
      <Terms start={start} setStart={setStart} />

      <Symptoms diagfeatures={diagfeatures} setDiagfeatures={setDiagfeatures} />
      <SymDisplay
        diagfeatures={diagfeatures}
        setDiagfeatures={setDiagfeatures}
      />
    </div>
  );
}

export default App;
