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

  return (
    <div
      style={{
        padding: "4rem",
        margin: "8rem",
        borderStyle: "solid",
        borderRadius: "10px",
        borderColor: "#6CC417",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          marginRight: "2.5rem",
          color: "#6CC417",
        }}
      >
        {tab}
      </ul>
      <Link to="/">
        <button
          style={{
            padding: "1rem",
            borderRadius: "15px",
            borderStyle: "solid",
            backgroundColor: "#6CC417",
          }}
        >
          Record Again
        </button>
      </Link>
    </div>
  );
}

export default Tab;
