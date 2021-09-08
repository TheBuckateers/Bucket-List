import { Component } from "react";
import { Container, Card } from "react-bootstrap";

class Advisory extends Component {
  render() {
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
      </Container>
    )
  }
}

export default Advisory;
