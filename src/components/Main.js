import { Component } from "react";
import BucketItems from "./BucketItems";
import Spinner from "react-bootstrap/Spinner";

import "./Main.css";
import Search from "./UI/Search";
import { getCountries } from "../helpers/DataHelpers";
import { Container } from "react-bootstrap";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      countrySearch: "",
      listOfCountries: [],
      listToDisplay: [],
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

  randomCountryGenerator = (data) => {
    const randomNumbers = [
      // spreads the set of random numbers function to an array to loop over
      ...this.randomNumbersGenerator(20, data.length - 1),
    ];
    const randomCountries = [];
    // loops over the results received from API and pushed only those random number entries into an array
    for (let i = 0; i < randomNumbers.length; i++) {
      randomCountries.push(data[randomNumbers[i]]);
    }
    this.setState({
      listToDisplay: randomCountries,
    });
  };

  //Get a listing of countries to put into state
  componentDidMount = async () => {
    this.setState({ isLoading: true });
    // const { getIdTokenClaims, user } = this.props.auth0;
    // let tokenClaims = await getIdTokenClaims();
    // const jwt = tokenClaims.__raw;
    // const config = {
    //   headers: { Authorization: `Bearer ${jwt}` },
    // };
    try {
      const results = await getCountries();
      // places the entire list of all countries into state
      this.setState({
        listOfCountries: results,
      });
      this.randomCountryGenerator(results);
    } catch (err) {
      console.log(err);
    }
    this.setState({ isLoading: false });
  };

  // method to update the country to search for state. This method is passed to the Search component as onChange.
  countrySearchChangeHandler = (event) => {
    this.setState({ countrySearch: event.target.value });
  };

  // method to perform the search on country entered. Method passed to Search component as onClick.
  countrySearchClickHander = (event) => {
    event.preventDefault();
    // check if state variable countrySearch is blank, if so, run randomCountryGenerator method to get new list of
    // random random countries
    if (!this.state.countrySearch) {
      this.randomCountryGenerator(this.state.listOfCountries);
      return;
    }
    // uses the state variable countrySearch to filter over the entire list of countries then takes the country object
    // converts the country name and the countrySearch to lowercase and checks to see if the country name includes the value
    // of countrySearch, if it does, returns that country to the array of objects.
    const searchedCountry = this.state.listOfCountries.filter((country) => {
      if (
        country.name
          .toLowerCase()
          .includes(this.state.countrySearch.toLowerCase())
      ) {
        return country;
      } else {
        return "";
      }
    });
    // sets the listToDisplay array of country objects to be equal to the searchedCountry array of country objects
    // As this udpates state, a render is automatically done.
    // clears the countrySearch field in state which then clears it in the search component also.
    this.setState({
      listToDisplay: searchedCountry,
      countrySearch: "",
    });
  };

  render() {
    return (
      <>
        <Container>
          <h2 style={{
            color: "368f8b",
            paddingTop: "20px",
            paddingLeft: "auto",
            paddingRight: "auto",
          }}>
            Welcome to Travel Buckaroo! Select or search for a country below to see more information on your travel needs
          </h2>
        </Container>
        <Search
          countrySearch={this.state.countrySearch}
          onChange={this.countrySearchChangeHandler}
          onClick={this.countrySearchClickHander}
        />
        {this.state.listToDisplay.length ? (
          <BucketItems listToDisplay={this.state.listToDisplay} />
        ) : (
          <Spinner animation="grow" variant="info" />
        )}
      </>
    );
  }
}

export default Main;
