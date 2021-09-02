import { Component } from "react";
import BucketItems from "./BucketItems";

import "./Main.css";
import Search from "./UI/Search";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrySearch: "",
    };
  }

  countrySearchChangeHandler = (event) => {
    this.setState({ countrySearch: event.target.value });
  };

  countrySearchClickHander = (event) => {
    event.preventDefault();
    console.log("Search Country: ", this.state.countrySearch);
  };

  render() {
    return (
      <>
        <Search
          countrySearch={this.state.countrySearch}
          onChange={this.countrySearchChangeHandler}
          onClick={this.countrySearchClickHander}
        />
        <BucketItems />
      </>
    );
  }
}

export default Main;
