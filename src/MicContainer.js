import React, { useState } from "react";
import Mic from "./Mic";

function MicContainer({ setNoteArray }) {
  return (
    <div>
      <Mic setNoteArray={setNoteArray} />
    </div>
  );
}

export default MicContainer;
