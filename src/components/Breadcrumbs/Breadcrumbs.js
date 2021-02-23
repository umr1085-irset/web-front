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
import { withRouter, Link  } from "react-router-dom";

import { emphasize, withStyles } from '@material-ui/core/styles';
import { Chip, Breadcrumbs} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { MDBRow, MDBCol } from "mdbreact";


class BreadcrumbsComponent extends Component {
    
    render() {
        const StyledBreadcrumb = withStyles((theme) => ({
            root: {
              backgroundColor: theme.palette.primary.main,
              height: theme.spacing(3),
              color: "#fff",
              fontWeight: theme.typography.fontWeightRegular,
              '&:hover, &:focus': {
                backgroundColor: theme.palette.primary.dark,
              },
              '&:active': {
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(theme.palette.primary.dark, 0.12),
              },
            },
          }))(Chip); 
      return (
          <MDBRow>
              <MDBCol md="12">
              <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" to="/hudeca/home" >
                    <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Home"
                            icon={<HomeIcon fontSize="small" style={{ color: 'white' }}  />}
                        />
                    </Link>
                    <Link color="inherit" to="/getting-started/installation/">
                        <StyledBreadcrumb component="a" href="#" label="Study List" />
                    </Link>
                </Breadcrumbs>
              </MDBCol>
          </MDBRow>
        
      );
    }
  }
  
  export default withRouter(BreadcrumbsComponent);