import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./BucketItem.css";

class BucketItem extends Component {
  render() {
    return (
      <Col xs={12} md={6} lg={4}>
        <Card className="mb-3">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Country Name</Card.Title>
            <Card.Text className="scroll">
              Some text related to items about this country can be included
              here. Various different things. What do we want? I am not sure
              lets see what we can find I guess. Some text related to items
              about this country can be included here. Various different things.
              What do we want? I am not sure lets see what we can find I guess.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="light" size="sm">
              More
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default BucketItem;
