import React, { useState } from "react";
import Wad from "web-audio-daw";

function Mic() {
  const [toggler, setToggle] = useState(false);
  var voice = new Wad({ source: "mic" });
  var tuner = new Wad.Poly();

  const record = () => {
    tuner.add(voice);
    voice.play();
    tuner.updatePitch(); // The tuner is now calculating the pitch and note name of its input 60 times per second. These values are stored in tuner.pitch and tuner.noteName.

    var logPitch = function () {
      console.log(tuner.pitch, tuner.noteName);
      //requestAnimationFrame(logPitch);
    };
    logPitch();
  };

  const recordOff = () => {
    tuner.stopUpdatingPitch();
    voice.stop();
  };

  return (
    <div>
      <button onClick={() => record()} style={{ marginTop: "24rem" }}>
        Listen
      </button>
      <button onClick={() => recordOff()} style={{ marginTop: "24rem" }}>
        Stop
      </button>
    </div>
  );
}

export default Mic;
