export const transform = (note, position = 0) => {
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
      if (position === 0) {
        return { string: "a", fret: "0" };
      } else if (position >= 1) {
        return { string: "e", fret: "5" };
      }
    case "A#2":
      if (position === 0) {
        return { string: "a", fret: "1" };
      } else if (position >= 1) {
        return { string: "e", fret: "6" };
      }
    case "B2":
      if (position === 0) {
        return { string: "a", fret: "2" };
      } else if (position >= 1) {
        return { string: "e", fret: "7" };
      }
    case "C3":
      if (position === 0) {
        return { string: "a", fret: "3" };
      } else if (position >= 1) {
        return { string: "e", fret: "8" };
      }
    case "C#3":
      if (position === 0) {
        return { string: "a", fret: "4" };
      } else if (position >= 1) {
        return { string: "e", fret: "9" };
      }
    case "D3":
      if (position === 0) {
        return { string: "d", fret: "0" };
      } else if (position === 1) {
        return { string: "a", fret: "5" };
      } else if (position >= 2) {
        return { string: "e", fret: "(10)" };
      }
    case "D#3":
      if (position === 0) {
        return { string: "d", fret: "1" };
      } else if (position === 1) {
        return { string: "a", fret: "6" };
      } else if (position >= 2) {
        return { string: "e", fret: "(11)" };
      }
    case "E3":
      if (position === 0) {
        return { string: "d", fret: "2" };
      } else if (position === 1) {
        return { string: "a", fret: "7" };
      } else if (position >= 2) {
        return { string: "e", fret: "(12)" };
      }
    case "F3":
      if (position === 0) {
        return { string: "d", fret: "3" };
      } else if (position === 1) {
        return { string: "a", fret: "8" };
      } else if (position >= 2) {
        return { string: "e", fret: "(13)" };
      }
    case "F#3":
      if (position === 0) {
        return { string: "d", fret: "4" };
      } else if (position === 1) {
        return { string: "a", fret: "9" };
      } else if (position >= 2) {
        return { string: "e", fret: "(14)" };
      }
    case "G3":
      if (position === 0) {
        return { string: "g", fret: "0" };
      } else if (position === 1) {
        return { string: "d", fret: "5" };
      } else if (position === 2) {
        return { string: "a", fret: "(10)" };
      } else if (position >= 3) {
        return { string: "e", fret: "(15)" };
      }
    case "G#3":
      if (position === 0) {
        return { string: "g", fret: "1" };
      } else if (position === 1) {
        return { string: "d", fret: "6" };
      } else if (position === 2) {
        return { string: "a", fret: "(11)" };
      } else if (position >= 3) {
        return { string: "e", fret: "(16)" };
      }
    case "A3":
      if (position === 0) {
        return { string: "g", fret: "2" };
      } else if (position === 1) {
        return { string: "d", fret: "7" };
      } else if (position === 2) {
        return { string: "a", fret: "(12)" };
      } else if (position >= 3) {
        return { string: "e", fret: "(17)" };
      }
    case "A#3":
      if (position === 0) {
        return { string: "g", fret: "3" };
      } else if (position === 1) {
        return { string: "d", fret: "8" };
      } else if (position === 2) {
        return { string: "a", fret: "(13)" };
      } else if (position >= 3) {
        return { string: "e", fret: "(18)" };
      }
    case "B3":
      if (position === 0) {
        return { string: "b", fret: "0" };
      } else if (position === 1) {
        return { string: "g", fret: "4" };
      } else if (position === 2) {
        return { string: "d", fret: "9" };
      } else if (position === 3) {
        return { string: "a", fret: "(14)" };
      } else if (position >= 4) {
        return { string: "e", fret: "(19)" };
      }
    case "C4":
      if (position === 0) {
        return { string: "b", fret: "1" };
      } else if (position === 1) {
        return { string: "g", fret: "5" };
      } else if (position === 2) {
        return { string: "d", fret: "(10)" };
      } else if (position === 3) {
        return { string: "a", fret: "(15)" };
      } else if (position >= 4) {
        return { string: "e", fret: "(20)" };
      }
    case "C#4":
      if (position === 0) {
        return { string: "b", fret: "2" };
      } else if (position === 1) {
        return { string: "g", fret: "6" };
      } else if (position === 2) {
        return { string: "d", fret: "(11)" };
      } else if (position === 3) {
        return { string: "a", fret: "(16)" };
      } else if (position >= 4) {
        return { string: "e", fret: "(21)" };
      }
    case "D4":
      if (position === 0) {
        return { string: "b", fret: "3" };
      } else if (position === 1) {
        return { string: "g", fret: "7" };
      } else if (position === 2) {
        return { string: "d", fret: "(12)" };
      } else if (position === 3) {
        return { string: "a", fret: "(17)" };
      } else if (position >= 4) {
        return { string: "e", fret: "(22)" };
      }
    case "D#4":
      if (position === 0) {
        return { string: "b", fret: "4" };
      } else if (position === 1) {
        return { string: "g", fret: "8" };
      } else if (position === 2) {
        return { string: "d", fret: "(13)" };
      } else if (position >= 3) {
        return { string: "a", fret: "(18)" };
      }
    case "E4":
      if (position === 0) {
        return { string: "e2", fret: "0" };
      } else if (position === 1) {
        return { string: "b", fret: "5" };
      } else if (position === 2) {
        return { string: "g", fret: "9" };
      } else if (position === 3) {
        return { string: "d", fret: "(14)" };
      } else if (position === 4) {
        return { string: "a", fret: "(19)" };
      }
    case "F4":
      if (position === 0) {
        return { string: "e2", fret: "1" };
      } else if (position === 1) {
        return { string: "b", fret: "6" };
      } else if (position === 2) {
        return { string: "g", fret: "(10)" };
      } else if (position === 3) {
        return { string: "d", fret: "(15)" };
      } else if (position === 4) {
        return { string: "a", fret: "(20)" };
      }
    case "F#4":
      if (position === 0) {
        return { string: "e2", fret: "2" };
      } else if (position === 1) {
        return { string: "b", fret: "7" };
      } else if (position === 2) {
        return { string: "g", fret: "(11)" };
      } else if (position === 3) {
        return { string: "d", fret: "(16)" };
      } else if (position === 4) {
        return { string: "a", fret: "(21)" };
      }
    case "G4":
      if (position === 0) {
        return { string: "e2", fret: "3" };
      } else if (position === 1) {
        return { string: "b", fret: "8" };
      } else if (position === 2) {
        return { string: "g", fret: "(12)" };
      } else if (position === 3) {
        return { string: "d", fret: "(17)" };
      } else if (position === 4) {
        return { string: "a", fret: "(22)" };
      }
    case "G#4":
      if (position <= 1) {
        return { string: "e2", fret: "4" };
      } else if (position === 2) {
        return { string: "b", fret: "9" };
      } else if (position === 3) {
        return { string: "g", fret: "(13)" };
      } else if (position === 4) {
        return { string: "d", fret: "(18)" };
      }
    case "A4":
      if (position <= 1) {
        return { string: "e2", fret: "5" };
      } else if (position === 2) {
        return { string: "b", fret: "(10)" };
      } else if (position === 3) {
        return { string: "g", fret: "(14)" };
      } else if (position === 4) {
        return { string: "d", fret: "(19)" };
      }
    case "A#4":
      if (position <= 1) {
        return { string: "e2", fret: "6" };
      } else if (position === 2) {
        return { string: "b", fret: "(11)" };
      } else if (position === 3) {
        return { string: "g", fret: "(15)" };
      } else if (position === 4) {
        return { string: "d", fret: "(20)" };
      }
    case "B4":
      if (position <= 1) {
        return { string: "e2", fret: "7" };
      } else if (position === 2) {
        return { string: "b", fret: "(12)" };
      } else if (position === 3) {
        return { string: "g", fret: "(16)" };
      } else if (position === 4) {
        return { string: "d", fret: "(21)" };
      }
    case "C5":
      if (position <= 1) {
        return { string: "e2", fret: "8" };
      } else if (position === 2) {
        return { string: "b", fret: "(13)" };
      } else if (position === 3) {
        return { string: "g", fret: "(17)" };
      } else if (position === 4) {
        return { string: "d", fret: "(22)" };
      }
    case "C#5":
      if (position <= 2) {
        return { string: "e2", fret: "9" };
      } else if (position === 3) {
        return { string: "b", fret: "(14)" };
      } else if (position === 4) {
        return { string: "g", fret: "(18)" };
      }
    case "D5":
      if (position <= 2) {
        return { string: "e2", fret: "(10)" };
      } else if (position === 3) {
        return { string: "b", fret: "(15)" };
      } else if (position === 4) {
        return { string: "g", fret: "(19)" };
      }
    case "D#5":
      if (position <= 2) {
        return { string: "e2", fret: "(11)" };
      } else if (position === 3) {
        return { string: "b", fret: "(16)" };
      } else if (position === 4) {
        return { string: "g", fret: "(20)" };
      }
    case "E5":
      if (position <= 2) {
        return { string: "e2", fret: "(12)" };
      } else if (position === 3) {
        return { string: "b", fret: "(17)" };
      } else if (position === 4) {
        return { string: "g", fret: "(21)" };
      }
    case "F5":
      if (position <= 2) {
        return { string: "e2", fret: "(13)" };
      } else if (position === 3) {
        return { string: "b", fret: "(18)" };
      } else if (position === 4) {
        return { string: "g", fret: "(22)" };
      }
    case "F#5":
      if (position <= 3) {
        return { string: "e2", fret: "(14)" };
      } else if (position === 4) {
        return { string: "b", fret: "(19)" };
      }
    case "G5":
      if (position <= 3) {
        return { string: "e2", fret: "(15)" };
      } else if (position === 4) {
        return { string: "b", fret: "(20)" };
      }
    case "G#5":
      if (position <= 3) {
        return { string: "e2", fret: "(16)" };
      } else if (position === 4) {
        return { string: "b", fret: "(21)" };
      }
    case "A5":
      if (position <= 3) {
        return { string: "e2", fret: "(17)" };
      } else if (position === 4) {
        return { string: "b", fret: "(22)" };
      }
    case "A#5":
      return { string: "e2", fret: "(18)" };
    case "B5":
      return { string: "e2", fret: "(19)" };
    case "C5":
      return { string: "e2", fret: "(20)" };
    case "C#5":
      return { string: "e2", fret: "(21)" };
    case "D5":
      return { string: "e2", fret: "(22)" };
    default:
      return " ";
  }
};

