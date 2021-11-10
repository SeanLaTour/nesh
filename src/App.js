import "./App.css";
import Tab from "./Tab";
import { Switch, Route } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Edit from "./Edit";
import Publish from "./Publish";
import MicContainer from "./MicContainer";

function App() {
  const [noteArray, setNoteArray] = useState([]);
  const [position, setPosition] = useState(0);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <MicContainer setNoteArray={setNoteArray} />
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
