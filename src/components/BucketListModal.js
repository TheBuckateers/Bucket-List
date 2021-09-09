import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { withAuth0 } from "@auth0/auth0-react";


class BucketListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buckets: '',
    };
  }

  // handles the submit of the buckets to the bucket list
  handleSubmit = (e) => {
    e.preventDefault();
    let country = this.props.country;
    let countryCode = this.props.country.alpha2Code;
    let email = this.props.auth0.user.email;
    let note = this.state.buckets;
    this.props.handleAdd({ country, countryCode, email, note });
    this.props.closeModal();
  };

  

  render() {
    // const { user } = this.props.auth0;

    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Bucket List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{this.props.country.name}</h2>

            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="bucketsForm.ConrolTestarea1">
                <Form.Label>Notes about your country bucket!</Form.Label>
                <Form.Control 
                  as="textarea"
                  rows={10}
                  placeholder="Notes"
                  onChange={(e)=>this.setState({buckets: e.target.value})}
                />
              </Form.Group>
              {/* <h2>{user.email}</h2> */}
              <Button
                variant="info"
                type="submit"
              >
                Add Country
              </Button>
              
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withAuth0(BucketListModal);
