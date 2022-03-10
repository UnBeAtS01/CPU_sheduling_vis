import React, { useEffect, useState } from "react";
import "./CPU.css";
function CPU({ array }) {
  const [process, setproccess] = useState("IDEAL");
  const [TIME, setTime] = useState(0);
  const [newarray, setArray] = useState([]);
  const [color, setColor] = useState(-1);

  useEffect(() => {
    let currarray = [];
    let k = 0;
    for (let j = 0; j <= array.length; j++) {
      let newk = JSON.parse(JSON.stringify(k));
      if (j == array.length) {
        setTimeout(() => {
          setproccess("IDEAL");
          setColor(newk);
          setTime(0);
        }, 3000 * (k + 1));
        continue;
      }

      if (array[j][1] > k) {
        currarray.push("IDEAL");
        setTimeout(() => {
          setproccess("IDEAL");
          setTime(newk);
          setColor(newk);
        }, 3000 * (k + 1));
        j--;
      } else {
        currarray.push(array[j][0]);
        setTimeout(() => {
          setproccess(array[j][0]);
          setTime(newk);
          setColor(newk);
        }, 3000 * (k + 1));
      }

      k++;
    }
    setTime(() => {
      setproccess("IDEAL");
      setTime("0");
    }, 3000 * (k + 1));
    setArray(currarray);
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
      <div className="gant_chart">
        {newarray.length ? (
          <>
            <div style={{ color: "purple" }}>Gantt Chart</div>
            <div className="table_process">
              {newarray.length &&
                newarray.map((ele, index) => (
                  <div
                    className={`${
                      color === index ? `currprocess` : `normalprocess`
                    }`}
                  >
                    {ele}
                  </div>
                ))}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CPU;
