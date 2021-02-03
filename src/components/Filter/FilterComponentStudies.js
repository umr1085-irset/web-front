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

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }

  onTitleChange = (event, values) => {
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
  onAuthorChange = (event, values) => {
    //this.setState({devstage: values})
    const title_val = _.map(values, 'author');
    this.props.parentCallback("author",title_val)
  }
  onPubdateChange = (event, values) => {
    //this.setState({gender: values})
    const title_val = _.map(values, 'pub_date');
    this.props.parentCallback("pub_date",title_val)
  }
  onPmidChange = (event, values) => {
    //this.setState({gender: values})
    const title_val = _.map(values, 'pmid');
    this.props.parentCallback("pmid",title_val)
  }
  onSpeciesChange = (event, values) => {
    //this.setState({gender: values})
    const title_val = _.map(values, 'species');
    this.props.parentCallback("species",title_val)
  }


  
  
  render() {

    const option = this.props.data

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
                              options={option}
                              getOptionLabel={(option) => option.title}
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
                              options={option}
                              onChange={this.onAuthorChange}
                              getOptionLabel={(option) => option.title}
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
                              options={option}
                              onChange={this.onPubdateChange}
                              getOptionLabel={(option) => option.title}
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
                              options={option}
                              onChange={this.onTechnoChange}
                              getOptionLabel={(option) => option.title}
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
                              options={option}
                              onChange={this.onSpeciesChange}
                              getOptionLabel={(option) => option.title}
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
                          options={option}
                          onChange={this.onTissuesChange}
                          getOptionLabel={(option) => option.title}
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
                          options={option}
                          onChange={this.onPmidChange}
                          getOptionLabel={(option) => option.title}
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