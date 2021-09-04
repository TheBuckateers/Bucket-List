import { Component } from "react";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel'

// import Row from "react-bootstrap/Row";

// import BucketItem from "./BucketItem";
import Clarissa from "../img/Clarissa.jpg";
import Mark from "../img/Mark.jpg";
import Heather from "../img/Heather.jpg";

class MoreInfo extends Component {
  render() {
    return (
      <>
        {console.log("More: ", this.props)}
        <h3>Hello!</h3>
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Clarissa}
                alt="Woman on the beach in front of cruise ship"
              />
              <Carousel.Caption>
                <h3>Clarissa</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Mark}
                alt="Woman on the beach in front of cruise ship"
              />
              <Carousel.Caption>
                <h3>Mark</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Heather}
                alt="Woman on the beach in front of cruise ship"
              />
              <Carousel.Caption>
                <h3>Heather</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <Container>
          {/* Icons for overlays or  */}
        </Container>
        <Container>

        </Container>
      </>
    );
  }
}

export default MoreInfo;
