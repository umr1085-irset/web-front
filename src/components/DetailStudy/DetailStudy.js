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
	    <MDBCol size="8">
            <Box style={{ margin: 16}}>
          	    			{study.description?
          <Typography variant="body1">{study.description}</Typography>  : <span />}
	                         
                                                          
	    {study.contributor.length?
	<Box style={{ marginTop: 16 }}>		   
	      <Typography color="textSecondary">Contributors :   
	         
		   {study.contributor.map(function(contributor, idx){
				          return(
				                   <span style={{ color: "#000000" }}  key={"contributor_"+idx}>{contributor.name} - </span>
						 )
				             })}
		    </Typography>
	</Box>	
		: <span />
	     
	}

                 
                
	         <Typography variant="overline"> Data curated by {study.dataCurators}, last updated: {moment(study.updated_at).fromNow()}</Typography>
                       
                    </Box>
                </MDBCol>
                <MDBCol size="4">
                  
                          <Typography variant="body1">
	    <div style={{ marginTop: 16 }}><Typography variant="h4" color="textSecondary">Related project</Typography></div> {study.collection.title} ({study.collection.projectId})
	   
	    {study.article.length?
	          <Box style={{ marginTop: 16 }}>
                  <Typography variant="h4" color="textSecondary">Related article(s)</Typography>
		   {study.article.map(function(article, idx){
				          return(
				                   <Box> <span style={{ fontStyle: "italic"  }}> {article.title}</span>, {article.journal}, {moment(article.releaseDate).format('YYYY')} ,  <a key={"link_"+idx} href={"https://pubmed.ncbi.nlm.nih.gov/"+article.pmid}>pmid:{article.pmid}</a>  </Box>
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
                        <CardContent style={{ marginBottom: -20  }}>
                            <MDBTable>
                                <MDBTableBody>
                                {study.dataset_of.map(function(data, idx){
                                    return (
                                        <tr key={idx}>
                                            
                                            <td key={"id__"+idx} className="capitalize border-bottom border-top-0">{data.title} ({data.datasetId}) </td>

				            <td className="border-bottom border-top-0" key={"info_"+idx}> <Typography variant="h4" color="textSecondary"> {data.loom.cellNumber?  <span>{data.loom.cellNumber} cells | </span> :<span/> }    {data.bioMeta.age_start? <span>{data.bioMeta.age_start}-{data.bioMeta.age_end} {data.bioMeta.age_unit} | </span>  :<span /> }  {_.map(data.bioMeta.organ,'ontologyLabel').toString()}  |   {_.map(data.sop.technology,'ontologyLabel').toString()}    </Typography></td>

                                            
                                            
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
