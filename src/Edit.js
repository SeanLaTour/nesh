import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { tabifyForEdit, generateTabObjForEdit } from "./services/utils";
import Modal from "react-modal";

function Edit({ noteArray, position, setPosition }) {
  const [eString, setEString] = useState([]);
  const [aString, setAString] = useState([]);
  const [dString, setDString] = useState([]);
  const [gString, setGString] = useState([]);
  const [bString, setBString] = useState([]);
  const [e2String, setE2String] = useState([]);
  const [tabObj, setTabObj] = useState(
    generateTabObjForEdit(noteArray, position, openModal)
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
      backgroundColor: "rgba(120, 200, 0, 0.25)",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(120, 200, 255, 0.8)",
      borderRadius: "20PX",
      padding: "8rem",
      width: "50%",
      height: "50%",
    },
  };

  const handleButtonPositionUp = () => {
    if (position < 4) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };

  const handleButtonPositionDown = () => {
    if (position > 0) {
      setPosition(position - 1);
    } else {
      setPosition(4);
    }
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
    console.log(currentNote);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmitEditButton() {
    closeModal();
    console.log("TABOBJ", tabObj);
    const string = currentNote.string;
    const position = currentNote.position;
    tabObj[string].forEach((button, index) => {
      if (button.props.id == position) {
        tabObj[string][index] = (
          <button
            onClick={(e) => openModal(e)}
            className="tab-button"
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
            setEString(tabObj.e);
          case "a":
            setAString(tabObj.a);
          case "d":
            setDString(tabObj.d);
          case "g":
            setGString(tabObj.g);
          case "b":
            setBString(tabObj.b);
          case "e2":
            setE2String(tabObj.e2);
        }
      }
    });
    console.log("TABOBJ AFTER", tabObj);
    setToggle(!toggle);
  }

  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <label style={{ marginBottom: "1rem" }}>
          Current fret position: {currentNote.note}
        </label>
        <input
          onChange={(e) => setFretInput(e.target.value)}
          style={{ marginBottom: "1rem" }}
        ></input>
        <button
          onClick={handleSubmitEditButton}
          style={{ marginBottom: "1rem" }}
        >
          Change
        </button>
        <button style={{ marginBottom: "1rem" }} onClick={closeModal}>
          Quit
        </button>
      </Modal>
      <h1 color="green">Edit</h1>
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
              textOverflow: "clip",
              borderStyle: "solid",
              listStyleType: "none",
              marginRight: "2.5rem",
              color: "#6CC417",
            }}
          >
            {e2String}
          </div>
          <div
            style={{
              textOverflow: "clip",
              borderStyle: "solid",
              listStyleType: "none",
              marginRight: "2.5rem",
              color: "#6CC417",
            }}
          >
            {bString}
          </div>
          <div
            style={{
              textOverflow: "clip",
              borderStyle: "solid",
              listStyleType: "none",
              marginRight: "2.5rem",
              color: "#6CC417",
            }}
          >
            {gString}
          </div>
          <div
            style={{
              textOverflow: "clip",
              borderStyle: "solid",
              listStyleType: "none",
              marginRight: "2.5rem",
              color: "#6CC417",
            }}
          >
            {dString}
          </div>
          <div
            style={{
              textOverflow: "clip",
              borderStyle: "solid",
              listStyleType: "none",
              marginRight: "2.5rem",
              color: "#6CC417",
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
              color: "#6CC417",
            }}
          >
            {eString}
          </div>
        </div>
        <div>
          <div
            style={{
              paddingTop: "2rem",
              paddingLeft: "12rem",
              paddingRight: "12rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
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
            <button
              style={{
                borderStyle: "solid",
                padding: "1rem",
                borderRadius: "15px",
                borderStyle: "solid",
                backgroundColor: "#6CC417",
              }}
              onClick={handleButtonPositionUp}
            >
              Position +
            </button>
            <button
              style={{
                borderStyle: "solid",
                padding: "1rem",
                borderRadius: "15px",
                borderStyle: "solid",
                backgroundColor: "#6CC417",
              }}
              onClick={handleButtonPositionDown}
            >
              Position -
            </button>
            <Link to="/tab">
              <button
                style={{
                  borderStyle: "solid",
                  padding: "1rem",
                  borderRadius: "15px",
                  borderStyle: "solid",
                  backgroundColor: "#6CC417",
                }}
              >
                To Tab
              </button>
            </Link>
          </div>
          <h2 style={{ color: "green" }}>Position: {position + 1}</h2>
        </div>
      </div>
    </div>
  );
}

export default Edit;
