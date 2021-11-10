import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

function Header() {
  return (
    <header
      style={{
        height: "3rem",
        backgroundColor: "#171717",
        color: "#DFDFDF",
        borderColor: "#FBB03B",
        borderStyle: "solid",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        justifyContent: "end",
      }}
    >
      <BsFillPersonFill
        onClick={() => window.confirm("Did you want to sign out?")}
        style={{
          paddingTop: "1rem",
          paddingRight: "1rem",
          width: "5%",
          color: "#FBB03B",
        }}
      />
    </header>
  );
}

export default Header;
