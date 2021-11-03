import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Wad from "web-audio-daw";
import logo from "./images/logo-search-grid-desktop.png";

function Mic({ setNoteArray }) {
  window.localStorage.setItem("tabObj", null);
  let noteArray = [];
  let recordings = [];
  let voice = new Wad({ source: "mic" });
  let tuner = new Wad.Poly({
    recorder: {
      options: { mimeType: "audio/webm" },
      onstop: function (event) {
        let blob = new Blob(this.recorder.chunks, {
          type: "audio/webm;codecs=opus",
        });
        recordings.push(new Wad({ source: URL.createObjectURL(blob) }));
      },
    },
  });

  // Arm tuner.
  tuner.add(voice);

  // This function will either begin or end a recording session.
  const run = (toggle) => {
    if (toggle) {
      voice.play();
      tuner.recorder.start();
    }
    if (!toggle) {
      tuner.recorder.stop();
      voice.stop();
    }
  };

  // These variables assist with the functions below.
  let reqAnim;
  let count = 0;
  let timeout = 0;

  // This function pushes the pitch to the noteArray to be sent to the tab component.
  const listenToPitch = (toggle) => {
    reqAnim = setTimeout(() => {
      count++;
      if (toggle) {
        noteArray.push({ count: count, note: tuner.noteName });
        listenToPitch(toggle);
      } else {
        count = 0;
        clearTimeout(reqAnim);
      }
    }, 0);
  };

  // This function arms and disarms the pitch tracker and calls the listenToPitch function.
  const trackPitch = (toggle) => {
    if (toggle) {
      tuner.updatePitch();
    }
    listenToPitch(toggle);
    if (!toggle) {
      tuner.stopUpdatingPitch();
    }
  };

  // Begin recording.
  const record = () => {
    run(true);
    trackPitch(true);
  };

  // End recording.
  const recordOff = () => {
    trackPitch(false);
    run(false);
  };

  // Listen to recording.
  const check = () => {
    console.log("noteArray:", noteArray);
    //recordings[0] && recordings[0].play();
  };

  return (
    <div>
      <div
        style={{
          marginTop: "1rem",
          margin: "2rem",
          padding: "2rem",
          borderStyle: "solid",
          borderColor: "#082139",
          borderRadius: "15px",
        }}
      >
        <img src={logo} />
        <p style={{ marginTop: "-2rem", color: "#FBB03B" }}>
          Don't forget your licks.
        </p>
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

export default Mic;
