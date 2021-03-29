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

import { MDBRow, MDBCol, MDBCollapse  } from "mdbreact";
import { CardContent, CardHeader, Card} from '@material-ui/core';
import LoomPlotComponent from './LoomPlotComponent'
import ResultsFilterLayout from './ResultFilterComponent'
import SelectedFilterResults from './SelectedFilterResultComponent'
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

class ResultsLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attrs:undefined,
            filters:{
                row_attributes:{},
                col_attributes:{}
            }
        };
    }
    
    state = {
        collapseID: ""
    }
    
    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
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
                    <Card variant="outlined" className="ddb-result">
                        <CardHeader title={<Breadcrumbs/>}>
                            
                        </CardHeader>
                        <CardContent >
                            <MDBRow>
                                <MDBCol md="11">
                                    <Typography gutterBottom variant="h2" component="h2"  className="result-title">
                                        {dataset.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p"  className="result-title">
                                           {dataset.metadata.cell_number} {dataset.metadata.col_name} | {dataset.metadata.gene_number} {dataset.metadata.row_name}
                                    </Typography>
                                </MDBCol>
                                <MDBCol md="1">
                                    {dataset.rel_datasets.datasets.length?<ExpandMoreIcon fontSize="large" onClick={this.toggleCollapse("basicCollapse")}/>:<p></p>}
                                </MDBCol>
                            </MDBRow>
                        </CardContent>
                        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID} className="center-col">
                            <CardContent >
                                <MDBRow>
                                    <MDBCol md="12">
                                    <hr/>
                                        {dataset.rel_datasets.datasets.map(function(data,idx){
                                            return(
                                            <div>
                                                <Typography gutterBottom variant="h3" component="h3"  className="result-title">
                                                    {data.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p"  className="result-title">
                                                    {data.cell_number} {data.col_name} | {data.gene_number} {data.row_name}
                                                </Typography>
                                                <hr/>
                                            </div>
                                            )
                                        })}
                                    </MDBCol>
                                </MDBRow>
                            </CardContent>
                        </MDBCollapse>
                    </Card>
                </MDBCol>
                <MDBCol md="4" sm="12">
                   <ResultsFilterLayout  metadata={dataset.metadata.filters} filters={this.state.filters} setStateParent={(p, cb) => this.setState(p, cb)} />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                   {(Object.keys(this.state.filters.col_attributes)==0 && Object.keys(this.state.filters.row_attributes)==0)? null : <SelectedFilterResults filters={this.state.filters}/>}
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="4">
                    <LoomPlotComponent loom={dataset.loom.id} url="/api/v1/dataset/attributes" filters={this.state.filters} style="pie" attrs={this.state.attrs}></LoomPlotComponent>
                </MDBCol>
                <MDBCol md="4">
                    <LoomPlotComponent loom={dataset.loom.id} url="/api/v1/dataset/attributes" filters={this.state.filters} style="bar" attrs={this.state.attrs}></LoomPlotComponent>
                </MDBCol>
                <MDBCol md="4">
                    <LoomPlotComponent loom={dataset.loom.id} url="/api/v1/dataset/attributes" filters={this.state.filters} style="bar" attrs={this.state.attrs} ></LoomPlotComponent>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <LoomPlotComponent loom={dataset.loom.id} url="/api/v1/dataset/attributes" filters={this.state.filters} style="scatter" attrs={this.state.attrs}></LoomPlotComponent>
                </MDBCol>
            </MDBRow>
        </div>
    );
  }
}

export default withRouter(ResultsLayout);