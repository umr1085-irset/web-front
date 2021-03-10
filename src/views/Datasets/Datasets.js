/*!

=========================================================
* SciLicium Genomics Platform v0.0.1
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
import {Spinner} from '../../components/Loading/LoadingComponent'

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';

class DatasetPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
          loading:true,
          loading2:true,
          browse_by:"",
          filters:null
        };
        this.getData = this.getData.bind(this)
      }
    
    async getData(){
        await trackPromise(
          axios.get("/api/v1/studies/public")
          .then(response => {
            this.setState({data : response.data}); 
            this.setState({loading : false});
            this.setState({loading2 : false});  
          })
          .catch(error => {
            toastOnError("Error loading public datasets");
          })
        )
      }

    async componentDidMount() {
      this.setState({browse_by : this.props.match.params.browse_by});
      this.getData()
    }
  

    callbackFunction = (key,val) => { 
      this.setState({ filters:{ [key]:val} })
    }

    displayFilter = (KeysToComponentDisplay,key,data,callback,filters) =>{
      return React.createElement(KeysToComponentDisplay[key],{key:"filterDisplay_by_"+key,data: data, parentCallback: callback, filters: filters})
    }

  render() {
    
    const col_names = {
      studies:[
        {
          label: 'ID',
          field: 'studyId',
        },
        {
          label: 'Title',
          field: 'title',
        },
        {
          label: 'Authors',
          field: 'authors',
        },
        {
          label: 'Publication date',
          field: 'pub_date',
        },
        {
          label: 'Topics',
          field: 'topics',
        },
        {
          label: 'Technology',
          field: 'technology',
        },
        {
          label: 'Species',
          field: 'species',
        },
        {
          label: 'Tissues',
          field: 'tissues',
        },
      ],
    datasets:[
        {
          label: 'ID',
          field: 'datasetId',
        },
        {
          label: 'Title',
          field: 'title',
        },
        {
          label: 'Type',
          field: 'type',
        },
        {
          label: 'Developmental stage',
          field: 'dev_stage',
        },
        {
          label: 'Species',
          field: 'species',
        },
        {
          label: 'Gender',
          field: 'gender',
        },
        {
          label: 'Tissues',
          field: 'tissues',
        },
      ]
    }
    

    

    const KeysToComponentDisplay = {
        datasets:FilterComponentDataset,
        studies:FilterComponentStudies,
        genomes:""

    };
    return (
          <MDBContainer className="mt-5">
            <Breadcrumbs/>
            <h2>Browse by {this.props.match.params.browse_by}</h2>
            <MDBRow>
                <MDBCol md="12">
                    {this.state.loading2 ? <Spinner/> : this.displayFilter(KeysToComponentDisplay,this.props.match.params.browse_by,this.state.data,this.callbackFunction,this.state.filters)}
                </MDBCol>
            </MDBRow>
            <MDBRow className="z-depth-1 filter-box mt-5">
                <MDBCol md="12">
                  {this.state.loading ? <Spinner/> : <TableComponent data={this.state.data} filters={this.state.filters} columns={col_names[this.props.match.params.browse_by]} type={this.props.match.params.browse_by} />}
                </MDBCol>
            </MDBRow>
          </MDBContainer>
    );
  }
}

export default withRouter(DatasetPage);