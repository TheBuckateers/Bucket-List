import React from "react";
import { Figure, Container } from "react-bootstrap";



class AboutMe extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="src/img/clarissa.jpg"
            />
            <Figure.Caption>
              name
            </Figure.Caption>
            <Figure.Caption>
              Description
              What's on my bucket?
            </Figure.Caption>
            <Figure.Caption>
              LinkedIn
              Github
            </Figure.Caption>
          </Figure>
        </Container>
      </>
    )
  }
}

export default (AboutMe);