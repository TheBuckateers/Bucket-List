import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withAuth0 } from "@auth0/auth0-react";


class UpdateNoteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.selectedItem,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', this.state.note);
    this.props.handleUpdate(this.state.note);
    this.props.handleCloseModal();
  }

  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Your Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <h2>{this.props.country.name}</h2> */}
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="bucketsForm.ConrolTestarea1">
                <Form.Label>Notes about your country bucket!</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={10}
                  // value={this.props.selectedItem.note}
                  placeholder={this.props.selectedItem ? this.props.selectedItem : 'No Entry'}
                  onChange={(e) => this.setState({
                    note: e.target.value
                  })}
                />
              </Form.Group>
              <Button
                variant="info"
                type="submit"
              >
                Save
              </Button>
            </Form>
            {this.props.selectedItem ? <h1>{this.props.selectedItem._id}</h1> : ''}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default withAuth0(UpdateNoteModal);
