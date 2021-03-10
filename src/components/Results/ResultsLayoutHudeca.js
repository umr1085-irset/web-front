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
import _ from 'lodash';

import { MDBRow, MDBCol } from "mdbreact";
import { CardContent, CardHeader, Card} from '@material-ui/core';
import LoomPlotComponent from './LoomPlotComponent'



import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

class ResultsLayout extends Component {

  render() {
      const dataset = this.props.dataset
    return (
        <div>         
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardHeader title={<Breadcrumbs/>}>
                            
                        </CardHeader>
                        <CardContent>
                            <h2>{dataset.datasetId} - {dataset.title}</h2>
                        </CardContent>
                    </Card>
                </MDBCol>
               
            </MDBRow>
            <MDBRow>
                <MDBCol md="4">
                    <LoomPlotComponent loom={dataset.loom[0]["id"]} url="/api/v1/dataset/attributes" style="pie"></LoomPlotComponent>
                </MDBCol>
                <MDBCol md="4">
                    <LoomPlotComponent loom={dataset.loom[0]["id"]} url="/api/v1/dataset/attributes" style="bar"></LoomPlotComponent>
                </MDBCol>
                <MDBCol md="4">
                    <LoomPlotComponent loom={dataset.loom[0]["id"]} url="/api/v1/dataset/attributes" style="bar"></LoomPlotComponent>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <LoomPlotComponent loom={dataset.loom[0]["id"]} url="/api/v1/dataset/attributes" style="scatter"></LoomPlotComponent>
                </MDBCol>
            </MDBRow>
        </div>
    );
  }
}

export default withRouter(ResultsLayout);