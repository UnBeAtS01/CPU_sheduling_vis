import React, { useState } from "react";
import "./AddProcess.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
function Addprocess({ setProcessTable, processTable }) {
  const [process, setProcess] = useState();
  const [arrival, setarrival] = useState();
  const [burst, setburst] = useState();
  const [priority, setpriority] = useState();
  const handleSubmit = () => {
    console.log(process, arrival, burst, priority);
    if (!process || !arrival || !burst) {
      alert("enter valid input");
      return;
    } else {
      let valpriority;
      if (!priority) valpriority = 0;
      else valpriority = priority;
      let newTable = [...processTable, [process, arrival, burst, valpriority]];
      setProcess();
      setarrival();
      setburst();
      setpriority();
      setProcessTable(newTable);
      return;
    }
  };
  return (
    <div className="input_process">
      <input
        className="input_box"
        type="text"
        placeholder="process name"
        value={process}
        onChange={(e) => setProcess(e.target.value)}
      ></input>
      <input
        className="input_box"
        type="number"
        placeholder="Arrival"
        value={arrival}
        onChange={(e) => setarrival(e.target.value)}
      ></input>
      <input
        className="input_box"
        type="number"
        placeholder="Burst Time"
        value={burst}
        onChange={(e) => setburst(e.target.value)}
      ></input>
      <input
        className="input_box"
        type="number"
        placeholder="Priority"
        value={priority}
        onChange={(e) => setpriority(e.target.value)}
      ></input>
      <div className="input_submit" onClick={handleSubmit}>
        <AddRoundedIcon />
        <button className="button_submit">ADD</button>
      </div>
    </div>
  );
}

export default Addprocess;
