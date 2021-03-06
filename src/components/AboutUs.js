import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import Clarissa from "../img/clarissa.jpg";
import Heather from "../img/Heather.jpg";
import Mark from "../img/Mark.jpg";
import Will from "../img/will.jpg";

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
                <Card.Img src={Heather} />
                <Card.Body>
                  <Card.Title>Heather Bisgaard</Card.Title>
                  <Card.Subtitle>Full Stack Software Engineer</Card.Subtitle>
                  <Card.Text>What's on my bucket? New Zealand</Card.Text>

                  <Card.Text>
                  I am a Software Engineer student, Database Administrator and an Army veteran who started off life as an Army Brat and called wherever we currently lived 'home'. Moving to different countries for the military and having the opportunity to travel to even more created a love for adventure and travel that has continued to this day. My latest flight leaves in about 4 hours!  
                  Since this travel bug has taken me to some out of the way places, I decided to transition into the world of software development when I saw the world could still function when people were spread out and tucked away in their homes. They just needed access to internet. It is not quite there yet, but companies are continuing to make advancements in developing the technology needed to get internet access to all corners of the world. This would allow the willing, and curious, access to education, healthcare, and maybe a friendly face on video chat. It would be exciting to be a part of offering this technology to the world. It might even allow others to start traveling, too.  
                  </Card.Text>
                  <Card.Link href="https://www.linkedin.com/in/heather-bisgaard/">
                    LinkedIn
                  </Card.Link>
                  <Card.Link href="https://github.com/vbchomp">
                    Github
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="Clarissa">
                <Card.Img src={Clarissa} />
                <Card.Body>
                  <Card.Title>Clarissa Pamonicutt</Card.Title>
                  <Card.Subtitle>Full-Stack Developer</Card.Subtitle>
                  <Card.Text>What's on my bucket? Japan</Card.Text>
                  <Card.Text>
                    Clarissa is currently a student studying software development.
                    She previously worked in the telecommunications industry as an inventory manager, where she was responsible for organizing and overseeing the supply chain. Her innate ability to recognize logical structures for organization and create efficient solutions, enhances usability for the company which translates into a better product for customers.
                    Identifying problems and their root cause, as well as finding solutions to prevent them in the future has been one of her greatest strengths not only in past work experience, but in life as well. As a software developer, this has helped her to debug code and find errors in applications. She has an obsessive attention to detail and a love for puzzle solving that drives her desire to learn more about building flawless applications. She grew up as a competitive gamer and is looking for an opportunity to turn her passion for technology into a career where she can build products that people from all backgrounds can fall in love with.
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
                <Card.Img src={Mark} />
                <Card.Body>
                  <Card.Title>Mark Thanadabouth</Card.Title>
                  <Card.Subtitle>Full-Stack Developer</Card.Subtitle>
                  <Card.Text>What's on my bucket? Italy</Card.Text>
                  <Card.Text>
                    Mark is currently a software development student learning to
                    code. He is an Army veteran who is originally from Chicago.
                    Right after the military, he received a dual degree in
                    Electronic Music Production and Digital Audio engineering.
                    He then transitioned into the fitness field and became a
                    personal trainer for a couple of years. After his time as a
                    personal trainer, he decided to take a leap into the
                    software development world. He decided to transition into
                    software development because he likes to solve problems and
                    work with teams. He is highly adaptable and willing to learn
                    whatever it takes to reach his goal. He chose to learn this
                    skill so he can be competitive in the tech industry. His
                    passion for tech is extremely vast; tech is all around and
                    is growing day by day with no plans of stopping. He hopes
                    that one day, his skills can be a part of that movement.
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
                <Card.Img src={Will} />
                <Card.Body>
                  <Card.Title>Willem Jacobs</Card.Title>
                  <Card.Subtitle>Software Developer</Card.Subtitle>
                  <Card.Text>What's on my bucket? Iceland</Card.Text>
                  <Card.Text>
                    <p>
                      Over my 30 years of employment, I have worked in various
                      areas of software development from coder in various
                      languages, testing, design, full project management and IT
                      manager of department. I left the IT field about 15 years
                      ago and moved to upper/executive management.
                    </p>
                    <p>
                      I have a passion for software development as I enjoy being
                      challenged by the numerous problem solving needs, logical
                      thinking requirements, team work collaboration and, most
                      of all, the satisfaction of the client receiving their
                      final product.
                    </p>
                    <p>
                      I would like to blend my years of experience in the cargo
                      logistics industry and port management into software
                      development to streamline the vast amount of data and
                      processes that are used for the movement of commerce world
                      wide.
                    </p>
                  </Card.Text>
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
