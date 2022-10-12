import React from "react";
import Bases from "./Bases"


function Inputs({ num, from, to }) {
    
  return (
    <div className="inputs-goupe">
      <label htmlFor="number">Input Number</label>
      <input type="text" name="number" id="number" ref={num} />
      <Bases label="From Base" from={from} />
      <Bases label="To Base" to={to} />
    </div>
  );
}

export default Inputs;
