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

import { CardContent, CardHeader, Card} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { MDBRow, MDBCol } from "mdbreact";
import { Button} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import update from 'immutability-helper'


class ResultsFilterLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: "",
            attrs:undefined,
            filters:{
                ra:{},
                ca:{}
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

    getDefaultValues = (attr,name) => {
        console.log(attr,name)
        console.log(this.state.filters)
        const val = this.state.filters[attr][name]
        console.log(val)
        if(val === undefined){
            return([])
        }
        return(val)
    }


  render() {
        const filters_keys = this.props.filters_keys
        const filter = this.props.metadata
        const header=(
            <div>
                <span className="MuiCardHeader-title">Filter(s)</span>
                <Button variant="outlined" color="primary" style={{float: 'right'}} onClick={this.applyFilters}>
                    Apply filter(s)
                </Button>
            </div>
        )
        
    return (
        <div>         
            <Card variant="outlined">
                <CardHeader title={header}>
                    
                </CardHeader>
                <CardContent>
                    <MDBRow>
                        <MDBCol md="6">
                            <FormControl className="control-filter">
                                <InputLabel className="control-filter" id="demo-simple-select-label">Filter by</InputLabel>
                                <Select className="control-filter"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.filter_by}
                                onChange={this.handleChangeFilterBy}
                                >
                                {filters_keys.map(function(filter, idx){
                                    return(<MenuItem value={filter} key={idx}>{filter}</MenuItem>)
                                })}
                                </Select>
                            </FormControl>
                        </MDBCol>                   
                        {this.state.filter_by?
                        <MDBCol md="6">
                            <Autocomplete multiple
                                limitTags={1}
                                id={this.state.filter_by}
                                title={this.state.filter_by}
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
                                options={filter[this.state.filter_by]['values']}
                                renderInput={(params) => (
                                <TextField  {...params} variant="outlined" label={"Filter by "+ this.props.metadata[this.state.filter_by]['name']} placeholder={"Filter by "+ this.props.metadata[this.state.filter_by]['name']} />
                                )}
                            />
                        </MDBCol> : null }
                     </MDBRow>
                </CardContent>
            </Card>
        </div>
    );
  }
}

export default withRouter(ResultsFilterLayout);