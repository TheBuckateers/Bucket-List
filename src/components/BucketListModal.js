import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const SERVER = process.env.REACT_APP_BACKEND_SERVER;

class BucketListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buckets: [],
    }
  }

  // handles the submit of the buckets to the bucket list
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state);
    this.props.closeModal();
  }

  // handles updates to the buckets on the db
    handleUpdate = async (bucket) => {
    try {
      let response = await axios.put(`${SERVER}/bucketList/${bucket.alpha2Code}`, bucket);
      console.log('response:', response.data);
      let updatingBuckets = this.state.buckets.map(stateBucket => {
        if (stateBucket.alpha2Code === bucket.alpha2Code) {
          return bucket;
        } else {
          return stateBucket;
        }
      });
      console.log('updatingBuckets:', updatingBuckets);
      this.setState({
        buckets: updatingBuckets,
      })
    }
    catch (err) {
      console.log('updateError:', err);
    }
  }

  // handles deletes on the buckets to the db
  handleDelete = async (alpha2Code) => {
    try {
      let response = await axios.delete(`${SERVER}/bucketList/${alpha2Code}`);
      console.log('response:', response.data);
      let remainingBuckets = this.state.buckets.filter(bucket => bucket.alpha2Code !== alpha2Code);
      console.log('remainingBuckets:', remainingBuckets);
      this.setState({
        buckets: remainingBuckets,
      })
    }
    catch (err) {
      console.log('deleteErr:', err);
    }
  }



  render() {

    const { user } = this.props.auth0;
    
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
            <h2>
              {this.props.country.name}
            </h2>

            <Form
              onSubmit={this.handleSubmit}
            >
              <Form.Group controlId="bucketsForm.ConrolTestarea1">
                <Form.Label>Notes about your country bucket!</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  placeholder="Notes"
                // on updtae will need this line below
                // value={this.state.buckets}
                />
              </Form.Group>
              <h2>{user.email}</h2>
              <Button
                variant="info"
                type="submit"
              >
                Add Note
              </Button>
              <Button
                variant="secondary"
                onClick={() => this.handleUpdate()}
              >
                Edit Note
              </Button>
              <Button
                variant="danger"
                onClick={() => this.handleDelete()}
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

export default withAuth0(BucketListModal);
