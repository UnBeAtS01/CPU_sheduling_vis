import React from "react";
import ProccessTable from "./Table.js";
import "./Sheduler.css";
import * as Algo from "./Algo.js";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
function Sheduler({ setArray }) {
  const runSheduler = (string) => {
    let val = [];
    if (string === "fcfs") {
      val = Algo.FCFS();
    } else if (string === "sjf") {
      val = Algo.SJF();
    } else if (string === "ljf") {
      val = Algo.LJF();
    } else if (string === "lrtf") {
      val = Algo.LRTF();
    } else if (string === "srtf") {
      val = Algo.SRTF();
    } else if (string === "priority_based") {
      val = Algo.Priority_based();
    } else if (string === "round-robin") {
      val = Algo.Round_robin();
    }
    setArray(val);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="non_premtive">
          <div style={{ color: "#828BA2", FontSize: 25 }}>Non-Preemptive</div>
          <button
            className="button_sheduler"
            onClick={() => runSheduler("fcfs")}
          >
            <AddRoundedIcon /> FCFS
          </button>
          <button
            className="button_sheduler"
            onClick={() => runSheduler("sjf")}
          >
            <AddRoundedIcon /> SJF
          </button>
          <button
            className="button_sheduler"
            onClick={() => runSheduler("ljf")}
          >
            <AddRoundedIcon />
            LJF
          </button>
        </div>
        <div className="non_premtive">
          <div style={{ color: "#828BA2", FontSize: 25 }}>Pre-emptive</div>
          <button
            className="button_sheduler"
            onClick={() => runSheduler("srtf")}
          >
            <AddRoundedIcon /> SRTF
          </button>
          <button
            className="button_sheduler"
            onClick={() => runSheduler("lrtf")}
          >
            <AddRoundedIcon /> LRTF
          </button>
          <button
            className="button_sheduler"
            onClick={() => runSheduler("round-robin")}
          >
            <AddRoundedIcon />
            ROUND-ROBIN
          </button>
          <button
            className="button_sheduler"
            onClick={() => runSheduler("priority_based")}
          >
            <AddRoundedIcon />
            PRIORITY BASED
          </button>
        </div>
      </div>

      <ProccessTable />
    </div>
  );
}

export default Sheduler;
