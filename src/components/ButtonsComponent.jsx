import React from "react";
import "./TweetComponent.scss";
function ButtonsComponent({ width, padding, color, text }) {
  return (
    <button
      className="tweet"
      style={{
        width: `${width}`,
        background: `${color}`,
        padding: `${padding} 0px`,
      }}
    >
      {text}
    </button>
  );
}

export default ButtonsComponent;
