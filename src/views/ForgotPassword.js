import React, { Component } from "react";
import { withRouter } from "react-router-dom";  // new import 
import { connect } from "react-redux";          // new import 
import PropTypes from "prop-types";             // new import 
import { Form } from "react-bootstrap";

import { resetpassword } from "../components/ForgotPassword/ForgotPasswordAction.js";      // new import
import { MDBRow, MDBContainer, MDBCol, MDBBtn } from "mdbreact"; 

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onforgotPasswordClick = () => {
    const userData = {
      email: this.state.email,
    };
    this.props.resetpassword(userData); // <--- login request
  }

  render() {
    return (
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol md="4">
              <h1>Forgot password</h1>
              <Form>
                <Form.Group controlId="emailId">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </Form.Group>
              </Form>      
              <MDBBtn color="primary" onClick={this.onforgotPasswordClick}>
                Forgot my password
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );
  }
}

// connect action and store and component
ForgotPassword.propTypes = {
    resetpassword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  resetpassword
})(withRouter(ForgotPassword));