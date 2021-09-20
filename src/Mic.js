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

  tuner.add(voice);

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

  let reqAnim;
  let count = 0;

  const listenToPitch = (toggle) => {
    if (toggle) {
      noteArray.push({ count: count, note: tuner.noteName });
      reqAnim = window.requestAnimationFrame(listenToPitch);
    } else {
      count = 0;
      window.cancelAnimationFrame(reqAnim);
    }
  };

  const trackPitch = (toggle) => {
    if (toggle) {
      count++;
      console.log(count, tuner.noteName);
      tuner.updatePitch();
    }
    listenToPitch(toggle);
    if (!toggle) {
      console.log(reqAnim);
      tuner.stopUpdatingPitch();
    }
  };

  const record = () => {
    run(true);
    trackPitch(true);
  };

  const recordOff = () => {
    trackPitch(false);
    run(false);
  };

  const check = () => {
    console.log("recordings", recordings);
    recordings[0] && recordings[0].play();
  };

  const note = () => {
    console.log("noteArray", noteArray);
  };

  return (
    <div>
      <button
        onClick={() => {
          record();
        }}
        style={{ marginTop: "24rem" }}
      >
        Record
      </button>
      <button
        onClick={() => {
          recordOff();
        }}
        style={{ marginTop: "24rem" }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          check();
        }}
        style={{ marginTop: "24rem" }}
      >
        Listen
      </button>
      <button
        onClick={() => {
          console.log(tuner.noteName);
          setNoteArray(noteArray);
        }}
        style={{ marginTop: "24rem" }}
      >
        <Link to="/tab">Tab It!</Link>
      </button>
    </div>
  );
}

export default Mic;
