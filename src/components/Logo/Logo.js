import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="">
      <Tilt className="Tilt" options={{ max: 55 }}>
        <div className="Tilt-inner ">
          <img className="Tilt-inner_image" alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
