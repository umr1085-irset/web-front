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
import { withRouter  } from "react-router-dom";

import { MDBRow, MDBContainer, MDBCol } from "mdbreact";

import TableComponent from '../../components/Table/TableComponent'
import FilterComponentDataset from '../../components/Filter/FilterComponent'
import FilterComponentStudies from '../../components/Filter/FilterComponentStudies'

import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';

const data = [
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},
    {title: 'Single-cell RNA sequencing to explore immune cell heterogeneity ',author: 'Efthymia Papalexi', pub_date: "2017", technology: "Transcriptomics|Proteomics", species:"Human", pmid: "123456",tissue:"liver|kidney"},

  ]

  const column_data = [
    { Header: 'Title',accessor: 'title'},
    { Header: 'Author',accessor: 'author'},
    { Header: 'Publication date',accessor: 'pub_date'},
    { Header: 'Technology',accessor: 'technology'},
    { Header: 'Species',accessor: 'species'},
    { Header: 'Pmid',accessor: 'pmid'},
    { Header: 'Tissue',accessor: 'tissue'},

  ]

class DatasetPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
          data_scatter:[],
          browse_by:"",
          type:[],
          tissues: [],
          technology:[],
          pmid: [],
          title: [],
          author:[],
          pub_date:[],
          devstage:[],
          gender: []
        };
        this.getData = this.getData.bind(this)
      }
    
    async getData(){
      await trackPromise(
        axios.get("/api/v1/datasets/public")
        .then(response => {
          this.setState({data_scatter : response.data}); 
        })
        .catch(error => {
          toastOnError("Error loading public datasets");
        })
      )
    }

    callbackFunction = (key,val) => { 
      this.setState({ [key]: val })
    }

    componentDidMount(){
      this.setState({browse_by : this.props.match.params.browse_by});
      this.getData()
    }
    displayFilter = (KeysToComponentDisplay,key,data,callback) =>{
      return React.createElement(KeysToComponentDisplay[key],{key:"filterDisplay_by_"+key,data: data, parentCallback: callback})
    }
  render() {
  
    const KeysToComponentDisplay = {
        datasets:FilterComponentDataset,
        studies:FilterComponentStudies,
        genomes:""

    };
    return (
          <MDBContainer className="mt-5">
            <h2>Browse by {this.state.browse_by}</h2>
            <MDBRow>
                <MDBCol md="12">
                    {this.displayFilter(KeysToComponentDisplay,this.props.match.params.browse_by,data,this.callbackFunction)}
                </MDBCol>
            </MDBRow>
            <MDBRow className="z-depth-1 filter-box mt-5">
                <MDBCol md="12">
                    <TableComponent columns={column_data} data={data}/>
                </MDBCol>
            </MDBRow>
          </MDBContainer>
    );
  }
}

export default withRouter(DatasetPage);