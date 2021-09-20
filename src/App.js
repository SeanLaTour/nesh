import "./App.css";
import Mic from "./Mic";
import Listen from "./Listen";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Mic />
        </Route>
        <Route path="/listen">
          <Listen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
