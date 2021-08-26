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
import { Link } from "react-router-dom";

import { MDBRow, MDBCol  } from "mdbreact";
import { CardContent, CardHeader, Card} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { UncontrolledCollapse } from 'reactstrap';

class DatasetTitleComponent extends Component {

  render() {
      const dataset = this.props.dataset
    return (
        <Card variant="outlined" className="ddb-result">
            <CardHeader title={<Breadcrumbs/>}>
                
            </CardHeader>
            <CardContent >
                <MDBRow>
                    <MDBCol md="11">
                        <Typography gutterBottom variant="h2" component="h2"  className="result-title">
                            {dataset.title}
                        </Typography>
                    </MDBCol>
                    <MDBCol md="1">
                        {dataset.rel_datasets.datasets.length?<ExpandMoreIcon fontSize="large" id="togglerdatasets"/>:<p></p>}
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="11">
                        <Typography variant="h3" color="textSecondary" component="h3"  className="result-title">
                            {dataset.metadata.cell_number} {dataset.metadata.col_name} | {dataset.metadata.gene_number} {dataset.metadata.row_name}
                        </Typography>
                    </MDBCol>
                </MDBRow>
            </CardContent>
            {dataset.rel_datasets.datasets.length?
            <UncontrolledCollapse toggler="#togglerdatasets" className="center-col">
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
            </UncontrolledCollapse>:null}
        </Card>
    );
  }
}

export default DatasetTitleComponent;