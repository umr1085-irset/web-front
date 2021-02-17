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

import { MDBRow, MDBContainer, MDBCol, MDBTable, MDBTableBody } from "mdbreact";
import { Button, CardContent, CardHeader, Card} from '@material-ui/core';
import HexaTwoToneIcon from '../assets/Icons/HexaTwoTone';

import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

import axios from "axios";
import { toastOnError } from "../utils/Utils";
import { trackPromise } from 'react-promise-tracker';

class StudyPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
          loading:true,
          study:{},
        };
        this.getData = this.getData.bind(this)
      }
    
    async getData(id){
        await trackPromise(
          axios.get("/api/v1/studies/public"+ id )
          .then(response => {
            this.setState({study : response.data}); 
            this.setState({loading : false}); 
          })
          .catch(error => {
            toastOnError("Error loading study");
          })
        )
      }

    async componentDidMount() {
      //this.getData(this.props.match.params.sid)
    }
  

  render() {
    const datasets =[
        {title:"Dataset 1", nb_cell:2487, age:"7-12 PCW", technology: "AtacSeq", browser:true},
        {title:"Dataset 2", nb_cell:123487, age:"7-12 PCW", technology: "scRNA-seq"},
        {title:"Dataset 3", nb_cell:12598, age:"6-15 PCW", technology: "scRNA-seq"},
        {title:"Dataset 4", nb_cell:78954, age:"6-15 PCW", technology: "scRNA-seq"},
    ]
    return (
          <MDBContainer className="mt-5">         
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardHeader title={<Breadcrumbs/>}>
                            
                        </CardHeader>
                        <CardContent>
                            <h2>SINGLE CELL ANALYSIS OF BLABLABAL IN GONADAL DEVELOPMENT BASED ON BLABLA </h2>
                        </CardContent>
                    </Card>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardContent>
                            <MDBTable borderless>
                                <MDBTableBody>
                                    <tr>
                                        <td><b>Abstract</b></td>
                                        <td>Bioinformatics approaches are becoming ever more essential in translational drug discovery both in academia and within the pharmaceutical industry. Computational exploitation of the increasing volumes of data generated during all phases of drug discovery is enabling key challenges of the process to be addressed. Here, we highlight some of the areas in which bioinformatics resources and methods are being developed to support the drug discovery pipeline. These include the creation of large data warehouses, bioinformatics algorithms to analyse 'big data' that identify novel drug targets and/or biomarkers, programs to assess the tractability of targets, and prediction of repositioning opportunities that use licensed drugs to treat additional indications. </td>
                                    </tr>
                                    <tr>
                                        <td><b>Authors</b></td>
                                        <td>Sarah K Wooller, Graeme Benstead-Hume, Xiangrong Chen, Yusuf Ali, Frances M G Pearl</td>
                                    </tr>
                                    <tr>
                                        <td><b>Publication date</b></td>
                                        <td>2017 Jul 7</td>
                                    </tr>
                                    <tr>
                                        <td><b>Keywords</b></td>
                                        <td>computational biochemistry; drug discovery and design; genomics.</td>
                                    </tr>

                                </MDBTableBody>
                            </MDBTable>
                        </CardContent>
                    </Card>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md="12">
                    <Card variant="outlined">
                        <CardHeader title="Datasets"></CardHeader>
                        <CardContent>
                            <MDBTable>
                                <MDBTableBody>
                                {datasets.map(function(data, idx){
                                    return (
                                        <tr key={idx}>
                                            <td key={"title_"+idx}>{data.title}</td>
                                            <td key={"nb_cell_"+idx}>{data.nb_cell}</td>
                                            <td key={"age_"+idx}>{data.age}</td>
                                            <td key={"technology_"+idx}>{data.technology}</td>
                                            <td key={"btn_"+idx}>
                                                    <Button key={"display_btn"+idx} color="primary" style={{borderWidth: '2px'}}><HexaTwoToneIcon color="primary"></HexaTwoToneIcon></Button>
                                                    {data.browser? <Button key={"browse_btn"+idx}><HexaTwoToneIcon color="action"></HexaTwoToneIcon></Button> : <p></p>}
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
          </MDBContainer>
    );
  }
}

export default withRouter(StudyPage);