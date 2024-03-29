/*!

=========================================================
* SciLicium Genomics Platform v0.0.1
=========================================================

* Copyright 2021 SciLicium (https://www.scilicium.com)

* Coded by SciLicium
* Author: Thomas Darde

* TO DO:
  - Fit variables to study model
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import _ from 'lodash'

import { MDBRow, MDBCol, MDBCollapse } from "mdbreact"; 
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


class FilterComponentStudies extends Component {
  constructor(props) {
    super(props);
    this.state = {
        collapseID: "",
        title: [],
        author:[],
        pub_date:[],
        technology:[],
        species: [],
        tissues:[],
        pmid: []
    };
  }
  setOption(array){
    const uniqueTitle = [];
    const uniqueAuthor = [];
    const uniquePub_date = [];
    const uniqueTechnology = [];
    const uniqueSpecies = [];
    const uniqueTissues = [];
    const uniquePmid = [];
    array.map(obj => {
        const authors = (obj.authors.includes(',') ? obj.authors.split(',') : [obj.authors] )
        console.log(authors)
        uniqueTitle.push(obj.title)
        uniqueAuthor.push.apply(uniqueAuthor,authors)
        uniquePub_date.push.apply(uniquePub_date,obj.pub_date)
        uniqueTechnology.push.apply(uniqueTechnology,obj.technology)
        uniqueSpecies.push.apply(uniqueSpecies,obj.species)
        uniqueTissues.push.apply(uniqueTissues,obj.tissues)
        uniquePmid.push.apply(uniquePmid,obj.pmids)
    });
    const uniqOptions = {
      title: _.uniqBy(uniqueTitle),
      author: _.uniqBy(uniqueAuthor),
      pub_date: _.uniqBy(uniquePub_date),
      technology: _.uniqBy(uniqueTechnology),
      species: _.uniqBy(uniqueSpecies),
      tissues:_.uniqBy(uniqueTissues),
      pmid: _.uniqBy(uniquePmid)
    }
    return(uniqOptions)
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }

  filterPlainArray(array, filters) {
    if(filters===null) return array
    const getValue = value => (typeof value === 'string' ? value.toUpperCase() : value);
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
      // validates all filter criteria
      return filterKeys.every(key => {
        // ignores an empty filter
        if (!filters[key].length) return true;
        return filters[key].find(filter => getValue(filter) === getValue(item[key]));
      });
    });
  }

  onTitleChange = (event, values) => {
    this.props.parentCallback("title",values)
  }
  onTechnoChange = (event, values) => {
    this.props.parentCallback("technology",values)
  }
  onTissuesChange = (event, values) => {
    this.props.parentCallback("tissues",values)
  }
  onAuthorChange = (event, values) => {
    this.props.parentCallback("authors",values)
  }
  onPubdateChange = (event, values) => {
    this.props.parentCallback("pub_date",values)
  }
  onPmidChange = (event, values) => {
    this.props.parentCallback("pmids",values)
  }
  onSpeciesChange = (event, values) => {
    this.props.parentCallback("species",values)
  }


  
  
  render() {
    const data = this.filterPlainArray(this.props.data,this.props.filters)
    const option = this.setOption(data)
    return (
      <>
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
                              id="title"
                              size="small"
                              onChange={this.onTitleChange}
                              options={option.title}
                              renderInput={(params) => (
                              <TextField {...params} variant="standard" label="Title" placeholder="Title" />
                              )}
                          />
                      </MDBCol>
                      <MDBCol className="align-self-center">
                        <Autocomplete
                              multiple
                              id="author"
                              size="small"
                              options={option.author}
                              onChange={this.onAuthorChange}
                              renderInput={(params) => (
                              <TextField {...params} variant="standard" label="Author" placeholder="Author" />
                              )}
                          />
                      </MDBCol>
                      <MDBCol className="align-self-center">
                          <Autocomplete
                              multiple
                              id="pub_date"
                              size="small"
                              options={option.pub_date}
                              getOptionLabel={(option) => option.toString()}
                              onChange={this.onPubdateChange}
                              renderInput={(params) => (
                              <TextField {...params} variant="standard" label="Publication date" placeholder="Publication date" />
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
                              id="species"
                              size="small"
                              options={option.species}
                              onChange={this.onSpeciesChange}
                              renderInput={(params) => (
                              <TextField {...params} variant="standard" label="Species" placeholder="Species" />
                              )}
                          />
                      </MDBCol>
                      <MDBCol className="align-self-center">
                      <span className="highlight-text" onClick={this.toggleCollapse("basicCollapse")}>more filters</span>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  
              </MDBRow>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-2 filter-box z-depth-1">
            <MDBCol md="12">
              <MDBCollapse className="" id="basicCollapse" isOpen={this.state.collapseID}>
                <MDBRow className="py-2">
                  <MDBCol>
                      <Autocomplete
                          multiple
                          id="tissues"
                          size="small"
                          options={option.tissues}
                          onChange={this.onTissuesChange}
                          renderInput={(params) => (
                          <TextField {...params} variant="standard" label="Tissue" placeholder="Tissue" />
                          )}
                      />
                  </MDBCol>
                  <MDBCol>
                      <Autocomplete
                          multiple
                          id="pmid"
                          size="small"
                          options={option.pmid}
                          getOptionLabel={(option) => option.toString()}
                          onChange={this.onPmidChange}
                          renderInput={(params) => (
                          <TextField {...params} variant="standard" label="Pmid" placeholder="Pmid" />
                          )}
                      />
                  </MDBCol>
                </MDBRow>
              </MDBCollapse>
            </MDBCol>
          </MDBRow>
      </>
    );
  }
}

export default FilterComponentStudies;