export const tabify = (array) => {
  let temp = false;
  let doubleDigit = false;
  return array.split("").map((fret) => {
    if (fret === "(") {
      doubleDigit = !doubleDigit;
      return ` - `;
    } else if (fret === ")") {
      doubleDigit = !doubleDigit;
      return ``;
    }
    if (doubleDigit) {
      return `${fret}`;
    } else {
      if (temp) {
        temp = !temp;
        return ` - ${fret} - `;
      }
      if (!temp) {
        temp = !temp;
        return fret;
      }
    }
  });
};

export const tabifyForEdit = (array) => {
  let temp = false;
  return array.map((fret) => {
    if (temp) {
      temp = !temp;
      return fret;
    }
    if (!temp) {
      temp = !temp;
      return fret;
    }
  });
};

export const generateTabObj = (noteArray, position) => {
  let tabObj = {
    e: "",
    a: "",
    d: "",
    g: "",
    b: "",
    e2: "",
  };

  let temp = "";
  noteArray.forEach((note) => {
    let newNote = transform(note.note, position);
    console.log("note", note.note, "temp", temp);
    if (temp === note.note) {
      temp = note.note;
      return;
    } else {
      Object.keys(tabObj).forEach((string) => {
        if (string === newNote.string) {
          tabObj[newNote.string] += newNote.fret;
        } else {
          tabObj[string] += "-";
        }
      });
      temp = note.note;
    }
  });

  return tabObj;
};

