import "./App.css";
import { useState } from "react";
import Hero from "./Components/Hero/Hero Section/Hero";
import Terms from "./Components/Terms/Terms";
import Symptoms from "./Components/AddSymptoms/Symptoms";
import SymDisplay from "./Components/SymDisplay/SymDisplay";

function App() {

  const [start, setStart] = useState(false);


  const [symptom, setSymptom] = useState([]);
  const [value, setValue] = useState([]);

  return (
    <div className="App">
      <Hero start={start} setStart={setStart} />
      <Terms start={start} setStart={setStart} />
      <Symptoms symptom={symptom} setSymptom={setSymptom} value={value} setValue={setValue}/>
      <SymDisplay symptom={symptom} setSymptom={setSymptom} value={value} setValue={setValue}/>
    </div>
  );
}

export default App;
