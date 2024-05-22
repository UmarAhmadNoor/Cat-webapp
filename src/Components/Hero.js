import React from "react";
import "./Style.css";

const Hero = () => {
  return (
    <>
      <div className="hero1">
        <img src="../../images/bgpic.avif" className="background-img" />
        <div className="cont">
          <div className="buttons">
            <button className="btn1">WATCH TRAILER</button>
            <button className="btn1 font-glaive" id="btn1">
              HIT & PLAY
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
