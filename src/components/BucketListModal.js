import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BucketListModal extends React.Component {
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
          show={this.props.showModal}
          onHide={this.props.closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Bucket List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* {this.props.country} */}
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
              variant="info"
              type="submit"
              onClick={this.handleSubmit}
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
              {/* <Button
                type="submit"
              >
                Add Notes
              </Button> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
              
            </Modal.Footer>
        </Modal>
      </>

    );
  }
}

export default BucketListModal;
