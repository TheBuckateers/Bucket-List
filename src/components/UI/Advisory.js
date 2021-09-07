import { Component } from "react";
import { Card } from "react-bootstrap";

class Advisory extends Component {
  render() {
    console.log('ADVISORY', this.props.countryAdvisory.advisory);
    return (
      <Card>
        <Card.Header as="h5">Travel Advisory</Card.Header>
          {this.props.countryAdvisory.advisory &&
        <Card.Body>
            <Card.Text as="h3">
              {this.props.countryAdvisory.advisory.message}
            </Card.Text>
          <Card.Text>
            Updated on: {this.props.countryAdvisory.advisory.updated}
          </Card.Text>
        </Card.Body>
      }
      </Card>
    )
  }
}

export default Advisory;
