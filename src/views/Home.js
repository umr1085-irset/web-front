import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <div className="content2">
          <Container>
            <h1>Home</h1>
            <p>
              <Link to="/app/login/">Login</Link>
            </p>
            <p>
              <Link to="/app/signup">Sign up</Link>
            </p>
            <p>
              <Link to="/app/dashboard">Dashboard</Link>
            </p>
          </Container>
        </div>
      </>
    );
  }
}

export default Home;