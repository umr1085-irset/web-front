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


import { MDBRow, MDBContainer, MDBCol } from "mdbreact";

import TableComponent from '../../components/Table/TableComponent'

import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';


class DatasetPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
          data_scatter:[]
        };
        this.getData = this.getData.bind(this)
      }
    
    async getData(){
      await trackPromise(
        axios.get("/api/v1/datasets/public")
        .then(response => {
          this.setState({data_scatter : response.data}); 
        })
        .catch(error => {
          toastOnError("Error loading public datasets");
        })
      )
    }


    componentDidMount(){
      this.getData()
    }
  render() {
  
    return (
          <MDBContainer className="mt-5">
            <MDBRow>
                <MDBCol md="12">
                  <TableComponent data={this.state.data_scatter}/>
                </MDBCol>
            </MDBRow>

          </MDBContainer>
    );
  }
}

export default DatasetPage;