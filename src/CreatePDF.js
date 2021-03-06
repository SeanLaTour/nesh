import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
  Link,
} from "@react-pdf/renderer";
import Logo from "./images/logo-search-grid-desktop.png";
import { useState } from "react/cjs/react.development";
import { refineTabObjForPDF } from "./services/utils";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    letterSpacing: "5px",
    fontFamily: "Courier",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    textAlign: "center",
  },
});

// Create Document Component
function CreatePDF() {
  const tabObj = JSON.parse(window.localStorage.getItem("tabObj"));
  const [bandName, setBandName] = useState("");
  const [fileName, setFileName] = useState(
    `neshTab${Math.floor(Math.random() * 999999999999999)}.pdf`
  );
  const [lickName, setLickName] = useState("Sick Lick");
  console.log("refineTabObj", refineTabObjForPDF(tabObj));

  const tabObjPDF = (tabObj) => {
    let longestString = "";
    let stringLength = 0;
    Object.entries(tabObj).forEach((string) => {
      console.log(string);
      if (string[1].length > stringLength) {
        stringLength = string[1].length;
        longestString = string[0];
      }
    });
    console.log(longestString, stringLength);
    if (tabObj[longestString].length <= 30) {
      return (
        <View style={styles.section}>
          <Text>e | {tabObj.e2}</Text>
          <Text>b | {tabObj.b}</Text>
          <Text>g | {tabObj.g}</Text>
          <Text>d | {tabObj.d}</Text>
          <Text>a | {tabObj.a}</Text>
          <Text>e | {tabObj.e}</Text>
        </View>
      );
    } else if (
      tabObj[longestString].length >= 20 &&
      tabObj[longestString].length <= 61
    ) {
      return (
        <View style={styles.section}>
          <Text>e | {tabObj.e2.slice(0, 30)}</Text>
          <Text>b | {tabObj.b.slice(0, 30)}</Text>
          <Text>g | {tabObj.g.slice(0, 30)}</Text>
          <Text>d | {tabObj.d.slice(0, 30)}</Text>
          <Text>a | {tabObj.a.slice(0, 30)}</Text>
          <Text>e | {tabObj.e.slice(0, 30)}</Text>
          <Text> </Text>
          <Text>e | {tabObj.e2.slice(31, 61)}</Text>
          <Text>b | {tabObj.b.slice(31, 61)}</Text>
          <Text>g | {tabObj.g.slice(31, 61)}</Text>
          <Text>d | {tabObj.d.slice(31, 61)}</Text>
          <Text>a | {tabObj.a.slice(31, 61)}</Text>
          <Text>e | {tabObj.e.slice(31, 61)}</Text>
        </View>
      );
    } else if (
      tabObj[longestString].length >= 62 &&
      tabObj[longestString].length <= 93
    ) {
      return (
        <View style={styles.section}>
          <Text>e | {tabObj.e2.slice(0, 30)}</Text>
          <Text>b | {tabObj.b.slice(0, 30)}</Text>
          <Text>g | {tabObj.g.slice(0, 30)}</Text>
          <Text>d | {tabObj.d.slice(0, 30)}</Text>
          <Text>a | {tabObj.a.slice(0, 30)}</Text>
          <Text>e | {tabObj.e.slice(0, 30)}</Text>
          <Text> </Text>
          <Text>e | {tabObj.e2.slice(31, 61)}</Text>
          <Text>b | {tabObj.b.slice(31, 61)}</Text>
          <Text>g | {tabObj.g.slice(31, 61)}</Text>
          <Text>d | {tabObj.d.slice(31, 61)}</Text>
          <Text>a | {tabObj.a.slice(31, 61)}</Text>
          <Text>e | {tabObj.e.slice(31, 61)}</Text>
          <Text> </Text>
          <Text>e | {tabObj.e2.slice(62, 93)}</Text>
          <Text>b | {tabObj.b.slice(62, 93)}</Text>
          <Text>g | {tabObj.g.slice(62, 93)}</Text>
          <Text>d | {tabObj.d.slice(62, 93)}</Text>
          <Text>a | {tabObj.a.slice(62, 93)}</Text>
          <Text>e | {tabObj.e.slice(62, 93)}</Text>
        </View>
      );
    }
  };

  const downloadButton = () => {
    return (
      <div>
        <PDFDownloadLink
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            width: "100%",
            height: "3rem",
            backgroundColor: "#171717",
            color: "#FBB03B",
            borderColor: "#FBB03B",
            borderWidth: "2px",
            borderStyle: "solid",
            paddingTop: "1rem",
            paddingBottom: "-0.5rem",
          }}
          document={
            <Document file="test.pdf" style={styles.section}>
              <Page size={"A4"} style={styles.page}>
                <View style={styles.header}>
                  <Text>{bandName}</Text>
                  <Text>{lickName}</Text>
                </View>
                {tabObjPDF(refineTabObjForPDF(tabObj))}
              </Page>
            </Document>
          }
          fileName={fileName}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download"
          }
        </PDFDownloadLink>
      </div>
    );
  };

  const handleInputBandName = (e) => {
    setBandName(e.target.value);
  };

  const handleInputLickName = (e) => {
    setLickName(e.target.value);
  };

  const handleInputFileName = (e) => {
    setFileName(`${e.target.value}.pdf`);
  };

  return (
    <div>
      <div
        style={{
          marginTop: "6rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#FBB03B",
          width: "100%",
        }}
      >
        <img src={Logo} />
        <label>File name</label>
        <input onChange={(e) => handleInputFileName(e)}></input>
        <label>Band name</label>
        <input onChange={(e) => handleInputBandName(e)}></input>
        <label>Lick name</label>
        <input onChange={(e) => handleInputLickName(e)}></input>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>

      <Link to="/">
        <button>Back</button>
      </Link>
      {downloadButton()}
    </div>
  );
}

export default CreatePDF;
