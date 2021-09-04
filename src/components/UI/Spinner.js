import { Component } from "react";
import Container from "react-bootstrap/Container";
import Spin from "react-bootstrap/Spinner";

class Spinner extends Component {
  render() {
    return (
      <Container>
        <Spin animation="grow" variant="info" />
      </Container>
    );
  }
}

export default Spinner;
