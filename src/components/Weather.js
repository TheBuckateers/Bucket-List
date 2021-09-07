import { Component } from "react";
import { Accordion, Card, Container } from "react-bootstrap";

class Weather extends Component {
  render() {
    // console.log('icon', this.props.countryWeather.ic);
    return (
      <>
        <Container className="mt-3 mb-5">
          {/* remove defaultActiveKey="0" for closed Accordian */}
          <Accordion >
            <Card>
              <Card.Header as="h5">
                <Accordion.Toggle 
                as={Card.Header} 
                variant="link" 
                style={{ cursor: "pointer" }}
                eventKey="0">
                  Weather
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <h4>{this.props.country.name} Forecast</h4>
                  <Card.Text>
                    {/*Temp in Fahrenheit  */}
                    Temperature: {this.props.countryWeather.tp * 1.5 + 32}&#8457;
                  </Card.Text>
                  <Card.Text>
                    {/* Humidity */}
                    Humidity: {this.props.countryWeather.hu}%
                  </Card.Text>
                  <Card.Text>
                    {/* Windspeed */}
                    Wind Speed: {this.props.countryWeather.ws}(m/s)
                  </Card.Text>
                  <Card.Text>
                    {/* Wind direction */}
                    Wind Direction: {this.props.countryWeather.wd} as an angle of 360° (N=0, E=90, S=180, W=270)
                  </Card.Text>
                  {/* Weather Icon */}
                  {/* <h4>{this.props.countryWeather.ic}</h4> */}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </>
    );
  }
}

export default Weather;
