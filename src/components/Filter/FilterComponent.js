/*!

=========================================================
* SciLicium Genomics Platform v0.0.1
=========================================================

* Copyright 2021 SciLicium (https://www.scilicium.com)

* Coded by SciLicium
* Author: Thomas Darde

* TO DO:
  - Fit variables to dataset model
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import _ from 'lodash'
import { MDBRow, MDBCol } from "mdbreact"; 
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        collapseID: "",
        technology: [],
        type:[],
        tissues:[],
        devstage: [],
        gender: []
    };
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }

  setOption(array){
    const uniqueTechnology = [];
    const uniqueType = [];
    const uniqueTissue = [];
    const uniqueDevstage = [];
    const uniqueGender = [];
    array.map(obj => {
          uniqueTechnology.concat(obj.technology)
          uniqueType.concat(obj.type)
          uniqueTissue.concat(obj.tissue)
          uniqueDevstage.concat(obj.devstage)
          uniqueGender.concat(obj.gender)
    });
    const uniqOptions = {
      technology: _.uniqBy(uniqueTechnology),
      type: _.uniqBy(uniqueType),
      tissue: _.uniqBy(uniqueTissue),
      devstage: _.uniqBy(uniqueDevstage),
      gender: _.uniqBy(uniqueGender),
    }
    return(uniqOptions)
  }

  onTypeChange = (event, values) => {
    //this.setState({type: values})
    const title_val = _.map(values, 'title');
    this.props.parentCallback("title",title_val)
  }
  onTechnoChange = (event, values) => {
    //this.setState({technology: values})
    const title_val = _.map(values, 'technology');
    this.props.parentCallback("technology",title_val)
  }
  onTissuesChange = (event, values) => {
    //this.setState({tissues: values})
    const title_val = _.map(values, 'tissues');
    this.props.parentCallback("tissues",title_val)
  }
  onDevStageChange = (event, values) => {
    //this.setState({devstage: values})
    const title_val = _.map(values, 'devstage');
    this.props.parentCallback("devstage",title_val)
  }
  onGenderChange = (event, values) => {
    //this.setState({gender: values})
    const title_val = _.map(values, 'gender');
    this.props.parentCallback("gender",title_val)
  }


  
  
  render() {

    const option = this.setOption(this.props.data)

    return (
          <MDBRow>
            <MDBCol md="12" className="z-depth-1 my-2 align-middle filter-side-box">
              <MDBRow>
                  <MDBCol className="filter-side-box align-self-center" size="2">
                      <span>Filters</span>
                  </MDBCol>
                  <MDBCol size="10" className="py-2 filter-box align-self-center">
                    <MDBRow className="align-self-center">
                      <MDBCol className="align-self-center">
                        <Autocomplete
                              multiple
                              id="type"
                              title="type"
                              size="small"
                              onChange={this.onTypeChange}
                              options={option.type}
                              renderInput={(params) => (
                              <TextField {...params} variant="standard" label="type" placeholder="Type" />
                              )}
                          />
                      </MDBCol>
                      <MDBCol className="align-self-center">
                        <Autocomplete
                              multiple
                              id="technology"
                              size="small"
                              options={option.technology}
                              onChange={this.onTechnoChange}
                              renderInput={(params) => (
                              <TextField {...params} variant="standard" label="Technology" placeholder="Technology" />
                              )}
                          />
                      </MDBCol>
                      <MDBCol className="align-self-center">
                          <Autocomplete
                              multiple
                              id="tissues"
                              size="small"
                              options={option.tissue}
                              onChange={this.onTissuesChange}
                              renderInput={(params) => (
                              <TextField {...params} variant="standard" label="Tissues" placeholder="Tissues" />
                              )}
                          />
                      </MDBCol>
                      <MDBCol className="align-self-center">
                          <Autocomplete
                              multiple
                              id="devstage"
                              size="small"
                              options={option.devstage}
                              onChange={this.onDevStageChange}
                              renderInput={(params) => (
                              <TextField {...params} variant="standard" label="Developmental stage" placeholder="Developmental stage" />
                              )}
                          />
                      </MDBCol>
                      <MDBCol className="align-self-center">
                          <Autocomplete
                              multiple
                              id="gender"
                              size="small"
                              options={option.gender}
                              onChange={this.onGenderChange}
                              renderInput={(params) => (
                              <TextField {...params} variant="standard" label="Gender" placeholder="Gender" />
                              )}
                          />
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  
              </MDBRow>
            </MDBCol>
          </MDBRow>
    );
  }
}

export default FilterComponent;