import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import Sheduler from "./components/Sheduler";
import * as Algo from "./components/Algo.js";
import { useState } from "react";
function App() {
  const [process, setProcess] = useState("IDEAL");
  const [Time, setTime] = useState("0");
  const [preemptive, setPre] = useState(false);
  const [nonPreemptive, setNpre] = useState(false);
  const [array, setArray] = useState([]);

  return (
    <div className="App">
      <Display array={array} />
      <Sheduler setArray={setArray} />
    </div>
  );
}

export default App;
