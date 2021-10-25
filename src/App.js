import "./App.css";
import Mic from "./Mic";
import Tab from "./Tab";
import { Switch, Route } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Edit from "./Edit";

function App() {
  const [noteArray, setNoteArray] = useState([]);
  const [position, setPosition] = useState(0);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Mic setNoteArray={setNoteArray} />
        </Route>
        <Route path="/tab">
          <Tab
            position={position}
            setPosition={setPosition}
            noteArray={noteArray}
          />
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
