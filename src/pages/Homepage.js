import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Homepage() {
  const [dark, setDark] = useState(false);

  function changeBlack(props) {
    document.body.style.backgroundColor = "black";
    setDark(true);
  }

  function changeWhite(props) {
    document.body.style.backgroundColor = "white";
    setDark(false);
  }
  if (dark) {
    return (
      <div className="home">
        <h1 style={{ display: "flex" }}>Homepage</h1>

        <button
          className="day"
          onClick={changeWhite}
          style={{
            padding: "10px 20px",
            margin: "20px",
            lineHeight: "1.5em",
            textAlign: "center",
            display: "flex",
          }}
        >
          🌕
        </button>
      </div>
    );
  } else {
    return (
      <div className="home">
        <h1 style={{ display: "flex" }}>Homepage</h1>

        <button
          className="night"
          onClick={changeBlack}
          style={{
            padding: "10px 20px",
            margin: "20px",
            display: "flex",
            lineHeight: "1.5em",
            textAlign: "center",
          }}
        >
          🌑
        </button>
        <input type="checkbox" />
      </div>
    );
  }
}
