import React from "react";
import "./ValorantButton.css";
function ValorantButton(props) {
  return (
    <div className="val-button" onClick={props.onClick}>
      <p className="poppins-medium button-text">{props.text}</p>
    </div>
  );
}
export default ValorantButton;
