import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import "./BucketItem.css";

class BucketItem extends Component {
  render() {
    return (
      <Col xs={12} md={6} lg={4}>
        <Card className="mb-3">
          <Card.Img variant="top" src={this.props.country.flag} height="200" />
          <Card.Body>
            <Card.Title>{this.props.country.name}</Card.Title>
            <Card.Text className="scroll">
              <ListGroup className="list-group-flush">
                <ListGroupItem className="border-0 p-0">
                  Capital: {this.props.country.capital}
                </ListGroupItem>
                <ListGroupItem className="border-0 p-0">
                  Population: {this.props.country.population.toLocaleString()}
                </ListGroupItem>
                <ListGroupItem className="border-0 p-0">
                  Region: {this.props.country.region}
                </ListGroupItem>
                <ListGroupItem className="border-0 p-0">
                  Subregion: {this.props.country.subregion}
                </ListGroupItem>
                <ListGroupItem className="border-0 p-0">
                  Time Zone: {this.props.country.timezones + " "}
                </ListGroupItem>
                <ListGroupItem className="border-0 p-0">
                  Top Domain: {this.props.country.topLevelDomain}
                </ListGroupItem>
              </ListGroup>
              {/* <ul>
                <li>Capital: {this.props.country.capital}</li>
                <li>
                  Population: {this.props.country.population.toLocaleString()}
                </li>
                <li>Region: {this.props.country.region}</li>
                <li>Subregion: {this.props.country.subregion}</li>
                <li>Time Zone: {this.props.country.timezone}</li>
                <li>Top Domain: {this.props.country.topLevelDomain}</li>
              </ul> */}
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