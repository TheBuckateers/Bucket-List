import { Component } from "react";
import { Accordion, Card, Container } from "react-bootstrap";

class Weather extends Component {
  render() {
    // console.log('icon', this.props.countryWeather.ic);
    return (
      <>
        <Container>
          {/* remove defaultActiveKey="0" for closed Accordian */}
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header as="h5">
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                  Weather
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <h3>{this.props.country.name} Forecast</h3>
                 {/*Temp in Fahrenheit  */}
                <h4>Temperature: {this.props.countryWeather.tp * 1.5 + 32}&#8457;</h4> 
                {/* Weather Icon */}
                {/* <h4>{this.props.countryWeather.ic}</h4> */}
                {/* Humidity */}
                <h4>Humidity: {this.props.countryWeather.hu}%</h4> 
                {/* Windspeed */}
                <h4>Wind Speed: {this.props.countryWeather.ws}(m/s)</h4> 
                {/* <h4>Wind Speed: {this.props.countryAdvisory.message}(m/s)</h4>  */}
                {/* Wind direction */}
                <h4>Wind Direction: {this.props.countryWeather.wd} as an angle of 360° (N=0, E=90, S=180, W=270)</h4>
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
