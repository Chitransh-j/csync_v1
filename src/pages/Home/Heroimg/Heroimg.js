import React from "react";
import IntroImg from "./people.png";
import "./HeroimgStyles.css";
import Typewriter from 'typewriter-effect';

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="img" />
        <div className="banner-text">
          <h1>
          <Typewriter 
            options={{
            strings: ['Create', 'Collaborate.','Celebrate !'],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,}}/>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
