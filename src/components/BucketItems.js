import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import BucketItem from "./BucketItem";

class BucketItems extends Component {
  render() {
    return (
      <Container>
        <Row>
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
          <BucketItem />
        </Row>
      </Container>
    );
  }
}

export default BucketItems;
