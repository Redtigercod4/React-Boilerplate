import  React from "react";
import "../Styles/snowfall.css";

function SnowFall(){

    let arr = [];
    let i =0
    for (i = 0; i < 12; i++) {
        arr.push(i);
      }
    let SnowEffect = arr.map(item => <div key={item} className="snow"></div>)
    return (
        <div className="snowflakes">
        {SnowEffect}
      </div>
    );
} export default SnowFall;