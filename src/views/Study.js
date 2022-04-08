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
import { withRouter } from "react-router-dom";

/*import {  MDBContainer} from "mdbreact";*/
import { Box } from '@material-ui/core';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { MDBContainer } from "mdbreact";

import {Spinner} from '../components/Loading/LoadingComponent';
import DetailStudy from '../components/DetailStudy/DetailStudy'

import axios from "axios";
import { toastOnError } from "../utils/Utils";
import { trackPromise } from 'react-promise-tracker';

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
          loading:true,
        };
        this.getData = this.getData.bind(this)
      }
    
    async getData(id){
        await trackPromise(
          axios.get("/api/v1/studies/"+ id+"/view" )
          .then(response => {
            this.setState({study : response.data}); 
            this.setState({loading : false}); 
          })
          .catch(error => {
            toastOnError("Error loading study");
          })
        )
      }

    async componentDidMount() {
      this.state.study = this.getData(this.props.match.params.sid)
    }
  

  render() {
    return (
	  
          <Box>
	    <Box ml="1%">
	    <Breadcrumbs/>
	    </Box>
	   
            {this.state.loading ? <Spinner/> : <DetailStudy study={this.state.study} />}
          </Box>
	  

    );
  }
}

export default withRouter(ResultsPage);
