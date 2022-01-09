import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

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
});

// Create Document Component
function CreatePDF() {
  const tabObj = JSON.parse(window.localStorage.getItem("tabObj"));

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
    if (tabObj[longestString].length < 70) {
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
      tabObj[longestString].length >= 70 &&
      tabObj[longestString].length < 196
    ) {
      return (
        <View style={styles.section}>
          <Text>e | {tabObj.e2.slice(0, 70)}</Text>
          <Text>b | {tabObj.b.slice(0, 70)}</Text>
          <Text>g | {tabObj.g.slice(0, 70)}</Text>
          <Text>d | {tabObj.d.slice(0, 70)}</Text>
          <Text>a | {tabObj.a.slice(0, 70)}</Text>
          <Text>e | {tabObj.e.slice(0, 70)}</Text>
          <Text> </Text>
          <Text>e | {tabObj.e2.slice(71, 140)}</Text>
          <Text>b | {tabObj.b.slice(71, 140)}</Text>
          <Text>g | {tabObj.g.slice(71, 140)}</Text>
          <Text>d | {tabObj.d.slice(71, 140)}</Text>
          <Text>a | {tabObj.a.slice(71, 140)}</Text>
          <Text>e | {tabObj.e.slice(71, 140)}</Text>
        </View>
      );
    }
  };

  return (
    <PDFViewer width={"100%"} height={"1000px"}>
      <Document file="test.pdf" style={styles.section}>
        <Page size={"A4"} style={styles.page}>
          {tabObjPDF(tabObj)}
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default CreatePDF;
