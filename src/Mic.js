import React from "react";
import { Link } from "react-router-dom";
import Wad from "web-audio-daw";

function Mic({ setNoteArray }) {
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
        console.log("IF", count);
        listenToPitch(toggle);
      } else {
        console.log("ELSE", count);
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
    <div
      style={{
        margin: "8rem",
        padding: "8rem",
        borderStyle: "solid",
        borderColor: "#6CC417",
        borderRadius: "15px",
      }}
    >
      <button
        style={{
          padding: "1rem",
          borderRadius: "15px",
          borderStyle: "solid",
          backgroundColor: "#6CC417",
          marginTop: "24rem",
          margin: "1rem",
        }}
        onClick={() => {
          record();
        }}
      >
        Record
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
        onClick={() => {
          recordOff();
        }}
      >
        Stop
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
        onClick={() => {
          check();
        }}
      >
        Listen
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
        onClick={() => {
          setNoteArray(noteArray);
        }}
      >
        <Link to="/tab">Tab It!</Link>
      </button>
    </div>
  );
}

export default Mic;
