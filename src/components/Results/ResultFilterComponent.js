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

import { CardContent, CardHeader, Card, Box, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { createFilterOptions } from '@material-ui/lab/Autocomplete';

import TextField from '@material-ui/core/TextField';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import update from 'immutability-helper'
import { UncontrolledCollapse } from 'reactstrap';

class ResultsFilterLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
	    filter_by: this.props.filters_keys["ca"][0],
	    filter_by_ca2: this.props.filters_keys["ca"][1],
        filter_by_ra: this.props.filters_keys["ra"][0],	   
            collapseID: "",
            attrs:undefined,
            filters:{
                ra:{},
                ca:{},
                reduction:''
            }
        };
      }

    applyFilters = () => {
        this.props.setStateParent({
            filters: update(this.props.filters, {$set: this.state.filters}),
        });
    }

    handleChangeFilterBy = (event) => {
        this.setState({filter_by:event.target.value})
    };
   handleChangeFilterByCa2 = (event) => {
	 this.setState({filter_by_ca2:event.target.value})
   };

    handleChangeReductionBy = (event) => {
        this.setState({reduction:event.target.value})
    };



    getDefaultValues = (attr,name) => {
        const val = this.state.filters[attr][name]
        if(val === undefined){
            return([])
        }
        return(val)
    }

  render() {
	const filterOptions = createFilterOptions({
		ignoreCase : false,
		stringify : (option) => String(option)

	});
	
	const filterOptions2 = createFilterOptions({
		ignoreCase : false,
		stringify : (option) => String(option)

	});
        const filters_keys = this.props.filters_keys
        const filter = this.props.metadata
        const reductions = this.props.reductions
        const header=(
            <div>
                <span className="MuiCardHeader-title">Filter</span>
                <Button variant="outlined" color="primary" style={{float: 'right'}} onClick={this.applyFilters}>
                    Apply filter(s)
                </Button>
            </div>
        )
        
    return (

	 
        <div style={{ marginTop: 16 }}>         
	    {/*  title={header} */}
                    
               <MDBContainer fluid className="border-top" pt={4} >
               
                 <MDBRow>
	                <MDBCol md="1" style={{ backgroundColor: "#FAFAFA" }} className="d-flex align-items-center border-bottom"><div style={{ color: "#666666", fontSize: "0.9rem", fontFamily: "QuickSand" }}>FILTERS</div></MDBCol>
                        
                   
                    
                <MDBCol md="5" className="align-middle border-right border-bottom py-2">
	    		<MDBRow>
	    		 <MDBCol md="4">
                            <FormControl className="control-filter align-middle">
                                <InputLabel className="control-filter align-middle" id="demo-simple-select-label2">Cell metadata</InputLabel>
                                <Select className="control-filter"
                                    labelId="demo-simple-select-label2"
                                    id="demo-simple-select2"
                                    value={this.state.filter_by}
	    			    defaultValue = {this.state.filter_by}
                                    onChange={this.handleChangeFilterBy}
                                >
                                {filters_keys['ca'].map(function(filter, idx){
                                    return(<MenuItem value={filter} key={idx}>{filter}</MenuItem>)
                                })}
                                </Select>
                            </FormControl>
			</MDBCol>
	                 <MDBCol md="8">
				
	    {this.state.filter_by?
                      
                            <Autocomplete multiple
                                className="control-filter-large"
                                limitTags={3}
                                id={this.state.filter_by}
                                title={this.state.filter_by}
		                filterOptions = {filterOptions} 
                                size="small"
                                value={this.getDefaultValues(filter[this.state.filter_by]['attributes'],filter[this.state.filter_by]['name'])}
                                onChange={(event, newValue) => {
                                    if (newValue.length==0){
                                        this.setState({
                                            filters: update(this.state.filters, {
                                                [filter[this.state.filter_by]['attributes']]:{$unset: [filter[this.state.filter_by]['name']]},
                                            }),
                                        });
                                    } else {
                                        this.setState({
                                            filters: update(this.state.filters, {
                                                [filter[this.state.filter_by]['attributes']]:{[filter[this.state.filter_by]['name']]: {$set: newValue}},
                                            }),
                                        });
                                    }
                                    }}
                                options={ filter[this.state.filter_by]['values'] }
                                renderInput={(params) => (
                                <TextField  {...params} label={"Select "+ this.props.metadata[this.state.filter_by]['name']} />
                                )}
                            />
		    :    <Box></Box>  }
                      
			</MDBCol>
	 	 </MDBRow>

	


	    </MDBCol>
          <MDBCol md="5" className="border-right border-bottom py-2">
	  		  <MDBRow>
	                 <MDBCol md="4">
                                <FormControl className="control-filter">
                                    <InputLabel className="control-filter" id="demo-simple-select-label3">.</InputLabel>
                                    <Select className="control-filter"
                                    labelId="demo-simple-select-label3"
                                    id="demo-simple-select3"
                                    value={this.state.filter_by_ca2}
	    		            defaultValue={this.state.filter_by_ca2}
                                    onChange={this.handleChangeFilterByCa2}
                                    >
                                    {filters_keys['ca'].map(function(filter, idx){
                                        return(<MenuItem value={filter} key={idx}>{filter}</MenuItem>)
                                    })}
                                    </Select>
                                </FormControl>

		</MDBCol>
	    <MDBCol md="8">
                            {this.state.filter_by_ca2?
                       
                                <Autocomplete multiple
                                    limitTags={3}
				    className="control-filter-large"
                                    id={this.state.filter_by_ca2}
                                    title={this.state.filter_by_ca2}
				    filterOptions={filterOptions2}
                                    size="small"
                                    value={this.getDefaultValues(filter[this.state.filter_by_ca2]['attributes'],filter[this.state.filter_by_ca2]['name'])}
                                    onChange={(event, newValue) => {
                                        if (newValue.length==0){
                                            this.setState({
                                                filters: update(this.state.filters, {
                                                    [filter[this.state.filter_by_ca2]['attributes']]:{$unset: [filter[this.state.filter_by_ca2]['name']]},
                                                }),
                                            });
                                        } else {
                                            this.setState({
                                                filters: update(this.state.filters, {
                                                    [filter[this.state.filter_by_ca2]['attributes']]:{[filter[this.state.filter_by_ca2]['name']]: {$set: newValue}},
                                                }),
                                            });
                                        }
                                        }}
                                    options={filter[this.state.filter_by_ca2]['values']}
                                    renderInput={(params) => (
                                    <TextField  {...params} label={"Select "+ this.props.metadata[this.state.filter_by_ca2]['name']} />
                                    )}
                                />
                             : null }
				</MDBCol>
	   			 </MDBRow>
          </MDBCol>           

	 <MDBCol md="1" className="d-flex align-items-center border-bottom py-2">
	    
                <Button variant="contained" color="primary" style={{float: 'right'}} onClick={this.applyFilters}>
                    Apply
                </Button>
	    
	    </MDBCol>
                        </MDBRow>
                 
              
            </MDBContainer>
        </div>
    );
  }
}

export default withRouter(ResultsFilterLayout);
