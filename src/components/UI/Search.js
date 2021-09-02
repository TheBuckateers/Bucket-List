import { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Search extends Component {
  render() {
    return (
      <Container className="mt-3 w-75 mb-3">
        <InputGroup>
          <FormControl
            placeholder="Country Search"
            value={this.props.countrySearch}
            onChange={this.props.onChange}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={this.props.onClick}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Container>
    );
  }
}

export default Search;
