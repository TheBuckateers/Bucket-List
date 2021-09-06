import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Layout from "./components/UI/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-bqwezv2c.us.auth0.com"
      clientId="ZN4K3OEBG8UhBcW7S4rX5MHE9ouuYPb4"
      redirectUri={window.location.origin}
      audience="https://dev-bqwezv2c.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    >
      <Router>
        <Layout>
          <App />
        </Layout>
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
