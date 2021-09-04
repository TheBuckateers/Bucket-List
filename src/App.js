import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import MoreInfo from "./components/MoreInfo";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/more-info">
            <MoreInfo />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
