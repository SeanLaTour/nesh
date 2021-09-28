import React from "react";
import { Link } from "react-router-dom";

function Tab({ noteArray }) {
  const transform = (note) => {
    switch (note) {
      case "E2":
        return { string: "e", fret: "0" };
      case "F2":
        return { string: "e", fret: "1" };
      case "F#2":
        return { string: "e", fret: "2" };
      case "G2":
        return { string: "e", fret: "3" };
      case "G#2":
        return { string: "e", fret: "4" };
      case "A2":
        return { string: "a", fret: "0" };
      default:
        return " ";
    }
  };
  noteArray = [
    "E2",
    "G#2",
    "F2",
    "F2",
    "A2",
    "F2",
    "G2",
    " ",
    "E2",
    " ",
    "G#2",
  ];
  console.log(noteArray);
  let tabObj = {
    e: "",
    a: "",
    d: "",
    g: "",
    b: "",
    e2: "",
  };

  noteArray.forEach((note) => {
    let newNote = transform(note);
    tabObj[newNote.string] += newNote.fret;
  });

  console.log("e", tabObj.e.split(""));

  const tabify = (array) => {
    let temp = false;
    return array.split("").map((fret) => {
      if (temp) {
        temp = !temp;
        return ` - ${fret} - `;
      }
      if (!temp) {
        temp = !temp;
        return fret;
      }
    });
  };

  const eString = tabify(tabObj.e);
  const aString = tabify(tabObj.a);

  console.log("string", eString);

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
      <div style={{ textAlign: "left" }}>
        <div
          style={{
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {aString.join("")}
        </div>
        <div
          style={{
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {eString.join("")}
        </div>
      </div>
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
