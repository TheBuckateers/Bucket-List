import React from "react";
import {
  Container,
  Row,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import UpdateNoteModal from "./UpdateNoteModal";

import "./BucketList.css";

const SERVER = process.env.REACT_APP_BACKEND_SERVER;

class BucketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bucketList: [],
      showModal: false,
      selectedItem: '',
    };
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;
    let email = user.email;
    console.log(user, this.props.auth0);
    try {
      const results = await axios.get(`${SERVER}/bucketList?email=${email}`);
      this.setState({
        bucketList: results.data,
      });
    } catch (err) {
      console.log("Get buckets data", err.message);
    }
  };

  // handles updates to the buckets on the db
  // Waiting for V 1.2
  // handleUpdate = async (bucket) => {
  //   // let email = this.props.auth0.user.email;
  //   // let note = this.state.buckets.notes;
  //   try {
  //     // let countryCode = this.props.country.alpha2Code;
  //     let response = await axios.put(
  //       `${SERVER}/bucketList/${bucket._id}`,
  //       bucket
  //     );
  //     console.log("response:", response.data);
  //     let updatingBuckets = this.state.buckets.map((stateBucket) => {
  //       if (stateBucket._id === bucket._id) {
  //         return bucket;
  //       } else {
  //         return stateBucket;
  //       }
  //     });
  //     this.setState({
  //       buckets: updatingBuckets,
  //     });
  //   } catch (err) {
  //     console.log("updateError:", err);
  //   }
  // };

  // handles updates to the buckets on the db -Mark
  handleUpdate = async (item) => {
    try {
      let modalItem = this.state.selectedItem;
      modalItem.note = item;
      // console.log('modal item', modalItem);
      await axios.put(`${SERVER}/bucketList/${modalItem._id}`, modalItem);
      let updatedItems = this.state.bucketList.map((updatedItem) => {
        if (updatedItem._id === modalItem._id) {
          return modalItem;
        } else {
          return updatedItem;
        }
      });
      this.setState({
        bucketList: updatedItems,
      });
    } catch (err) {
      console.log("updateError:", err);
    }
  };

  // handles deletes on the buckets to the db
  handleDelete = async (id) => {
    try {
      await axios.delete(`${SERVER}/bucketList/${id}`);
      let remainingBuckets = this.state.bucketList.filter(
        (item) => item._id !== id
      );
      this.setState({
        bucketList: remainingBuckets,
      });
    } catch (err) {
      console.log("deleteErr:", err);
    }
  };

  handleShowModal = (item) => {
    this.setState({
      showModal: true,
      selectedItem: item,
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }


  render() {
    return (
      <>
        <Container>
          <Row>
            {this.state.bucketList.map((item) => {
              return (
                <Col xs={12} md={6} lg={4}>
                  <Card
                    key={item._id}
                    className="mt-3 mb-3"
                    style={{ height: "30rem" }}
                  >
                    <Card.Img
                      style={{ border: "1px solid black" }}
                      variant="top"
                      src={item.country.flag}
                      height="200"
                    />
                    <Card.Body>
                      <Card.Title>{item.country.name}</Card.Title>
                      <Card.Text className="scroll">
                        <ListGroup className="list-group-flush">
                          <ListGroupItem className="border-0 p-0">
                            Capital: {item.country.capital}
                          </ListGroupItem>
                          <ListGroupItem className="border-0 p-0">
                            Population:{" "}
                            {item.country.population.toLocaleString()}
                          </ListGroupItem>
                          <ListGroupItem className="border-0 p-0">
                            Region: {item.country.region}
                          </ListGroupItem>
                          <ListGroupItem className="border-0 p-0">
                            Note: {item.note}
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        className="mr-1"
                        variant="secondary"
                        size="sm"
                        onClick={() => this.handleShowModal(item)}
                      >
                        Update Note
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => this.handleDelete(item._id)}
                      >
                        Delete
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <UpdateNoteModal 
        showModal={this.state.showModal} 
        handleCloseModal={this.handleCloseModal}
        handleUpdate={this.handleUpdate}
        selectedItem={this.state.selectedItem.note}
        />
      </>
    );
  }
}

export default withAuth0(BucketList);
