import { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { withAuth0 } from "@auth0/auth0-react";

import "./Header.css";

class Header extends Component {
  render() {
    const { isAuthenticated, loginWithRedirect, logout } = this.props.auth0;
    const loginDisplay = (
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
    );
    const logoutDisplay = (
      <Button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </Button>
    );
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
          {isAuthenticated && (
            <Button>
              <Link to="/profile">Profile</Link>
            </Button>
          )}
          {isAuthenticated && (
            <Button>
              <Link to="/bucket">Bucket List</Link>
            </Button>
          )}
          {isAuthenticated ? logoutDisplay : loginDisplay}
        </Navbar>
      </header>
    );
  }
}

export default withAuth0(Header);
