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

import DatasetTitleComponent from'./DatasetTitleComponent'

import { MDBRow, MDBCol } from "mdbreact";
import { CardContent, CardHeader, Card} from '@material-ui/core';
import LoomPlotComponentNoCard from './LoomPlotComponentNoCard'
import ResultsFilterLayout from './ResultFilterComponent'
import SelectedFilterResults from './SelectedFilterResultComponent'
import StatisticsComponent from './StatisticsComponent'
import GeneExpPlotComponent from './GeneExpPlotComponent'
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { UncontrolledCollapse } from 'reactstrap';

class ResultsLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attrs:{
                chart1:"clusters",
                chart2:"cell type",
                chart3:"clusters",
                chart4:"clusters",
                chart5:"cell type",
                chart6:"Sox9",
                chart7:"clusters",
                chart8:"clusters",
            },
            
            expanded:true,
            filters:{
                ra:{},
                ca:{}
            }
        };
    }

  render() {
      const dataset = this.props.dataset
    return (
        <div>         
            <MDBRow>
                <MDBCol md="8" sm="12">
                    <DatasetTitleComponent dataset={dataset}/>
                </MDBCol>
                <MDBCol md="4" sm="12">
                   <ResultsFilterLayout  metadata={dataset.metadata.filters} filters_keys={dataset.metadata.filters_keys} filters={this.state.filters} setStateParent={(p, cb) => this.setState(p, cb)} />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                   {(Object.keys(this.state.filters.ca) == 0 && Object.keys(this.state.filters.ra) == 0)? null : <SelectedFilterResults filters={this.state.filters}/>}
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    
                    <Card className="card-chart">
                        <CardHeader title="Overview"  action={
                            <IconButton
                                id="togglerMO"
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </IconButton>
                            }>
                        </CardHeader>
                        <UncontrolledCollapse toggler="#togglerMO" defaultOpen={true}>
                            <CardContent>
                                <MDBRow>
                                    <MDBCol lg="3" md="12" sm="12" className="colDivider">
                                        <LoomPlotComponentNoCard datachart="" display_type={['bar','pie']} loom={dataset.loom.id} url="/api/v1/dataset/attributes/" filters={this.state.filters} chart_type="pie" attrs={this.state.attrs.chart1} all_attrs={dataset.metadata.filters_keys} name="C1"></LoomPlotComponentNoCard>
                                    </MDBCol>
                                    <MDBCol lg="3" md="12" sm="12" className="colDivider">
                                        <LoomPlotComponentNoCard datachart="" display_type={['bar','pie']} loom={dataset.loom.id} url="/api/v1/dataset/attributes/" filters={this.state.filters} chart_type="bar" attrs={this.state.attrs.chart2} all_attrs={dataset.metadata.filters_keys}   name="C2"></LoomPlotComponentNoCard>
                                    </MDBCol>
                                    <MDBCol lg="3" md="12" sm="12" className="colDivider">
                                        <LoomPlotComponentNoCard datachart="" display_type={['bar','pie']} loom={dataset.loom.id} url="/api/v1/dataset/attributes/" filters={this.state.filters} chart_type="bar" attrs={this.state.attrs.chart3} all_attrs={dataset.metadata.filters_keys}  name="C3"></LoomPlotComponentNoCard>
                                    </MDBCol>
                                    <MDBCol lg="3" md="12" sm="12">
                                        <StatisticsComponent loom={dataset.loom.id} row_name={dataset.metadata.row_name} col_name={dataset.metadata.col_name} url="/api/v1/dataset/statistics/" filters={this.state.filters} row_tot={dataset.metadata.gene_number} col_tot={dataset.metadata.cell_number} />
                                    </MDBCol>
                                </MDBRow>
                            </CardContent>
                        </UncontrolledCollapse>
                    </Card>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <Card className="card-chart">
                        <CardHeader title="Spatial overview"  action={
                            <IconButton
                                id="togglerSO"
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </IconButton>
                            }>
                        </CardHeader>
                        <UncontrolledCollapse className="spatialCollapse" toggler="#togglerSO" defaultOpen={true}>
                            <CardContent className="spatialCollapse">
                                <MDBRow>
                                    <MDBCol md="6" className="colDivider spatialCollapse">
                                        <LoomPlotComponentNoCard className="spatialCollapse" display_type={['scatter','hexbin','density']} loom={dataset.loom.id} url="/api/v1/dataset/attributes/" filters={this.state.filters} chart_type="scatter" attrs={this.state.attrs.chart4} all_attrs={dataset.metadata.filters_keys} name="C4"></LoomPlotComponentNoCard>
                                    </MDBCol>
                                    <MDBCol md="6" className="spatialCollapse">
                                        <LoomPlotComponentNoCard className="spatialCollapse" display_type={['scatter','hexbin','density']} loom={dataset.loom.id} url="/api/v1/dataset/attributes/" filters={this.state.filters} chart_type="scatter" attrs={this.state.attrs.chart5} all_attrs={dataset.metadata.filters_keys}   name="C5"></LoomPlotComponentNoCard>
                                    </MDBCol>
                                </MDBRow>
                            </CardContent>
                        </UncontrolledCollapse>
                    </Card>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <Card className="card-chart">
                        <CardHeader title={dataset.metadata.row_name+" expression"}  action={
                            <IconButton
                                id="togglerGE"
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                                </IconButton>
                            }>
                        </CardHeader>
                        <UncontrolledCollapse id="GECollapse" toggler="#togglerGE" defaultOpen={true}>
                            <CardContent>
                                <MDBRow>
                                    <MDBCol md="12">
                                        <GeneExpPlotComponent display_type={['scatter','hexbin','dot','violin']} loom={dataset.loom.id} url="/api/v1/dataset/attributes/" filters={this.state.filters} chart_type="scatter" attrs={this.state.attrs.chart4} all_attrs={dataset.metadata.filters_keys} name="C4"/>
                                    </MDBCol>
                                </MDBRow>
                            </CardContent>
                        </UncontrolledCollapse>
                    </Card>
                </MDBCol>
            </MDBRow>
        </div>
    );
  }
}

export default withRouter(ResultsLayout);