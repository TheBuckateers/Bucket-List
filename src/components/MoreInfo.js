import { Component } from "react";
import Container from "react-bootstrap/Container";
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
// import Row from "react-bootstrap/Row";

// import BucketItem from "./BucketItem";
import Clarissa from "../img/Clarissa.jpg";
import Mark from "../img/Mark.jpg";
import Heather from "../img/Heather.jpg";


class MoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      showModal: false,
    }
  }

  // shows the notes modal
  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  }

  // closes the notes modal
  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  }



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
          {/* Icons for overlays or  modals*/}
          <h2>This is where the country details icons are located</h2>
        </Container>
        {/* Notes Modal*/}
        <Card>
          <Card.Header as="h5">Notes</Card.Header>
          <Card.Body>
            <Card.Text>
            {this.state.notes}
            </Card.Text>
            <Button
              variant="info"
              onClick={this.handleShowModal}
            >
              Add Note
            </Button>
            <Button
              variant="secondary"
            // onClick={() => this.handleUpdate()}
            >
              Edit Note
            </Button>
            <Button
              variant="danger"
            // onClick={() => this.handleDelete()}
            >
              Delete Note
            </Button>
          </Card.Body>
        </Card>
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
            // onSubmit={this.props.addNote}
            >
              <Form.Group controlId="notesForm.ConrolTestarea1">
                <Form.Label>Notes about your country bucket!</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  value={this.state.notes}
                />
              </Form.Group>
              <Button type="submit">Add Notes</Button>
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
              
            </Modal.Footer> */}
        </Modal>

      </>
    );
  }
}

export default MoreInfo;
