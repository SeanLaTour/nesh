import React, { useState } from "react";
import Wad from "web-audio-daw";

function Mic() {
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
      logPitch();
    }
    if (!toggle) {
      cancelAnimationFrame(logPitch);
      tuner.recorder.stop();
      voice.stop();
    }
  };

  var logPitch = function () {
    tuner.updatePitch();
    console.log(tuner.pitch, tuner.noteName);
    requestAnimationFrame(logPitch);
  };

  const record = () => {
    run(true);
  };

  const recordOff = () => {
    run(false);
  };

  const check = () => {
    console.log(recordings);
    recordings[0] && recordings[0].play();
  };

  return (
    <div>
      <button
        onClick={() => {
          record();
        }}
        style={{ marginTop: "24rem" }}
      >
        Listen
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
        Check
      </button>
    </div>
  );
}

export default Mic;
