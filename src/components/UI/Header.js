import { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { withAuth0 } from "@auth0/auth0-react";

import "./Header.css";

class Header extends Component {
  render() {
    const { isAuthenticated, loginWithRedirect, logout } = this.props.auth0;
    const loginDisplay = (
      <Button className="logButton" onClick={() => loginWithRedirect()}>Log In</Button>
    );
    const logoutDisplay = (
      <Button className="logButton" onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </Button>
    );
    return (
      <header
        style={{
          backgroundColor: "#160f29",
        }}
      >
        {/* <Navbar
          expand="xxl"
          // bg="dark" variant="dark"
          style={{
            backgroundColor: "#160F29",
          }}
        >
          <Navbar.Brand
            style={{
              color: "#F3DFC1",
              fontWeight: "bold",
            }}
          >
            Bucket List
          </Navbar.Brand>
        </Navbar> */}
        {/* Option 1 */}
        {/* <Navbar expand="xxl" bg="dark" variant="dark">
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
        </Navbar> */}
        {/* Option 2 */}
        <Navbar 
        // expand="xxl"
        bg="#160F29" 
        variant="dark">
          <Navbar.Brand
            style={{
              color: "#F3DFC1",
              fontWeight: "bold",
            }}>
            Travel Buckaroo
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            {isAuthenticated && <Nav.Link href="/profile">Profile</Nav.Link>}
            {/* {isAuthenticated && (
               <Nav.Link href="/bucket">My Bucket</Nav.Link>
              )} */}
            {isAuthenticated && (
              <Button variant="secondary" className="bucketButton">
                <Link to="/bucket">My Bucket</Link>
              </Button>
            )}
            {isAuthenticated ? logoutDisplay : loginDisplay}
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default withAuth0(Header);
