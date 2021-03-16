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
import _ from 'lodash';

import { CardContent, CardHeader, Card} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import { MDBRow, MDBCol } from "mdbreact";

import update from 'immutability-helper'


class ResultsFilterLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attrs:undefined
        };
      }

    onTypeChangeCell = (event, values) => {
        this.props.setStateParent({
            filters: update(this.props.filters, {
                celltype: { $set: values },
            }),
        });
    }
    onTypeChangeGene = (event, values) => {
        this.props.setStateParent({
            filters: update(this.props.filters, {
                genes: { $set: values },
            }),
        });
    }

  render() {
    const genes = this.props.genes
    const cell_type = this.props.celltype
    return (
        <div>         
            <Card variant="outlined">
                <CardHeader title="Filters">
                    
                </CardHeader>
                <CardContent>
                    <MDBRow>
                        <MDBCol md="6" sm="12">
                            <Autocomplete
                                    id="gene"
                                    title="gene"
                                    size="small"
                                    onChange={this.onTypeChangeGene}
                                    options={genes}
                                    renderInput={(params) => (
                                    <TextField {...params} variant="standard" label="Filter by gene" placeholder="Filter by gene" />
                                    )}
                                />
                        </MDBCol>
                        <MDBCol md="6" sm="12">
                            <Autocomplete multiple
                                id="celltype"
                                title="celltype"
                                size="small"
                                onChange={this.onTypeChangeCell}
                                options={cell_type}
                                renderInput={(params) => (
                                <TextField {...params} variant="standard" label="Select cell type" placeholder="Select cell type" />
                                )}
                            />
                        </MDBCol>
                    </MDBRow>
                    
                    
                </CardContent>
            </Card>
        </div>
    );
  }
}

export default withRouter(ResultsFilterLayout);