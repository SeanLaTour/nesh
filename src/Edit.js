import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { tabifyForEdit, generateTabObjForEdit } from "./services/utils";
import { useDisclosure } from "@chakra-ui/hooks";
import Modal from "react-modal";

function Edit({ noteArray }) {
  const [position, setPosition] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  console.log(noteArray);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
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

  const tabObj = generateTabObjForEdit(noteArray, position, openModal);

  const eString = tabifyForEdit(tabObj.e);
  const aString = tabifyForEdit(tabObj.a);
  const dString = tabifyForEdit(tabObj.d);
  const gString = tabifyForEdit(tabObj.g);
  const bString = tabifyForEdit(tabObj.b);
  const e2String = tabifyForEdit(tabObj.e2);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        HEY
        <button onClick={closeModal}>close</button>
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
            <button
              style={{
                borderStyle: "solid",
                padding: "1rem",
                borderRadius: "15px",
                borderStyle: "solid",
                backgroundColor: "#6CC417",
              }}
              onClick={openModal}
            >
              modal
            </button>
          </div>
          <h2 style={{ color: "green" }}>Position: {position + 1}</h2>
        </div>
      </div>
      );
    </div>
  );
}

export default Edit;
