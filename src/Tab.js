import React from "react";
import { Link } from "react-router-dom";

function Tab({ noteArray }) {
  console.log(noteArray);
  let previousNote = "";
  const tab = noteArray.map((note) => {
    if (note.note === previousNote || note.note === undefined) {
      previousNote = note.note;
      return " ";
    } else {
      previousNote = note.note;
      return ` ${note.note} `;
    }
  });
  tab.toString().trim();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "24rem",
      }}
    >
      <ul style={{ listStyleType: "none" }}>{tab}</ul>
      <Link to="/">
        <button>Record Again</button>
      </Link>
    </div>
  );
}

export default Tab;
