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

import update from 'immutability-helper'


class ResultsFilterLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attrs:undefined,
            filters:{}
        };
      }
        callbackFunction = (key,val) => { 
            this.setState(() => ({ filters: {[key]:val} }))
            console.log(this.state)
        }
      onTypeChange = (event, values,key) => {
        //  this.props.setStateParent({
        //      filters: update(this.props.filters, {
        //          [key]: { $set: values },
        //      }),
        //  });
        console.log(event, values,key)
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
                                <MDBCol md="6">
                                    <Autocomplete multiple
                                        key={idx}
                                        limitTags={2}
                                        id={filter.name}
                                        title={filter.name}
                                        size="small"
                                        onChange={(event, newValue) => {
                                            console.log(filter.name)
                                            console.log(newValue);
                                          }}
                                        options={filter.values}
                                        renderInput={(params) => (
                                        <TextField key={'TF_'+idx} {...params} variant="outlined" label={"Filter by "+ filter.name} placeholder={"Filter by "+ filter.name} />
                                        )}
                                    />
                                </MDBCol>
                            )
                        },this)}
 
                    </MDBRow>
                </CardContent>
            </Card>
        </div>
    );
  }
}

export default withRouter(ResultsFilterLayout);