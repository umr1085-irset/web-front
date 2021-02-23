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
          axios.get("/api/v1/data/count?id=" + id)
          .then(response => {
              console.log(response)
            this.setState(
                {
                    name : response.data.name,
                    chart : response.data.chart, 
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
                        {this.state.loading ? <Spinner/> : <h2>{this.state.name}</h2>}
                        </CardContent>
                    </Card>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardContent>
                            {this.state.loading ? <Spinner/> : <PlotComponent data={this.state.chart.data} layout={this.state.chart.layout}/>}
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