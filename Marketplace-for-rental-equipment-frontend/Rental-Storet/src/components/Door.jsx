import React, { useState } from "react";
import "./Door.css";

const Door = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDoor = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="door-container">
      <div className={`door ${isOpen ? "open" : "closed"}`}>
        <div className="handle"></div>
      </div>
      <button onClick={toggleDoor} className="dbutton">
        {isOpen ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Door;
