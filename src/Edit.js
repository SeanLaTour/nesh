import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import {
  tabifyForEdit,
  generateTabObjForEdit,
  generateTabObjFromPrevious,
} from "./services/utils";
import Modal from "react-modal";

function Edit({ noteArray, position }) {
  const previousTabObj = JSON.parse(window.localStorage.getItem("tabObj"));
  console.log("prevObj", previousTabObj);
  const [eString, setEString] = useState([]);
  const [aString, setAString] = useState([]);
  const [dString, setDString] = useState([]);
  const [gString, setGString] = useState([]);
  const [bString, setBString] = useState([]);
  const [e2String, setE2String] = useState([]);
  const [tabObj, setTabObj] = useState(
    previousTabObj
      ? generateTabObjFromPrevious(previousTabObj, openModal)
      : generateTabObjForEdit(noteArray, position, openModal)
  );
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState({});
  const [fretInput, setFretInput] = useState("");
  const [toggle, setToggle] = useState(false);

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      backgroundColor: "rgb(100, 100, 100, 0.40)",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
      padding: "1rem",
      width: "50%",
      height: "50%",
    },
  };

  const handlePublish = () => {
    const tabObjForStorage = {
      e: "",
      a: "",
      d: "",
      g: "",
      b: "",
      e2: "",
    };
    Object.entries(tabObj).forEach((string) => {
      string[1].forEach((note) => {
        let doubleDigit = "";
        if (note.props.children.length > 1) {
          doubleDigit = `(${note.props.children})`;
          tabObjForStorage[string[0]] += doubleDigit;
        } else {
          tabObjForStorage[string[0]] += note.props.children;
        }
      });
    });
    window.localStorage.setItem("tabObj", JSON.stringify(tabObjForStorage));
  };

  useEffect(() => {
    setEString(tabifyForEdit(tabObj.e));
    setAString(tabifyForEdit(tabObj.a));
    setDString(tabifyForEdit(tabObj.d));
    setGString(tabifyForEdit(tabObj.g));
    setBString(tabifyForEdit(tabObj.b));
    setE2String(tabifyForEdit(tabObj.e2));
  }, [toggle]);

  function openModal(e) {
    setCurrentNote({
      note: e.target.innerHTML,
      position: e.target.id,
      string: e.target.name,
    });
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmitEditButton() {
    closeModal();
    const string = currentNote.string;
    const position = currentNote.position;
    if (tabObj[string])
      tabObj[string].forEach((button, index) => {
        if (button.props.id == position) {
          tabObj[string][index] = (
            <button
              onClick={(e) => openModal(e)}
              className="tab-button"
              id={parseInt(position)}
              name={string}
              style={{
                width: "2rem",
                backgroundColor: "rgb(0,0,0,0)",
                color: "red",
                padding: ".5rem",
                border: "0",
                background: "none",
                boxShadow: "none",
                borderRadius: "0px",
              }}
            >
              {fretInput}
            </button>
          );
          switch (string) {
            case "e":
              setEString(tabifyForEdit(tabObj.e));
            case "a":
              setAString(tabifyForEdit(tabObj.a));
            case "d":
              setDString(tabifyForEdit(tabObj.d));
            case "g":
              setGString(tabifyForEdit(tabObj.g));
            case "b":
              setBString(tabifyForEdit(tabObj.b));
            case "e2":
              setE2String(tabifyForEdit(tabObj.e2));
          }
        }
      });
    setToggle(!toggle);
  }

  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <label
            style={{ marginBottom: "1rem", width: "100%", color: "lightgrey" }}
          >
            Current fret position:{" "}
            <b style={{ marginLeft: "31%" }}>( {currentNote.note} )</b>
          </label>
          <input
            type="number"
            onChange={(e) => setFretInput(e.target.value)}
            style={{
              marginBottom: "1rem",
              width: "96%",
              borderRadius: "5px",
              padding: "0.5rem",
              borderStyle: "none",
            }}
          ></input>
        </div>
        <div>
          <button
            onClick={handleSubmitEditButton}
            style={{
              marginBottom: "1rem",
              width: "50%",
              borderRadius: "5px 0 0 5px",
              borderStyle: "none",
              padding: "0.5rem",
            }}
          >
            Change
          </button>
          <button
            style={{
              marginBottom: "1rem",
              width: "50%",
              borderRadius: "0 5px 5px 0",
              borderStyle: "none",
              padding: "0.5rem",
            }}
            onClick={closeModal}
          >
            Quit
          </button>
        </div>
      </Modal>
      <div
        style={{
          padding: "2rem",
          margin: "2rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              textOverflow: "clip",
              borderStyle: "solid",
              borderBottomStyle: "none",
              listStyleType: "none",
              marginRight: "2.5rem",
              borderColor: "#FBB03B",
            }}
          >
            {e2String}
          </div>
          <div
            style={{
              textOverflow: "clip",
              borderStyle: "solid",
              borderBottomStyle: "none",
              listStyleType: "none",
              marginRight: "2.5rem",
              borderColor: "#FBB03B",
            }}
          >
            {bString}
          </div>
          <div
            style={{
              textOverflow: "clip",
              borderStyle: "solid",
              borderBottomStyle: "none",
              listStyleType: "none",
              marginRight: "2.5rem",
              borderColor: "#FBB03B",
            }}
          >
            {gString}
          </div>
          <div
            style={{
              textOverflow: "clip",
              borderStyle: "solid",
              borderBottomStyle: "none",
              listStyleType: "none",
              marginRight: "2.5rem",
              borderColor: "#FBB03B",
            }}
          >
            {dString}
          </div>
          <div
            style={{
              textOverflow: "clip",
              borderStyle: "solid",
              borderBottomStyle: "none",
              listStyleType: "none",
              marginRight: "2.5rem",
              borderColor: "#FBB03B",
            }}
          >
            {aString}
          </div>
          <div
            style={{
              textOverflow: "clip",
              borderStyle: "solid",
              listStyleType: "none",
              marginRight: "2.5rem",
              borderColor: "#FBB03B",
            }}
          >
            {eString}
          </div>
        </div>
        <div>
          <footer
            style={{
              position: "fixed",
              bottom: "0",
              left: "0",
              right: "0",
              width: "100%",
            }}
          >
            <Link to="/">
              <button
                style={{
                  width: "50%",
                  height: "3rem",
                  backgroundColor: "#171717",
                  color: "#DFDFDF",
                  borderColor: "#FBB03B",
                }}
              >
                Record Again
              </button>
            </Link>
            <Link to="/edit">
              <Link to="/publish">
                <button
                  onClick={handlePublish}
                  style={{
                    width: "50%",
                    height: "3rem",
                    backgroundColor: "#171717",
                    color: "#DFDFDF",
                    borderColor: "#FBB03B",
                  }}
                >
                  Publish
                </button>
              </Link>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Edit;
