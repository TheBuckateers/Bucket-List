import { Component } from "react";
import { withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import BucketItem from "./BucketItem";

class BucketItems extends Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.listToDisplay.map((country, index) => {
            return <BucketItem key={index} country={country} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default withRouter(BucketItems);
