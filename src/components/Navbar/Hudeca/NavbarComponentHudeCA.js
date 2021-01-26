import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import {
  MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
  } from "mdbreact";
import { logout } from "../../Login/LoginActions";

class NavbarComponent extends Component {
  state = {
    isOpen: false
  };

  onLogout = () => {
    this.props.logout();
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { user } = this.props.auth;
    const user_logged = (
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBDropdown>
            <MDBDropdownToggle nav caret>
            <MDBIcon icon="user" className="mr-1" />{user.username}
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <Link to="/hudeca/user-profile"><MDBDropdownItem>Profile</MDBDropdownItem></Link>
              <Link to="/hudeca/dashboard"><MDBDropdownItem>Dashboard</MDBDropdownItem></Link>
              <MDBDropdownItem onClick={this.onLogout}>Logout</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </MDBNavbarNav>
    )

    const user_not_logged = (
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink to={"/hudeca/signup"}>Register</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to={"/hudeca/login"}>Login</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    )

    return (
      <div>
        <MDBNavbar color="indigo" dark expand="md">
          <MDBContainer>
            <Link to="/hudeca/home"><MDBNavbarBrand>
              <strong className="white-text">HuDeCA</strong>
            </MDBNavbarBrand></Link>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink to={"/hudeca/datasets"}>Browse</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        Help
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default" right>
                        <Link to="/hudeca/tutorial"><MDBDropdownItem>Tutorial</MDBDropdownItem></Link>
                        <Link to="/hudeca/technical-corner"><MDBDropdownItem>Technical corner</MDBDropdownItem></Link>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        About
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default" right>
                        <Link to="/hudeca/about"><MDBDropdownItem>About Hudeca</MDBDropdownItem></Link>
                        <Link to="/hudeca/institutions"><MDBDropdownItem>Institutions and founders</MDBDropdownItem></Link>
                        <Link to="/hudeca/ressources"><MDBDropdownItem>Other ressources</MDBDropdownItem></Link>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
                  {user.username? user_logged : user_not_logged}
              </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        
      </div>
    );
  }
}

NavbarComponent.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logout
})(withRouter(NavbarComponent));