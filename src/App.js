import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import MoreInfo from "./components/MoreInfo";
import Profile from "./components/Profile";
import BucketList from './components/BucketList';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/more-info" component={MoreInfo} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/bucket" component={BucketList} />
        </Switch>
      </>
    );
  }
}

export default App;
