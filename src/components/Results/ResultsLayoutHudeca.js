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

import { MDBRow, MDBCol  } from "mdbreact";
import { CardContent, CardHeader, Card} from '@material-ui/core';
import LoomPlotComponent from './LoomPlotComponent'
import ResultsFilterLayout from './ResultFilterComponent'
import SelectedFilterResults from './SelectedFilterResultComponent'



import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

class ResultsLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attrs:undefined,
            filters:{
                genes:"",
                celltype:""
        
            }
        };
      }

    callbackFunction = (key,val) => { 
        this.setState(() => ({ filters: {[key]:val} }))
        console.log(this.state)
    }

  render() {
      const dataset = this.props.dataset
    return (
        <div>         
            <MDBRow>
                <MDBCol md="8" sm="12">
                    <Card variant="outlined">
                        <CardHeader title={<Breadcrumbs/>}>
                            
                        </CardHeader>
                        <CardContent>
                            <h2>{dataset.datasetId} - {dataset.title}</h2>
                        </CardContent>
                    </Card>
                </MDBCol>
                <MDBCol md="4" sm="12">
                   <ResultsFilterLayout genes={dataset.metadata.genes} celltype={dataset.metadata.celltype}  filters={this.state.filters} setStateParent={(p, cb) => this.setState(p, cb)} />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                   {this.state.filters? <SelectedFilterResults filters={this.state.filters}/>:<div></div>}
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="4">
                    <LoomPlotComponent loom={dataset.loom.id} url="/api/v1/dataset/attributes" style="pie" attrs={this.state.attrs}></LoomPlotComponent>
                </MDBCol>
                <MDBCol md="4">
                    <LoomPlotComponent loom={dataset.loom.id} url="/api/v1/dataset/attributes" style="bar" attrs={this.state.attrs}></LoomPlotComponent>
                </MDBCol>
                <MDBCol md="4">
                    <LoomPlotComponent loom={dataset.loom.id} url="/api/v1/dataset/attributes" style="bar" attrs={this.state.attrs} ></LoomPlotComponent>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <LoomPlotComponent loom={dataset.loom.id} url="/api/v1/dataset/attributes" style="scatter" attrs={this.state.attrs}></LoomPlotComponent>
                </MDBCol>
            </MDBRow>
        </div>
    );
  }
}

export default withRouter(ResultsLayout);