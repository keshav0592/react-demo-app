import React from "react";
import "./App.css";
import Welcome from "./component/welcome/Welcome";
import Clock from "./component/clock/Clock";
import Contact from "./component/contact/Contact";
import { Route, Switch } from "react-router-dom";
import Navigation from "./component/navigation/Navigation";
import PageNotFound from "./component/pageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" render={(props) => <Welcome {...props} name="Keshav" />} />
        <Route path="/Welcome/:name" component={Welcome} />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
