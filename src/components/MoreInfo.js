import { Component } from "react";
// import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel'
// import Row from "react-bootstrap/Row";

// import BucketItem from "./BucketItem";
import clarissa from "../img/clarissa.jpg";
import mark from "../img/Mark.jpg";
import heather from "../img/Heather.jpg";

class MoreInfo extends Component {
  render() {
    return (
      <>
        <h3>Hello!</h3>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={clarissa}
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
              src={mark}
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
              src={heather}
              alt="Woman on the beach in front of cruise ship"
            />
            <Carousel.Caption>
              <h3>Heather</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default MoreInfo;
