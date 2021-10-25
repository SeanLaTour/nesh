import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { tabify, generateTabObj } from "./services/utils";

function Tab({ noteArray, position, setPosition }) {
  const handleButtonPositionUp = () => {
    if (position < 4) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  const handleButtonPositionDown = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(4);
    }
  };

  const tabObj = generateTabObj(noteArray, position);

  const eString = tabify(tabObj.e);
  const aString = tabify(tabObj.a);
  const dString = tabify(tabObj.d);
  const gString = tabify(tabObj.g);
  const bString = tabify(tabObj.b);
  const e2String = tabify(tabObj.e2);

  return (
    <div
      style={{
        padding: "4rem",
        margin: "8rem",
        borderStyle: "solid",
        borderRadius: "10px",
        borderColor: "#6CC417",
      }}
    >
      <div style={{ textAlign: "left" }}>
        <div
          style={{
            textOverflow: "clip",
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {e2String.join("")}
        </div>
        <div
          style={{
            textOverflow: "clip",
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {bString.join("")}
        </div>
        <div
          style={{
            textOverflow: "clip",
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {gString.join("")}
        </div>
        <div
          style={{
            textOverflow: "clip",
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {dString.join("")}
        </div>
        <div
          style={{
            textOverflow: "clip",
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {aString.join("")}
        </div>
        <div
          style={{
            textOverflow: "clip",
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {eString.join("")}
        </div>
      </div>
      <div>
        <div
          style={{
            paddingTop: "2rem",
            paddingLeft: "12rem",
            paddingRight: "12rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <button
              style={{
                borderStyle: "solid",
                padding: "1rem",
                borderRadius: "15px",
                borderStyle: "solid",
                backgroundColor: "#6CC417",
              }}
            >
              Record Again
            </button>
          </Link>
          <button
            style={{
              borderStyle: "solid",
              padding: "1rem",
              borderRadius: "15px",
              borderStyle: "solid",
              backgroundColor: "#6CC417",
            }}
            onClick={handleButtonPositionUp}
          >
            Position +
          </button>
          <button
            style={{
              borderStyle: "solid",
              padding: "1rem",
              borderRadius: "15px",
              borderStyle: "solid",
              backgroundColor: "#6CC417",
            }}
            onClick={handleButtonPositionDown}
          >
            Position -
          </button>
          <button
            style={{
              padding: "1rem",
              borderRadius: "15px",
              borderStyle: "solid",
              backgroundColor: "#6CC417",
              marginTop: "24rem",
              margin: "1rem",
            }}
          >
            <Link to="/edit">Edit</Link>
          </button>
        </div>
        <h2 style={{ color: "green" }}>Position: {position + 1}</h2>
      </div>
    </div>
  );
}

export default Tab;
