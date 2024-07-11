import React from "react";
import "./Banndr.css"

function Banner() {
  return (
    <div className="banner">
      <div className="left">
        <h1>
          Let’s Grow Your <br />
          Brand To The <br />
          Next Level
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo
          ipsum duis laoreet maecenas. Feugiat
        </p>
        <button className="btn">Hire Me</button>
      </div>
      <div className="right">
        <img src={require("../../../Asists/images/logos/Frame.png")} alt="" />
      </div>
    </div>
  );
}

export default Banner;
