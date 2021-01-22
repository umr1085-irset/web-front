/*!

=========================================================
* SciLicium Platform v0.0.1
=========================================================

* Copyright 2021 SciLicium (https://www.scilicium.com)

* Coded by SciLicium
* Author: Thomas Darde

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


import { MDBContainer } from "mdbreact";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

import { Form } from "react-bootstrap";
import { updateUser } from './UserActions'


class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: this.props.auth.username,
        email: this.props.auth.email
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // update function to call the action
  updateUserClick = () => {
    const userData = this.props.auth
    userData.username = this.state.username
    this.props.updateUser(userData); // <-- signup new user request
  };

  render() {
    const { user } = this.props.auth;
    return (
      <>
      <MDBContainer className="mt-5">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
              <Form>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    as="input"
                    name="username"
                    placeholder={user.username}
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    as="input"
                    name="email"
                    placeholder={user.email}
                    value={user.email}
                    onChange={this.onChange}
                    readOnly
                  />
                </Form.Group>
              </Form>
               
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" onClick={this.updateUserClick}>
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </MDBContainer>
    </>
    );
  }
}

ProfilePage.propTypes = {
  updateUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,{ updateUser })(withRouter(ProfilePage));