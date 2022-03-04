import React, { useEffect, useState } from "react";
import "./CPU.css";
function CPU({ array }) {
  const [process, setproccess] = useState("IDEAL");
  const [TIME, setTime] = useState(0);

  useEffect(() => {
    let k = 0;
    for (let j = 0; j <= array.length; j++) {
      let newk = JSON.parse(JSON.stringify(k));
      if (j == array.length) {
        setTimeout(() => {
          setproccess("IDEAL");
          setTime(0);
        }, 3000 * (k + 1));
        continue;
      }

      if (array[j][1] > k) {
        setTimeout(() => {
          setproccess("IDEAL");
          setTime(newk);
        }, 3000 * (k + 1));
        j--;
      } else {
        setTimeout(() => {
          setproccess(array[j][0]);
          setTime(newk);
        }, 3000 * (k + 1));
      }

      k++;
    }
    setTime(() => {
      setproccess("IDEAL");
      setTime("0");
    }, 3000 * (k + 1));
  }, [array]);

  return (
    <div className="box">
      <div className="process_box">
        <div style={{ fontSize: 20, color: "grey" }}>CPU</div>
        {process}
      </div>
      <div className="time_box">
        <div style={{ fontSize: 20, color: "grey" }}>TIME</div>
        {TIME}
      </div>
    </div>
  );
}

export default CPU;
