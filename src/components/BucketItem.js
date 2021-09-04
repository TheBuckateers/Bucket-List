import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import "./BucketItem.css";
import {
  getAdvisoryByCode,
  getCountryEnviro,
  getMealsByArea,
  getCountryPics,
} from "../helpers/DataHelpers";

class BucketItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryAdvisory: {},
      countryPollution: {},
      countryWeather: {},
      countryMeals: {},
      countryPics: {},
    };
  }

  // The section in here are just to test and how to get the data from backend etc. These can be moved and used in other areas. Just ensure they are imported. See the import statement above. (THIS IS ONLY A TEST AREA)
  moreClickHandler = async () => {
    const { country } = this.props;
    // Stores the country code to a const to use in other parts of function
    try {
      const countryCode = country.alpha2Code;
      // calls helper function to get advisory for country by code
      const advisory = await getAdvisoryByCode(countryCode);
      this.setState({ countryAdvisory: advisory[countryCode] });
    } catch (err) {
      console.log("Advisory: ", err.message);
    }

    // calls helper function to get meals available for this country region. Comes from the country object property of 'demonym'
    try {
      const region = country.demonym;
      // calls helper function to get list of all meals by region of country
      const regionMeals = await getMealsByArea(region);
      this.setState({ countryMeals: regionMeals });
    } catch (err) {
      console.log("Meals: ", err.message);
    }

    // calls helper function to get pollution/weather info
    // result has a current object which contains a pollution and a weather object which each contains the data related to that subject. ie. <variable>.current.weather or .pollution
    try {
      const enviro = await getCountryEnviro(
        country.latlng[0],
        country.latlng[1]
      );
      // Stores advisory to state - countryAdvisory
      // Stores pollution to state - countryPollution
      // Stores weather to state - countryWeather
      this.setState({
        countryPollution: enviro.current.pollution,
        countryWeather: enviro.current.weather,
      });
    } catch (err) {
      console.log("Environment data: ", err.message);
    }

    //calls helper to get pics for the country selected
    try {
      const searchCountry = encodeURI(country.name);
      const countryPics = await getCountryPics(searchCountry);
      this.setState({ countryPics: countryPics });
    } catch (err) {
      console.log("Pics Error: ", err.message);
    }

    // Series of logs just to ensure data is working and for review. To comment out or remove from code before deploy
    console.log("Country: ", country);
    console.log("Advisory ", this.state.countryAdvisory);
    console.log("Pollution: ", this.state.countryPollution);
    console.log("Weather: ", this.state.countryWeather);
    console.log("Meals: ", this.state.countryMeals);
    console.log("Pics: ", this.state.countryPics);
  };

  render() {
    return (
      <Col xs={12} md={6} lg={4}>
        <Card className="mb-3" style={{ height: "32rem" }}>
          <Card.Img
            style={{ border: "1px solid black" }}
            variant="top"
            src={this.props.country.flag}
            height="200"
          />
          <Card.Body>
            <Card.Title>{this.props.country.name}</Card.Title>
            <Card.Text className="scroll">
              <ListGroup className="list-group-flush">
                <ListGroupItem className="border-0 p-0">
                  Capital: {this.props.country.capital}
                </ListGroupItem>
                {/* <ListGroupItem className="border-0 p-0">
                  Population: {this.props.country.population.toLocaleString()}
                </ListGroupItem> */}
                <ListGroupItem className="border-0 p-0">
                  Region: {this.props.country.region}
                </ListGroupItem>
                {/* <ListGroupItem className="border-0 p-0">
                  Subregion: {this.props.country.subregion}
                </ListGroupItem> */}
                <ListGroupItem className="border-0 p-0">
                  Time Zone: {this.props.country.timezones + " "}
                </ListGroupItem>
                <ListGroupItem className="border-0 p-0">
                  Top Domain: {this.props.country.topLevelDomain}
                </ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="light" size="sm" onClick={this.moreClickHandler}>
              More
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default BucketItem;
