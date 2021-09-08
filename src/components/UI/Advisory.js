import { Component } from "react";
import { Card, Accordion, Container } from "react-bootstrap";

class Advisory extends Component {
  render() {
    // console.log('ADVISORY', this.props.countryAdvisory.advisory);
    return (
      <Container>
        <Card>
          <Card.Header as="h5">Travel Advisory</Card.Header>
          <Card.Body>
            <Card.Text>
              {/* {this.props.countryAdvisory.advisory.message} */}
            </Card.Text>
            <Card.Text>
              {/* Updated on: {this.props.countryAdvisory.advisory.updated} */}
            </Card.Text>
          </Card.Body>
        </Card>

      <Container className="mt-3 mb-3">
        <Accordion >
          <Card>
            <Card.Header as="h5">
              <Accordion.Toggle 
              as={Card.Header} 
              variant="link" 
              style={{ cursor: "pointer" }}
              eventKey="0">
                Travel Advisory
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Card.Text>
                  {this.props.countryAdvisory.advisory && this.props.countryAdvisory.advisory.message}
                </Card.Text>
                <Card.Text>
                  Updated on: {this.props.countryAdvisory.advisory && this.props.countryAdvisory.advisory.updated}
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    )
  }
}

export default Advisory;
