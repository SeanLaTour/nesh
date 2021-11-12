import "./App.css";
import Tab from "./Tab";
import { Switch, Route } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Edit from "./Edit";
import Publish from "./Publish";
import MicPage from "./MicPage";
import Header from "./components/Header";
import CreatePDFPage from "./CreatePDF";
import { PDFViewer } from "@react-pdf/renderer";

function App() {
  const [noteArray, setNoteArray] = useState([]);
  const [position, setPosition] = useState(0);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <MicPage setNoteArray={setNoteArray} />
        </Route>
        <Route path="/createPDF">
          <PDFViewer>
            <CreatePDFPage />
          </PDFViewer>
        </Route>
        <Route path="/tab">
          <Tab
            position={position}
            setPosition={setPosition}
            noteArray={noteArray}
          />
        </Route>
        <Route path="/publish">
          <Publish />
        </Route>
        <Route>
          <Edit
            position={position}
            setPosition={setPosition}
            noteArray={noteArray}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
