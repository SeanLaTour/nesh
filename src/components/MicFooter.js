import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-search-grid-desktop.png";

function MicFooter({ setNoteArray, noteArray, record, recordOff, check }) {
  const [audioWave, setAudioWave] = useState(false);
  return (
    <div>
      <div
        style={{
          marginTop: "0rem",
          margin: "2rem",
          padding: "2rem",
        }}
      >
        <img src={logo} />
        {audioWave ? (
          <div style={{ marginTop: "-2rem", color: "#FBB03B" }} class="loader">
            <svg
              id="wave"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 38.05"
            >
              <title>Audio Wave</title>
              <path
                id="line-1"
                data-name="Line 1"
                d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z"
              />
              <path
                id="line-2"
                data-name="Line 2"
                d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"
              />
              <path
                id="line-3"
                data-name="Line 3"
                d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"
              />
              <path
                id="line-4"
                data-name="Line 4"
                d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"
              />
              <path
                id="line-5"
                data-name="Line 5"
                d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"
              />
              <path
                id="line-6"
                data-name="Line 6"
                d="M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z"
              />
              <path
                id="line-7"
                data-name="Line 7"
                d="M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z"
              />
              <path
                id="line-8"
                data-name="Line 8"
                d="M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z"
              />
              <path
                id="line-9"
                data-name="Line 9"
                d="M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z"
              />
            </svg>
          </div>
        ) : (
          <p style={{ marginTop: "-2rem", color: "#FBB03B" }}>
            Don't forget your licks.
          </p>
        )}
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
        <button
          style={{
            width: "25%",
            height: "3rem",
            backgroundColor: "#171717",
            color: "#DFDFDF",
            borderColor: "#FBB03B",
          }}
          onClick={() => {
            record();
            setAudioWave(true);
          }}
        >
          Record
        </button>
        <button
          style={{
            width: "25%",
            height: "3rem",
            backgroundColor: "#171717",
            color: "#DFDFDF",
            borderColor: "#FBB03B",
          }}
          onClick={() => {
            recordOff();
            setAudioWave(false);
          }}
        >
          Stop
        </button>
        <button
          style={{
            width: "25%",
            height: "3rem",
            backgroundColor: "#171717",
            color: "#DFDFDF",
            borderColor: "#FBB03B",
          }}
          onClick={() => {
            check();
          }}
        >
          Listen
        </button>
        <button
          style={{
            width: "25%",
            height: "3rem",
            backgroundColor: "#171717",
            color: "#DFDFDF",
            borderColor: "#FBB03B",
          }}
          onClick={() => {
            setNoteArray(noteArray);
          }}
        >
          <Link to="/tab">Tab It!</Link>
        </button>
      </footer>
    </div>
  );
}

export default MicFooter;
