import React from "react";
import CPU from "./CPU";

function Display({ array }) {
  return (
    <div>
      <CPU array={array} />
    </div>
  );
}

export default Display;
