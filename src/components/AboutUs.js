import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import Clarissa from "../img/Clarissa.jpg";
import Heather from "../img/Heather.jpg";
import Mark from "../img/Mark.jpg";
import Will from "../img/Will.jpg";

import "../components/AboutUs.css";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <h1 className="header">Meet the Team</h1>
        <Container className="cardContainer" style={{ borderRadius: 10 }}>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card className="Heather">
                <Card.Img
                  src={Heather}
                />
                <Card.Body>
                  <Card.Title>Heather Bisgaard</Card.Title>
                  <Card.Subtitle>Full Stack Software Engineer</Card.Subtitle>
                  <Card.Text>What's on my bucket? New Zealand</Card.Text>
                  <Card.Text>
                    Description 
                  </Card.Text>
                  <Card.Link href="https://www.linkedin.com/in/heather-bisgaard/">
                    LinkedIn
                  </Card.Link>
                  <Card.Link href="https://github.com/vbchomp">Github</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="Clarissa">
                <Card.Img
                  src={Clarissa}
                />
                <Card.Body>
                  <Card.Title>Clarissa Pamonicutt</Card.Title>
                  <Card.Subtitle>Full-Stack Developer</Card.Subtitle>
                  <Card.Text>What's on my bucket? Japan</Card.Text>
                  <Card.Text>
                    Description 
                  </Card.Text>
                  <Card.Link href="https://www.linkedin.com/in/cpamonicutt/">
                    LinkedIn
                  </Card.Link>
                  <Card.Link href="https://github.com/yoshiontheloose">
                    Github
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card className="Mark">
                <Card.Img
                  src={Mark}
                />
                <Card.Body>
                  <Card.Title>Mark Thanadabouth</Card.Title>
                  <Card.Subtitle>Full-Stack Developer</Card.Subtitle>
                  <Card.Text>
                    What's on my bucket? Italy
                  </Card.Text>
                  <Card.Text>
                    Mark is currently a software development student learning to code. He is an Army veteran who is originally from Chicago. Right after the military, he received a dual degree in Electronic Music Production and Digital Audio engineering. He then transitioned into the fitness field and became a personal trainer for a couple of years. After his time as a personal trainer, he decided to take a leap into the software development world. He decided to transition into software development because he likes to solve problems and work with teams. He is highly adaptable and willing to learn whatever it takes to reach his goal. He chose to learn this skill so he can be competitive in the tech industry. His passion for tech is extremely vast; tech is all around and is growing day by day with no plans of stopping. He hopes that one day, his skills can be a part of that movement.
                  </Card.Text>
                  <Card.Link href="https://www.linkedin.com/in/markjackson28/">
                    LinkedIn
                  </Card.Link>
                  <Card.Link href="https://github.com/markjackson28">
                    Github
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
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
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AboutUs;
