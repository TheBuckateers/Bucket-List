import { Component } from "react";
import BucketItems from "./BucketItems";
import axios from "axios";

import "./Main.css";
import Search from "./UI/Search";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrySearch: "",
      listOfCountries: [],
      randomListofCountries: [],
    };
  }

  // Generates a set of random numbers where quantity is how many numbers you need and max is the top value
  randomNumbersGenerator = (quantity, max) => {
    const set = new Set();
    while (set.size < quantity) {
      set.add(Math.floor(Math.random() * max) + 1);
    }
    return set;
  };

  //Get a listing of countries to put into state
  componentDidMount = async () => {
    // const { getIdTokenClaims, user } = this.props.auth0;
    // let tokenClaims = await getIdTokenClaims();
    // const jwt = tokenClaims.__raw;
    // const config = {
    //   headers: { Authorization: `Bearer ${jwt}` },
    // };
    try {
      const results = await axios.get(`http://localhost:3001/country`);
      // spreads the set of random numbers function to an array to loop over
      const randomNumbers = [
        ...this.randomNumbersGenerator(5, results.data.length),
      ];
      const randomCountries = [];
      // loops over the results received from API and pushed only those random number entries into an array
      for (let i = 0; i < randomNumbers.length; i++) {
        randomCountries.push(results.data[randomNumbers[i]]);
      }
      // places the entire list of all countries into state
      // places the random states into state
      this.setState({
        listOfCountries: results.data,
        randomListofCountries: randomCountries,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // method to update the country to search for state. This method is passed to the Search component as onChange.
  countrySearchChangeHandler = (event) => {
    this.setState({ countrySearch: event.target.value });
  };

  // method to perform the search on country entered. Method passed to Search component as onClick.
  countrySearchClickHander = (event) => {
    event.preventDefault();
    console.log("Search Country: ", this.state.countrySearch);
    console.log("List of Countries: ", this.state.listOfCountries);
    console.log("Random List of Countries: ", this.state.randomListofCountries);
  };

  render() {
    return (
      <>
        <Search
          countrySearch={this.state.countrySearch}
          onChange={this.countrySearchChangeHandler}
          onClick={this.countrySearchClickHander}
        />
        <BucketItems randomCountries={this.state.randomListofCountries} />
      </>
    );
  }
}

export default Main;
