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
import { MDBRow, MDBCol,MDBCollapse } from "mdbreact";

import update from 'immutability-helper'


class ResultsFilterLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: "",
            attrs:undefined,
            filters:{
                row_attributes:{},
                col_attributes:{}
            }
        };
      }

    onTypeChange = (event, values,key) => {
          
        console.log(event, values,key)
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

  render() {
        let subset_visible = this.props.metadata.slice(0, 2)
        let subset_hidden = this.props.metadata.slice(2, this.props.metadata.length)
    return (
        <div>         
            <Card variant="outlined">
                <CardHeader title="Filters">
                    
                </CardHeader>
                <CardContent>
                    <MDBRow>
                        {subset_visible.map(function(filter,idx){
                            return(
                                <MDBCol key={'col_'+idx} md="6">
                                    <Autocomplete multiple
                                        key={idx}
                                        limitTags={1}
                                        id={filter.name}
                                        title={filter.name}
                                        size="small"
                                        onChange={(event, newValue) => {
                                            this.props.setStateParent({
                                                filters: update(this.props.filters, {
                                                    [filter.attributes]:{[filter.name]: {$set: newValue}},
                                                }),
                                            });
                                          }}
                                        options={filter.values}
                                        renderInput={(params) => (
                                        <TextField key={'TF_'+idx} {...params} variant="outlined" label={"Filter by "+ filter.name} placeholder={"Filter by "+ filter.name} />
                                        )}
                                    />
                                </MDBCol>
                            )
                        },this)}
                    <MDBCol className="align-self-center">
                      <span className="highlight-text" onClick={this.toggleCollapse("filterCollapse")}>more filters</span>
                    </MDBCol>
                    </MDBRow>
                    <MDBCollapse className="" id="filterCollapse" isOpen={this.state.collapseID}>
                        <MDBRow>
                            {subset_hidden.map(function(filter,idx){
                                return(
                                    <MDBCol key={'colH_'+idx} md="6" className="mt-3">
                                        <Autocomplete multiple
                                            key={"hiddenFilter_"+idx}
                                            limitTags={1}
                                            id={filter.name}
                                            title={filter.name}
                                            size="small"
                                            onChange={(event, newValue) => {
                                                this.props.setStateParent({
                                                    filters: update(this.props.filters, {
                                                        [filter.attributes]:{[filter.name]: {$set: newValue}},
                                                    }),
                                                });
                                              }}
                                            options={filter.values}
                                            renderInput={(params) => (
                                            <TextField key={'TFH_'+idx} {...params} variant="outlined" label={"Filter by "+ filter.name} placeholder={"Filter by "+ filter.name} />
                                            )}
                                        />
                                    </MDBCol>
                                )
                            },this)}
                        </MDBRow>
                    </MDBCollapse>
                </CardContent>
            </Card>
        </div>
    );
  }
}

export default withRouter(ResultsFilterLayout);