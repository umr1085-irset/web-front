import React, { Component } from "react";
import { withRouter } from "react-router-dom";  // new import 
import { connect } from "react-redux";          // new import 
import PropTypes from "prop-types";             // new import 
import { Link } from "react-router-dom";
import {  Form } from "react-bootstrap";

import { login } from "../components/Login/LoginActions.js";      // new import 
import { MDBRow, MDBContainer, MDBCol, MDBBtn } from "mdbreact";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(userData, "/app/dashboard"); // <--- login request
  };

  render() {
    return (
          <MDBContainer className="mt-5">
            <MDBRow>
              <MDBCol md="4">
                <h1>Login</h1>
                <Form>
                  <Form.Group controlId="usernameId">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="passwordId">
                    <Form.Label>Your password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </Form.Group>
                </Form>
                <MDBBtn color="primary" onClick={this.onLoginClick}>
                  Login
                </MDBBtn>
                <p className="mt-2">
                  Don't have account? <Link to="/app/signup">Signup</Link> | <Link to="/app/forgot">Forgot my password</Link>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
    );
  }
}

// connect action and store and component
Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  login
})(withRouter(Login));