/*!

=========================================================
* SciLicium Genomics Platform v0.0.1
=========================================================

* Copyright 2021 SciLicium (https://www.scilicium.com)

* Coded by SciLicium
* Author: Thomas Darde

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { withRouter  } from "react-router-dom";

import { MDBRow, MDBContainer, MDBCol } from "mdbreact";

import TableComponent from '../../components/Table/TableComponent'
import FilterComponentDataset from '../../components/Filter/FilterComponent'
import FilterComponentStudies from '../../components/Filter/FilterComponentStudies'
import {Spinner} from '../../components/Loading/LoadingComponent'

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Typography, Container, Paper, Box } from '@material-ui/core';

import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';

class DatasetPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
          loading:true,
          browse_by:"",
          filters:null
        };
        this.getData = this.getData.bind(this)
      }
    
    async getData(browse){
        const data = {
          viewer:"HuDeCA"
        }
        let url=""
        if(browse=="studies"){
          url = "/api/v1/public/studies/"
        }else{
          url = "/api/v1/datasets/public"
        }
        await trackPromise(
          axios.post(url,data)
          .then(response => {
            this.setState({data : response.data}); 
            this.setState({loading : false});
            this.setState({loading2 : false});  
          })
          .catch(error => {
            toastOnError("Error loading public datasets");
          })
        )
      }

    async componentDidMount() {
      this.setState({browse_by : this.props.match.params.browse_by});
      this.getData(this.props.match.params.browse_by)
    }

    displayFilter = (KeysToComponentDisplay,key,data,callback,filters) =>{
      return React.createElement(KeysToComponentDisplay[key],{key:"filterDisplay_by_"+key,data: data, parentCallback: callback, filters: filters})
    }

  render() {
    
    
    
return (
	<Box>
	    <Box ml="1%">	
            <Breadcrumbs/> 
            </Box>
             <Paper>
	    <Box mx={4} mb={4} mt={-2}>
                  {this.state.loading ? <Spinner/> : <TableComponent data={this.state.data} filters={this.state.filters} type={this.props.match.params.browse_by} />}
                </Box>
            </Paper>
          </Box>
    );
  }
}

export default withRouter(DatasetPage);
