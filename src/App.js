import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import Sheduler from "./components/Sheduler";
import * as Algo from "./components/Algo.js";
import { useState } from "react";
import Addprocess from "./components/AddProcess";
function App() {
  const [array, setArray] = useState([]);
  const [processTable, setProcessTable] = useState([
    ["P1", 0, 2, 2],
    ["P2", 1, 3, 1],
    ["P3", 0, 1, 2],
    ["P4", 5, 1, 0],
    ["P5", 2, 4, 0],
    ["P6", 5, 2, 6],
    ["P7", 19, 5, 6],
  ]);
  return (
    <div className="App">
      <Display array={array} />
      <Sheduler setArray={setArray} processTable={processTable} />
      <Addprocess
        setProcessTable={setProcessTable}
        processTable={processTable}
      />
    </div>
  );
}

export default App;
