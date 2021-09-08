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
      <header
        style={{
          backgroundColor: "#160f29",
        }}
      >
        <Navbar expand="xxl"
          // bg="dark" variant="dark"  
          style={{
            backgroundColor: "#160F29",
          }}>
          <Navbar.Brand
            style={{
              color: "#F3DFC1",
              fontWeight: 'bold',
            }}
          >Bucket List
          </Navbar.Brand>
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
          {isAuthenticated ? logoutDisplay : loginDisplay}
        </Navbar>
      </header>
    );
  }
}

export default withAuth0(Header);
