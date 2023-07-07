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

import { MDBContainer, MDBRow, MDBCol  } from "mdbreact";
import { Box, CardContent, CardHeader, Card} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { UncontrolledCollapse } from 'reactstrap';

class DatasetTitleComponent extends Component {

  render() {
    const dataset = this.props.dataset
    //console.log(dataset)
    //console.log(dataset.metadata.cell_number_light)
    //if(dataset.metadata.cell_number_light==null){
    //    const cell_num = dataset.metadata.cell_number
    //}
    //else{
    //    const cell_num = dataset.metadata.cell_number_light
    //}
	//console.log(dataset)
    //console.log(cell_num)
    return (
	<Box>

                       <MDBContainer fluid> 
	    <MDBRow>
                    <MDBCol md="10">
                          
                          <Typography variant="h2"> {dataset.title} 
	    <Box className="MuiTypography-colorTextSecondary" style={{ fontSize: "0.9rem", display: "inline"}}>  {dataset.metadata.cell_number} {dataset.metadata.col_name} | {dataset.metadata.gene_number} {dataset.metadata.row_name}</Box>
        
	    </Typography>
                        
	                 
                    </MDBCol>
	    
                    <MDBCol md="2">
                        {dataset.rel_datasets.datasets.length?  <Box>RELATED DATASETS <ExpandMoreIcon fontSize="large" id="togglerdatasets"/></Box>:<p></p>}
                    </MDBCol>
                </MDBRow>

                 
	    </MDBContainer>
                   {dataset.rel_datasets.datasets.length?
            <UncontrolledCollapse toggler="#togglerdatasets" className="center-col" style={{ overflowX: "hidden" }}>
       
		    <MDBContainer fluid style={{ marginTop: 20, marginLeft: 20 }}>
                
                            {dataset.rel_datasets.datasets.map(function(data,idx){
                                return(
			    <MDBRow key={"div"+idx}  >
				<MDBCol md="10" className="border-bottom" style={{ paddingLeft: 0, marginLeft: 0}} >
                                    <Typography key={"div_typo"+idx} gutterBottom variant="h3" component="h3"  className="result-title">
                                        <Link key={"div_typo_link"+idx} to={"/dataset/"+data.id}>{data.title} 
					
                                    <Typography key={"div_typo_info"+idx} variant="body2" color="textSecondary"   className="result-title">
                                        <span> - </span> {data.cell_number} {data.col_name} | {data.gene_number} {data.row_name}
                                    </Typography>
					</Link>
                                    </Typography>
			           </MDBCol>
                             </MDBRow>
                                )
                            })}
                        
		    </MDBContainer>
                   </UncontrolledCollapse>:null}
        </Box>
    );
  }
}

export default DatasetTitleComponent;
