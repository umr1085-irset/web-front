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
import moment from 'moment';
import _ from 'lodash';

import { MDBRow, MDBCol, MDBTable, MDBTableBody,MDBTableHead } from "mdbreact";
import { Button, CardContent, CardHeader, Card} from '@material-ui/core';
import ScatterPLotIcon from '../../assets/Icons/ScatterPlot';



import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

class DetailStudyPage extends Component {

  render() {
      const study = this.props.study
    return (
          <div>         
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardHeader title={<Breadcrumbs/>}>
                            
                        </CardHeader>
                        <CardContent>
                            <h2>{study.studyId} - {study.title}</h2>
                        </CardContent>
                    </Card>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="6" sm="12">
                    <Card variant="outlined">
                        <CardHeader title="Study overview"></CardHeader>
                        <CardContent>
                            <MDBTable borderless>
                                <MDBTableBody>
                                    <tr>
                                        <td><b>Description</b></td>
                                        <td>
                                            {study.description? <p>{study.description}</p>: <p>No description provided</p> }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><b>Authors</b></td>
                                        <td>{study.created_by.username}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Last update</b></td>
                                        <td>{moment(study.updated_at).fromNow()}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Topic</b></td>
                                        <td className="capitalize">{study.topics? <p>{study.topics.toLowerCase()}</p>: <p>No topic provided</p> }</td>
                                    </tr>

                                </MDBTableBody>
                            </MDBTable>
                        </CardContent>
                    </Card>
                </MDBCol>
                <MDBCol md="6" sm="12">
                    <MDBRow>
                        <MDBCol md="12">
                            <Card variant="outlined">
                                <CardHeader title="Associated project"></CardHeader>
                                <CardContent>
                                    <MDBTable borderless>
                                        <MDBTableBody>
                                        <tr>
                                            <td><b>Title</b></td>
                                            <td>
                                               {study.project.projectId} - {study.project.title}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Authors</b></td>
                                            <td>{study.project.created_by.username}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Last update</b></td>
                                            <td>{moment(study.project.updated_at).fromNow()}</td>
                                        </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                </CardContent>
                            </Card>
                        </MDBCol>
                        <MDBCol md="12">
                            <Card variant="outlined">
                                <CardHeader title="Associated publications"></CardHeader>
                                <CardContent>
                                    {study.article.length?
                                    <MDBTable borderless>
                                        <MDBTableHead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Pmid</th>
                                                <th>Date</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            
                                            {study.article.map(function(article, idx){
                                                return(
                                                    <tr key={idx}>
                                                        <td key={"title_"+idx}>{article.title}</td>
                                                        <td key={"pmid_"+idx}><a key={"link_"+idx} href={"https://pubmed.ncbi.nlm.nih.gov/"+article.pmid}><Button key={"btn_"+idx} color="primary">{article.pmid}</Button></a></td>
                                                        <td key={"date_"+idx}>{moment(article.releaseDate).format('YYYY')}</td>
                                                    </tr>
                                                )
                                            })}
                                        </MDBTableBody>
                                    </MDBTable>
                                    :
                                    <p>No publication associated</p>    
                                    }
                                </CardContent>
                            </Card>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardHeader title="Datasets"></CardHeader>
                        <CardContent>
                            <MDBTable>
                                <MDBTableBody>
                                {study.dataset_of.map(function(data, idx){
                                    return (
                                        <tr key={idx}>
                                            <td key={"id_"+idx}>{data.datasetId}</td>
                                            <td key={"title_"+idx}>{data.title}</td>
                                            {data.bioMeta.tissue? <td key={"tissue_"+idx}>{_.map(data.bioMeta.tissue, 'name').toString()}</td>:<td key={"tissue_"+idx}>{_.map(data.bioMeta.cell, 'name').toString()}</td>}
                                            <td className="capitalize" key={"gender_"+idx}>{data.bioMeta.gender.toLowerCase()}</td>
                                            {data.bioMeta.dev_stage? <td key={"dev_stage_"+idx}>{_.map(data.bioMeta.dev_stage, 'name').toString()}</td>:<td key={"dev_stage_"+idx}>No information provided</td>}
                                            <td className="capitalize" key={"omics_"+idx}>{data.sop.omics.toLowerCase()}</td>
                                            <td className="capitalize" key={"technology_"+idx}>{data.sop.technoGrain.toLowerCase()} {data.sop.technology.toLowerCase()}</td>
                                            <td key={"btn_"+idx}>
                                                    <Link to={"/dataset/"+data.datasetId}><Button key={"display_btn"+idx} color="primary" style={{borderWidth: '2px'}}><ScatterPLotIcon color="primary"></ScatterPLotIcon></Button></Link>
                                            </td>
                                            <td key={"download_"+idx}>
                                                <Button variant="contained" color="primary" className='p-2' key={"download_btn"+idx}>
                                                    Download
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                                </MDBTableBody>
                            </MDBTable>
                        </CardContent>
                    </Card>
                </MDBCol>
            </MDBRow>
          </div>
    );
  }
}

export default withRouter(DetailStudyPage);