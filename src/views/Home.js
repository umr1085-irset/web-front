import React, { Component } from "react";

import { Container } from "react-bootstrap";
import { MDBContainer } from "mdbreact";

import HomeContent from "../components/Home/Home"

class Home extends Component {
  render() {
    return (
	<MDBContainer fluid>
          <HomeContent/>

        </MDBContainer>
      
    );
  }
}

export default Home;
