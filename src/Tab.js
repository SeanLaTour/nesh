import React from "react";
import { Link } from "react-router-dom";
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
        padding: "2rem",
        margin: "2rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ textAlign: "left" }}>
        <div
          style={{
            textOverflow: "clip",
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            borderColor: "#FBB03B",
            borderRadius: "3px 3px 0 0",
            borderBottomStyle: "none",
            color: "#FBB03B",
          }}
        >
          e |{e2String.join("")}
        </div>
        <div
          style={{
            textOverflow: "clip",
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            borderColor: "#FBB03B",
            borderBottomStyle: "none",
            color: "#FBB03B",
          }}
        >
          b |{bString.join("")}
        </div>
        <div
          style={{
            textOverflow: "clip",
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            borderColor: "#FBB03B",
            borderBottomStyle: "none",
            color: "#FBB03B",
          }}
        >
          g |{gString.join("")}
        </div>
        <div
          style={{
            textOverflow: "clip",
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            borderColor: "#FBB03B",
            borderBottomStyle: "none",
            color: "#FBB03B",
          }}
        >
          d |{dString.join("")}
        </div>
        <div
          style={{
            textOverflow: "clip",
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            borderColor: "#FBB03B",
            borderBottomStyle: "none",
            color: "#FBB03B",
          }}
        >
          a |{aString.join("")}
        </div>
        <div
          style={{
            textOverflow: "clip",
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            borderColor: "#FBB03B",
            borderRadius: "0 0 3px 3px",
            color: "#FBB03B",
          }}
        >
          e |{eString.join("")}
        </div>

        <footer
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            width: "100%",
          }}
        >
          <Link to="/">
            <button
              style={{
                width: "50%",
                height: "3rem",
                backgroundColor: "#171717",
                color: "#DFDFDF",
              }}
            >
              Record Again
            </button>
          </Link>
          <Link to="/edit">
            <button
              style={{
                width: "50%",
                height: "3rem",
                backgroundColor: "#171717",
                color: "#DFDFDF",
              }}
            >
              Edit
            </button>
          </Link>
        </footer>
      </div>
      <div>
        <p style={{ color: "#FBB03B" }}>Position: {position + 1}</p>
      </div>
      <footer
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          width: "100%",
        }}
      >
        <Link to="/">
          <button
            style={{
              width: "25%",
              height: "3rem",
              backgroundColor: "#171717",
              color: "#DFDFDF",
              borderColor: "#FBB03B",
            }}
          >
            Record Again
          </button>
        </Link>
        <button
          style={{
            width: "25%",
            height: "3rem",
            backgroundColor: "#171717",
            color: "#DFDFDF",
            borderColor: "#FBB03B",
          }}
          onClick={handleButtonPositionUp}
        >
          Position +
        </button>
        <button
          style={{
            width: "25%",
            height: "3rem",
            backgroundColor: "#171717",
            color: "#DFDFDF",
            borderColor: "#FBB03B",
          }}
          onClick={handleButtonPositionDown}
        >
          Position -
        </button>
        <Link to="/edit">
          <button
            style={{
              width: "25%",
              height: "3rem",
              backgroundColor: "#171717",
              color: "#DFDFDF",
              borderColor: "#FBB03B",
            }}
          >
            Edit
          </button>
        </Link>
      </footer>
    </div>
  );
}

export default Tab;
