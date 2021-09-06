import { Component } from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

import MealCard from "./MealCard";

class MealsDisplay extends Component {
  render() {
    return (
      <Container className="mt-3">
        <Accordion>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              style={{ cursor: "pointer" }}
              eventKey="0"
            >
              <h3>
                Meal Recipes from {this.props.countryName} -{" "}
                {this.props.meals.length}
              </h3>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <CardColumns>
                  {this.props.meals.map((meal) => (
                    <MealCard key={meal.idMeal} meal={meal} />
                  ))}
                </CardColumns>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  }
}

export default MealsDisplay;
