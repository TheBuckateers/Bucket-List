import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import "./BucketItem.css";
import { getAdvisoryByCode, getCountryEnviro } from "../helpers/DataHelpers";

class BucketItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryAdvisory: {},
      countryPollution: {},
      countryWeather: {},
    };
  }

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
    // Series of logs just to ensure data is working and for review. To comment out or remove from code before deploy
    console.log("Country: ", country);
    console.log("Advisory ", this.state.countryAdvisory);
    // console.log("Enviro Data: ", enviro);
    console.log("Pollution: ", this.state.countryPollution);
    console.log("Weather: ", this.state.countryWeather);
  };

  render() {
    return (
      <Col xs={12} md={6} lg={4}>
        <Card className="mb-3" style={{ height: "32rem" }}>
          <Card.Img variant="top" src={this.props.country.flag} height="200" />
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
