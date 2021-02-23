import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <vide src="./videos/video-2.mp4" autoPlay loop muted />
      <h1>GET IMMERSED</h1>
      <p>What are you waiting for?</p>
      <div className="landing-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          LIBRARY
        </Button> */}
      </div>
    </div>
  );
}

export default Landing;
