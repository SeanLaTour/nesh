import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
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
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {tabObjPDF(tabObj)}
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
}

export default CreatePDF;
