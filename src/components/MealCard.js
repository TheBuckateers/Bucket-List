import { Component } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { getMealById } from "../helpers/DataHelpers";

import Meal from "./Meal";

class Meals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeData: "",
      showModal: false,
    };
  }

  getMealHandler = async (id) => {
    try {
      // console.log("ID: ", id);
      const result = await getMealById(id);
      this.setState({ recipeData: result.meals[0] });
    } catch (err) {
      console.log(err.message);
    }
    // console.log("Recipe: ", this.state.recipeData);
    this.recipeModalHandler();
  };

  recipeModalHandler = () => {
    // console.log("In show recipe modal", !this.state.showModal);
    this.setState((prevState) => {
      return { showModal: !prevState.showModal };
    });
  };

  render() {
    return (
      <>
        <Modal show={this.state.showModal} onHide={this.recipeModalHandler}>
          <Meal
            handleClose={this.recipeModalHandler}
            recipe={this.state.recipeData}
          />
        </Modal>
        <Card
          style={{ cursor: "pointer" }}
          className="mb-2"
          onClick={() => this.getMealHandler(this.props.meal.idMeal)}
        >
          <Card.Img
            variant="top"
            src={this.props.meal.strMealThumb}
            style={{ objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title>{this.props.meal.strMeal}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Meals;
