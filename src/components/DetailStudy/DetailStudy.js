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
import axios from "axios";

import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody,MDBTableHead } from "mdbreact";
import { Box, Button, CardContent, CardHeader, Card, Paper, Typography } from '@material-ui/core';

import ScatterPlotTwoToneIcon from '../../assets/Icons/ScatterPlotTwoTone';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';


import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

var fileDownload = require('js-file-download');
class DetailStudyPage extends Component {
    constructor(props) {
        super(props);
        this.downloadDataset = this.downloadDataset.bind(this)
      }
      
      async downloadDataset(id) {
            console.log('/api/v1/datasets/'+id+'/download')
            axios.get('/api/v1/datasets/'+id+'/download', { 
                responseType: 'blob',
            }).then(res => {
                fileDownload(res.data, id+'.zip');
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
      }
  render() {
      const study = this.props.study
      console.log(study)
    return (
          <div>         
	    <Paper variant="outlined" >
            <Typography variant="h2" style={{ marginLeft: "2%" }} gutterBottom> {study.title} <span style={{ fontSize: "0.9rem" }}>( {study.studyId})</span></Typography>

	  
	            
            <MDBContainer fluid>
	    <MDBRow>
	    <MDBCol size="9">
            
                        <MDBTable borderless>
                                <MDBTableBody>
	    			{study.description?
                                    <tr>
                                        <td><Typography variant="h4" color="textSecondary">Description</Typography></td>
                                        <td><Typography variant="body1">{study.description}</Typography>   </td>
                                    </tr> : <span />}
	                            
	   			 {study.contributor.length?
                                    <tr>
                                        <td><Typography variant="h4" color="textSecondary">Contributors</Typography></td>
                                        <td><Typography variant="body1">{study.contributor}</Typography>   </td>
                                    </tr> : <span /> }
                                                          

                                </MDBTableBody>
                           </MDBTable>
	         <Typography variant="overline"> Data curated by {study.created_by.username}, last updated: {moment(study.updated_at).fromNow()}</Typography>
                       
                    
                </MDBCol>
                <MDBCol size="3">
                  
                          <Typography variant="body1">
	    <div style={{ marginTop: 16 }}><Typography variant="h4" color="textSecondary">Related project</Typography></div> {study.project.title} ({study.project.projectId})
	   
	    {study.article.length?
	          <Box>
                  <Typography variant="h4" color="textSeondary">Related articles</Typography>
		   {study.article.map(function(article, idx){
				          return(
				                   <Box>  {article.title},  {moment(article.releaseDate).format('YYYY')}  <a key={"link_"+idx} href={"https://pubmed.ncbi.nlm.nih.gov/"+article.pmid}><Button key={"btn_"+idx} color="primary">{article.pmid}</Button></a>  </Box>
						 )
				             })}
		</Box>
		:
	       <span />
	}
	 			

                           </Typography> 
                        </MDBCol>
                    </MDBRow>
            </MDBContainer>

	   </Paper>

           
                    <Card variant="outlined">
                        <CardHeader title="Associated datasets"></CardHeader>
                        <CardContent>
                            <MDBTable>
                                <MDBTableBody>
                                {study.dataset_of.map(function(data, idx){
                                    return (
                                        <tr key={idx}>
                                            
                                            <td key={"id__"+idx} className="capitalize border-bottom border-top-0">{data.title} ({data.datasetId}) </td>
                                            {data.bioMeta.tissue? <td className="border-bottom border-top-0" key={"tissue_"+idx}>{_.map(data.bioMeta.tissue, 'ontologyLabel').toString()}</td>:<td key={"tissue_"+idx} className="border-bottom border-top-0">{_.map(data.bioMeta.cell, 'name').toString()}</td>}
                                            <td className="capitalize border-bottom border-top-0" key={"gender_"+idx}>{data.bioMeta.gender.join(", ")}</td>
                                            {data.bioMeta.dev_stage? <td className="border-bottom border-top-0" key={"dev_stage_"+idx}>{_.map(data.bioMeta.dev_stage, 'ontologyLabel').toString()}</td>:<td className="border-bottom border-top-0" key={"dev_stage_"+idx}>No information provided</td>}
                                            <td className="capitalize border-bottom border-top-0" key={"omics_"+idx}>{_.map(data.sop.omics, 'ontologyLabel').toString()}</td>
                                            <td className="capitalize border-bottom border-top-0" key={"technology_"+idx}>{_.map(data.sop.technoGrain,'ontologyLabel').toString()} {_.map(data.sop.technology,'ontologyLabel').toString()}</td>
                                            <td key={"btn_"+idx} align="right" className="border-bottom border-top-0">
                                                    <Link to={"/dataset/"+data.datasetId}><Button key={"display_btn"+idx} color="primary" size="medium" startIcon={<ScatterPlotTwoToneIcon />} variant="outlined"> Visualize </Button></Link>
                                            </td>
                                            <td key={"download_"+idx} align="right" className="border-bottom border-top-0" width="64">
                                                <Button onClick={() => {this.downloadDataset(data.datasetId)}} variant="contained" color="primary" size="medium" startIcon={<GetAppOutlinedIcon /> }  key={"download_btn"+idx}>
                                                    Download
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                },this)}
                                </MDBTableBody>
                            </MDBTable>
                        </CardContent>
                    </Card>
       
          </div>
    );
  }
}

export default withRouter(DetailStudyPage);
