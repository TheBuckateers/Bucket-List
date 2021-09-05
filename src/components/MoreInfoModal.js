import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class MoreInfoModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      notes: [],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state);
    this.props.closeModal();
  }

  render() {

    return (
      <>
        <Modal
          show={this.state.showModal}
          onHide={this.props.handleCloseModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={this.handleSubmit}
            >
              <Form.Group controlId="notesForm.ConrolTestarea1">
                <Form.Label>Notes about your country bucket!</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  placeholder="Notes"
                  // on updtae will need this line below
                  // value={this.state.notes}
                />
              </Form.Group>
              <Button
                type="submit"
              >
                Add Notes
              </Button>
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
              
            </Modal.Footer> */}
        </Modal>
      </>

    );
  }
}

export default MoreInfoModal;
