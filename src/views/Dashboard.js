import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


import ProjectsList from "../components/Projects/ProjectsList"; // add imports
import AddProject from "../components/Projects/AddProject";     // add imports 

import { MDBRow, MDBContainer, MDBCol } from "mdbreact";


class Dashboard extends Component {
  onLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <>
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol xs="12">
                <ProjectsList />
                <AddProject />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(withRouter(Dashboard));