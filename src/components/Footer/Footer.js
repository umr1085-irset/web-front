/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
  return (
    <MDBFooter className="font-small mt-4">
      <div className="text-center py-3">
        <MDBContainer fluid className="text-dark">
          RGV - ReproGenomics Viewer  - &copy; {new Date().getFullYear()} Copyright: <a className="text-dark" href="https://www.scilicium.com"> SciLicium </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