export const generateTabObjForEdit = (noteArray, position, buttonFunction) => {
  let tabObj = {
    e: [],
    a: [],
    d: [],
    g: [],
    b: [],
    e2: [],
  };

  let temp = "";
  noteArray.forEach((note, index) => {
    let newNote = transform(note.note, position);
    if (temp === note.note) {
      temp = note.note;
      return;
    } else {
      Object.keys(tabObj).forEach((string) => {
        if (string === newNote.string) {
          tabObj[newNote.string].push(
            <button
              onClick={(e) => buttonFunction(e)}
              id={index}
              name={newNote.string}
              className="tab-button"
              style={{
                width: "2rem",
                backgroundColor: "rgb(0,0,0,0)",
                color: "#FBB03B",
                padding: ".5rem",
                border: "0",
                background: "none",
                boxShadow: "none",
                borderRadius: "0px",
              }}
            >
              {newNote.fret.length > 1
                ? newNote.fret.split("").splice(1, 2).join("")
                : newNote.fret}
            </button>
          );
        } else {
          tabObj[string].push(
            <button
              onClick={(e) => buttonFunction(e)}
              className="tab-button"
              name={string}
              style={{
                width: "2rem",
                backgroundColor: "rgb(0,0,0,0)",
                color: "#F69453",
                padding: ".5rem",
                border: "0",
                background: "none",
                boxShadow: "none",
                borderRadius: "0px",
              }}
            >
              -
            </button>
          );
        }
      });
      temp = note.note;
    }
  });

  return tabObj;
};

export const generateTabObjFromPrevious = (previousTabObj, buttonFunction) => {
  let tabObj = {
    e: [],
    a: [],
    d: [],
    g: [],
    b: [],
    e2: [],
  };
  Object.entries(previousTabObj).forEach((string) => {
    console.log(string[1]);
    const tempString = string[1].split("");
    tempString.forEach((note, index) => {
      if (note === "-") {
        tabObj[string[0]].push(
          <button
            onClick={(e) => buttonFunction(e)}
            className="tab-button"
            name={string[0]}
            style={{
              width: "2rem",
              backgroundColor: "rgb(0,0,0,0)",
              color: "#FBB03B",
              padding: ".5rem",
              border: "0",
              background: "none",
              boxShadow: "none",
              borderRadius: "0px",
            }}
          >
            -
          </button>
        );
      } else {
        tabObj[string[0]].push(
          <button
            onClick={(e) => buttonFunction(e)}
            id={index}
            name={string[0]}
            className="tab-button"
            style={{
              width: "2rem",
              backgroundColor: "rgb(0,0,0,0)",
              color: "#F69453",
              padding: ".5rem",
              border: "0",
              background: "none",
              boxShadow: "none",
              borderRadius: "0px",
            }}
          >
            {note}
          </button>
        );
      }
    });
  });
  console.log(tabObj);
  return tabObj;
};
