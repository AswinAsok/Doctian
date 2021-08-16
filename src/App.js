import "./App.css";
import { useState } from "react";
import Hero from "./Components/Hero/Hero Section/Hero";
import Terms from "./Components/Terms/Terms";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="App">
      <Hero start={start} setStart={setStart} />
      <Terms start={start} setStart={setStart} />
    </div>
  );
}

export default App;
