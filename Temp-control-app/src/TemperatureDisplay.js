import { useState } from "react";
import "./TemperatureDisplay.css";

const TemperatureDisplay = () => {
  const [temp, setTemp] = useState(15);
  

  const ChangeTempPlus = () => {
    setTemp(temp + 1);
  };

  const ChangeTempMinus = () => {
    setTemp(temp - 1);
  };
  console.log(temp);
  return (
    <div id="card">
      <div id="temp" className={temp<=15?"cold":"warm"}>
        {temp}°C
      </div>
      <div id="buttons">
        <button onClick={ChangeTempPlus}>+</button>
        <button onClick={ChangeTempMinus}>-</button>
      </div>
    </div>
  );
};

export default TemperatureDisplay;
