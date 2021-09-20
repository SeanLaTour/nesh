import "./App.css";
import Mic from "./Mic";
import Tab from "./Tab";
import { Switch, Route } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function App() {
  const [noteArray, setNoteArray] = useState([]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Mic setNoteArray={setNoteArray} />
        </Route>
        <Route path="/tab">
          <Tab noteArray={noteArray} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
