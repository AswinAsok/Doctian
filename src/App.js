import "./App.css";
import { useState } from "react";
import Hero from "./Components/Hero/Hero Section/Hero";
import Terms from "./Components/Terms/Terms";
import Symptoms from "./Components/AddSymptoms/Symptoms";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      <Hero start={start} setStart={setStart} />
      <Terms start={start} setStart={setStart} />
      <Symptoms/>
    </div>
  );
}

export default App;
