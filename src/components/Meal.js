import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class Meal extends Component {
  buildRecipeDisplay = (recipe) => {
    const ingredientList = [];
    let i = 1;
    let myKey1 = "strIngredient";
    let myKey2 = "strMeasure";
    while (recipe[myKey1 + i] !== "") {
      ingredientList.push(`${recipe[myKey2 + i]} ${recipe[myKey1 + i]}`);
      i++;
    }
    const ingredientDisplay = ingredientList.map((item, idx) => (
      <li key={idx}>{item}</li>
    ));
    return ingredientDisplay;
  };

  render() {
    // .replace(/(.*?\. )/g, "$&\n")
    const { recipe } = this.props;
    const ingredientDisplay = this.buildRecipeDisplay(recipe);
    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">
            {recipe.strMeal} - {recipe.strArea}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong className="text-info">Category:</strong>{" "}
            {recipe.strCategory}
          </p>
          <h3 className="text-info">Ingredients</h3>
          <ul>{ingredientDisplay}</ul>
          <h3 className="text-info">Instructions</h3>
          <p>{recipe.strInstructions}</p>
          <p>
            <strong className="text-info">Tag:</strong>{" "}
            {recipe.strTags !== null ? recipe.strTags : "None"}
          </p>
          <h3 className="text-info">Links</h3>
          <a
            style={{ color: "black" }}
            href={recipe.strSource}
            target="_blank"
            rel="noreferrer"
          >
            Recipe Source Link
          </a>
          <br />
          <a
            style={{ color: "black" }}
            href={recipe.strYoutube}
            target="_blank"
            rel="noreferrer"
          >
            Video Link on You Tube
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>{" "}
      </>
    );
  }
}

export default Meal;
