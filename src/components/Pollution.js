import { Component } from "react";
import { Container, Card, Image } from "react-bootstrap";
import aqi from "../img/aqi-index.jpg";

class Pollution extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     countryPollution: [],
  //   }
  // }

  render() {
    // console.log(this.props.countryPollution);
    return (
      <Container>
        <Card>
          <Card.Header as="h5">Pollution</Card.Header>
          <Card.Body>
            <Card.Text>
              <h2>
                {this.props.country.name} Current AQI: {this.props.countryPollution.aqi}
              </h2>
            </Card.Text>
            <Image
              src={aqi}
              alt="air quality index"
              description="https://www.cleanairpartners.net/aqi"
              fluid
            />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Pollution;
