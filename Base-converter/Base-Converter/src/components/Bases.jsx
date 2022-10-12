import React from "react";

function Bases({ label, from, to }) {

  return (
    <div>
      <label htmlFor="sel1">{label}</label>
      <select name="sel1" id="sel1" className="bases" ref={to == undefined ? from : to} defaultValue={"10"}>
        <option value="2">2 (binary)</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option value="8">8 (octal)</option>
        <option>9</option>
        <option value="10">
          10 (decimal)
        </option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option value="16">16 (hex)</option>
      </select>
    </div>
  );
}

export default Bases
