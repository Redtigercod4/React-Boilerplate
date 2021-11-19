import React from "react";

//React Components
import Timer from "./Timer.js";
import SnowFall from "./SnowFall.js";
import SnowFloor from "../Assets/SnowFloor.png";
import "../Styles/Countdown.css";
import Santa from "../Assets/SantaIcon.svg";

function Countdown() {
  return (
    <body>
      <div className="Countdown-SnowFloor">
        <img src={SnowFloor} alt="" width="100%" height="10%" />
      </div>
      <div className="santaicon">
        <img src={Santa} alt="" width="300px"/>
      </div>
      <SnowFall />
      <Timer />
    </body>
  );
}
export default Countdown;
