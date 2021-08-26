import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./page/login";
import Registro from "./page/registro";
import Usuario from "./page/usuario";
import Votos from "./page/votos";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
            <Login></Login>
          </Route>
        <Route exact path="/registro">
          <Registro></Registro>
        </Route>
        <Route exact path="/usuario">
            <Usuario></Usuario>
        </Route>
        <Route exact path="/votos">
            <Votos></Votos>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
