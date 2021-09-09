import { Component } from "react";

import Header from "./Header";

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main 
          style={{
            backgroundColor: "#f3dfc1",
          }}
        >
          {this.props.children}</main>
      </>
    );
  }
}

export default Layout;
