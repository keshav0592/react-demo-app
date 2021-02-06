import "./App.css";
import Welcome from "./component/welcome/Welcome";

import Navigation from "./component/navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import Jeopardy from "./component/jeopardy/Jeopardy";
import Contact from "./component/contact/Contact";
import Clock from "./component/clock/Clock";
import PageNotFound from "./component/pageNotFound/PageNotFound";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Jeopardy} />
        <Route path="/Welcome/:name" component={Welcome} />
        <Route path="/contact" component={Contact} />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route path="/clock" component={Clock} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
