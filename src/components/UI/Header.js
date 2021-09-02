import { Component } from "react";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>I am the header</h1>
        <nav>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
