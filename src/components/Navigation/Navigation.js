import React from "react";
import ProfileIcon from "../Profile/ProfileIcon";

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
  if (isSignedIn) {
    return (
      <nav className="nav">
        <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
      </nav>
    );
  } else {
    return (
      <nav className="nav">
        <button onClick={() => onRouteChange("signin")} className="nav_button">
          Sign In
        </button>
        <button
          onClick={() => onRouteChange("register")}
          className="nav_button"
        >
          Register
        </button>
      </nav>
    );
  }
};

export default Navigation;
