import React from "react";
import { Card, Container } from "react-bootstrap";
import Clarissa from "../img/Clarissa.jpg";
import Heather from "../img/Heather.jpg";
import Mark from "../img/Mark.jpg";
import Will from "../img/Will.jpg";

import "../components/AboutUs.css";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Container className="cardContainer">

          <Card className="Heather">
            <Card.Img
              src={Heather}
            />
            <Card.Body>
              <Card.Title>Heather Bisgaard</Card.Title>
              <Card.Subtitle>Full Stack Software Engineer</Card.Subtitle>
              <Card.Text>What's on my bucket? Iceland</Card.Text>
              <Card.Link href="https://www.linkedin.com/in/heather-bisgaard/">
                LinkedIn
              </Card.Link>
              <Card.Link href="https://github.com/vbchomp">Github</Card.Link>
            </Card.Body>
          </Card>

          <Card className="Clarissa">
            <Card.Img
              src={Clarissa}
            />
            <Card.Body>
              <Card.Title>Clarissa Pamonicutt</Card.Title>
              <Card.Subtitle>Full-Stack Developer</Card.Subtitle>
              <Card.Text>What's on my bucket? Japan</Card.Text>
              <Card.Link href="https://www.linkedin.com/in/cpamonicutt/">
                LinkedIn
              </Card.Link>
              <Card.Link href="https://github.com/yoshiontheloose">
                Github
              </Card.Link>
            </Card.Body>
          </Card>

          <Card className="Mark">
            <Card.Img
              src={Mark}
            />
            <Card.Body>
              <Card.Title>Mark Thanadabouth</Card.Title>
              <Card.Subtitle>Full-Stack Developer</Card.Subtitle>
              <Card.Text>What's on my bucket? Italy</Card.Text>
              <Card.Link href="https://www.linkedin.com/in/markjackson28/">
                LinkedIn
              </Card.Link>
              <Card.Link href="https://github.com/markjackson28">
                Github
              </Card.Link>
            </Card.Body>
          </Card>

          <Card className="Willem">

            <Card.Img
              src={Will}
            />
            <Card.Body>
              <Card.Title>Willem Jacobs</Card.Title>
              <Card.Subtitle>Software Developer</Card.Subtitle>
              <Card.Text>What's on my bucket? Iceland</Card.Text>
              <Card.Link href="https://www.linkedin.com/in/willemajacobs/">
                LinkedIn
              </Card.Link>
              <Card.Link href="https://github.com/Willem-Jacobs">
                Github
              </Card.Link>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default AboutUs;
