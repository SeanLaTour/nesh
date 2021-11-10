import React from "react";
import MicFooter from "./components/MicFooter";
import Wad from "web-audio-daw";

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
    recordings[0] && recordings[0].play();
  };

  return (
    <div>
      <MicFooter
        setNoteArray={setNoteArray}
        noteArray={noteArray}
        record={record}
        recordOff={recordOff}
        check={check}
      />
    </div>
  );
}

export default Mic;
