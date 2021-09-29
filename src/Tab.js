import React from "react";
import { Link } from "react-router-dom";

// TODO: Something's wrong, good luck...

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
      case "A#2":
        return { string: "a", fret: "1" };
      case "B2":
        return { string: "a", fret: "2" };
      case "C3":
        return { string: "a", fret: "3" };
      case "C#3":
        return { string: "a", fret: "4" };
      case "D3":
        return { string: "d", fret: "0" };
      case "D#3":
        return { string: "d", fret: "1" };
      case "E3":
        return { string: "d", fret: "2" };
      case "F3":
        return { string: "d", fret: "3" };
      case "F#3":
        return { string: "d", fret: "4" };
      case "G3":
        return { string: "g", fret: "0" };
      case "G#3":
        return { string: "g", fret: "1" };
      case "G3":
        return { string: "g", fret: "2" };
      case "A#3":
        return { string: "g", fret: "3" };
      case "B3":
        return { string: "g", fret: "0" };
      case "C4":
        return { string: "b", fret: "1" };
      case "C#4":
        return { string: "b", fret: "2" };
      case "D4":
        return { string: "b", fret: "3" };
      case "D#4":
        return { string: "b", fret: "4" };
      case "E4":
        return { string: "e", fret: "0" };
      case "F4":
        return { string: "e", fret: "1" };
      case "F#4":
        return { string: "e", fret: "2" };
      case "G4":
        return { string: "e", fret: "3" };
      case "G#4":
        return { string: "e", fret: "4" };
      default:
        return " ";
    }
  };

  console.log("noteArray", noteArray);
  let tabObj = {
    e: "",
    a: "",
    d: "",
    g: "",
    b: "",
    e2: "",
  };

  noteArray.forEach((note) => {
    console.log("note", note);
    let newNote = transform(note.note);
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
  const dString = tabify(tabObj.d);
  const gString = tabify(tabObj.g);
  const bString = tabify(tabObj.b);
  const e2String = tabify(tabObj.e2);

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
            textOverflow: 'clip',
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {e2String.join("")}
        </div>
        <div
          style={{
            textOverflow: 'clip',
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {bString.join("")}
        </div>
        <div
          style={{
            textOverflow: 'clip',
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {gString.join("")}
        </div>
        <div
          style={{
            textOverflow: 'clip',
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {dString.join("")}
        </div>
        <div
          style={{
            textOverflow: 'clip',
            borderStyle: "solid",
            listStyleType: "none",
            marginRight: "2.5rem",
            color: "#6CC417",
          }}
        >
          {aString.join("")}
        </div>
        <div
          style={{
            textOverflow: 'clip',
            borderStyle: "solid",
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
            borderStyle: "solid",
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
