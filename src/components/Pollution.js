import { Component } from "react";
import { Container, Card, Image, Accordion } from "react-bootstrap";
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
      <Container className="mt-3 mb-3">
        <Accordion>
          <Card>
            <Card.Header as="h5">
              <Accordion.Toggle 
              as={Card.Header} 
              variant="link" 
              style={{ cursor: "pointer" }}
              eventKey="0">
                Pollution
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Card.Text>

                  {this.props.country.name} Current AQI: {this.props.countryPollution.aqius}

                </Card.Text>
                <Image
                  src={aqi}
                  alt="air quality index"
                  description="https://www.cleanairpartners.net/aqi"
                  fluid
                />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  }
}

export default Pollution;
