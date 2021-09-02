import { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar expand="xxl" bg="dark" variant="dark">
          <Navbar.Brand>Bucket List</Navbar.Brand>
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <Button>
            <Link to="/about">About Us</Link>
          </Button>
          {/* {isAuthenticated && (
          <Button>
            <Link to="/profile">Profile</Link>
          </Button>
        )} */}
          {/* {isAuthenticated ? (
          <Button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </Button>
        ) : (
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        )} */}
        </Navbar>
      </header>
    );
  }
}

export default Header;
