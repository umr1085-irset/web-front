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
              <Link to="/user-profile"><MDBDropdownItem>Profile</MDBDropdownItem></Link>
              <Link to="/dashboard"><MDBDropdownItem>Dashboard</MDBDropdownItem></Link>
              <MDBDropdownItem onClick={this.onLogout}>Logout</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </MDBNavbarNav>
    )

    const user_not_logged = (
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink to={"/signup"}>Register</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to={"/login"}>Login</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    )

    return (
      <div>
        <MDBNavbar light expand="md">
          <MDBContainer>
            <Link to="/"><MDBNavbarBrand>
              <strong className="black-text">HuDeCA</strong>
            </MDBNavbarBrand></Link>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        Browse
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default" right>
                        <Link to="/view/studies"><MDBDropdownItem>By studies</MDBDropdownItem></Link>
                        <Link to="/view/datasets"><MDBDropdownItem>By datasets</MDBDropdownItem></Link>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        Help
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default" right>
                        <Link to="/tutorial"><MDBDropdownItem>Tutorial</MDBDropdownItem></Link>
                        <Link to="/technical-corner"><MDBDropdownItem>Technical corner</MDBDropdownItem></Link>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        About
                      </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default" right>
                        <Link to="/about"><MDBDropdownItem>About Hudeca</MDBDropdownItem></Link>
                        <Link to="/institutions"><MDBDropdownItem>Institutions and founders</MDBDropdownItem></Link>
                        <Link to="/ressources"><MDBDropdownItem>Other ressources</MDBDropdownItem></Link>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
                  {/* {user.username? user_logged : user_not_logged} */}
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