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

import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
import { CardContent, CardHeader, Card} from '@material-ui/core';

import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

import PlotComponent from "../components/Plots/PlotComponent"
import {Spinner} from '../components/Loading/LoadingComponent'

import axios from "axios";
import { toastOnError } from "../utils/Utils";
import { trackPromise } from 'react-promise-tracker';

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
          loading:true,
          study:{},
        };
        this.getData = this.getData.bind(this)
      }
    
    async getData(id){
        await trackPromise(
          axios.get("/api/v1/studies/public"+ id )
          .then(response => {
            this.setState(
                {
                  data : response.data.chart.data, 
                  layout: response.data.layout,
                  frames: response.data.frames,
                  config: response.data.config,
                  title: response.data.title,
                  loading:false
                });            
          })
          .catch(error => {
            toastOnError("Error loading study");
          })
        )
      }

    async componentDidMount() {
      this.getData(this.props.match.params.did)
    }
  

  render() {
    return (
          <MDBContainer className="mt-5">         
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardHeader title={<Breadcrumbs/>}>
                            
                        </CardHeader>
                        <CardContent>
                            <h2>SINGLE CELL ANALYSIS OF BLABLABAL IN GONADAL DEVELOPMENT BASED ON BLABLA </h2>
                        </CardContent>
                    </Card>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardContent>
                            {this.state.loading ? <Spinner/> : <PlotComponent data={this.state.data} layout={this.state.layout} frames={this.state.frames} config={this.state.config}/>}
                        </CardContent>
                    </Card>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardHeader title="Datasets"></CardHeader>
                        <CardContent>
                           
                        </CardContent>
                    </Card>
                </MDBCol>
            </MDBRow>
          </MDBContainer>
    );
  }
}

export default withRouter(ResultsPage);