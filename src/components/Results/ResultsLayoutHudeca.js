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
import { Link, withRouter } from "react-router-dom";

import { MDBRow, MDBCol, MDBCollapse  } from "mdbreact";
import { CardContent, CardHeader, Card} from '@material-ui/core';
import LoomPlotComponent from './LoomPlotComponent'
import LoomPlotComponentNoCard from './LoomPlotComponentNoCard'
import ResultsFilterLayout from './ResultFilterComponent'
import SelectedFilterResults from './SelectedFilterResultComponent'
import StatisticsComponent from './StatisticsComponent'
import GeneExpPlotComponent from './GeneExpPlotComponent'
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
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
    
    state = {
        collapseID: true,
        
        collapseID3: true,
    }


    handleExpandClick = () => {
        this.setState({expanded:!this.state.expanded});
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

    toggleCollapse2 = () => {
        this.setState({collapseID2: !this.state.collapseID2});
    }
    toggleCollapse3 = collapseID3 => () => {
        this.setState(prevState => ({
            collapseID3: prevState.collapseID3 !== collapseID3 ? collapseID3 : ""
        }));
    }

    callbackFunction = (val) => { 
        //this.setState({ filters:val })
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
                                            <div key={"div"+idx}>
                                                <Typography key={"div_typo"+idx} gutterBottom variant="h3" component="h3"  className="result-title">
                                                    <Link key={"div_typo_link"+idx} to={"/dataset/"+data.datasetId}>{data.title}</Link>
                                                </Typography>
                                                <Typography key={"div_typo_info"+idx} variant="body2" color="textSecondary" component="p"  className="result-title">
                                                    {data.cell_number} {data.col_name} | {data.gene_number} {data.row_name}
                                                </Typography>
                                                <hr key={"div_hr"+idx}/>
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
                                    <MDBCol md="3" className="colDivider">
                                        <LoomPlotComponentNoCard display_type={['bar','pie']} loom={dataset.loom.id} url="/api/v1/dataset/attributes/" filters={this.state.filters} chart_type="pie" attrs={this.state.attrs.chart1} all_attrs={dataset.metadata.filters_keys} name="C1"></LoomPlotComponentNoCard>
                                    </MDBCol>
                                    <MDBCol md="3" className="colDivider">
                                        <LoomPlotComponentNoCard display_type={['bar','pie']} loom={dataset.loom.id} url="/api/v1/dataset/attributes/" filters={this.state.filters} chart_type="bar" attrs={this.state.attrs.chart2} all_attrs={dataset.metadata.filters_keys}   name="C2"></LoomPlotComponentNoCard>
                                    </MDBCol>
                                    <MDBCol md="3" className="colDivider">
                                        <LoomPlotComponentNoCard display_type={['bar','pie']} loom={dataset.loom.id} url="/api/v1/dataset/attributes/" filters={this.state.filters} chart_type="bar" attrs={this.state.attrs.chart3} all_attrs={dataset.metadata.filters_keys}  name="C3"></LoomPlotComponentNoCard>
                                    </MDBCol>
                                    <MDBCol md="3">
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
                                        <LoomPlotComponentNoCard className="spatialCollapse" display_type={['scatter','hexbin']} loom={dataset.loom.id} url="/api/v1/dataset/attributes/" filters={this.state.filters} chart_type="scatter" attrs={this.state.attrs.chart4} all_attrs={dataset.metadata.filters_keys} name="C4"></LoomPlotComponentNoCard>
                                    </MDBCol>
                                    <MDBCol md="6" className="spatialCollapse">
                                        <LoomPlotComponentNoCard className="spatialCollapse" display_type={['scatter','hexbin']} loom={dataset.loom.id} url="/api/v1/dataset/attributes/" filters={this.state.filters} chart_type="scatter" attrs={this.state.attrs.chart5} all_attrs={dataset.metadata.filters_keys}   name="C5"></LoomPlotComponentNoCard>
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
                                        <GeneExpPlotComponent display_type={['scatter','hexbin']} loom={dataset.loom.id} url="/api/v1/dataset/attributes/" filters={this.state.filters} chart_type="scatter" attrs={this.state.attrs.chart4} all_attrs={dataset.metadata.filters_keys} name="C4"/>
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