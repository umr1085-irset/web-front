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
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import Chip from '@material-ui/core/Chip';
import FingerprintIcon from '@material-ui/icons/Fingerprint';




class SelectedFilterResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attrs:undefined,
            
        };
      }

  render() {
    const col_attributes = this.props.filters.ca
    const row_attributes = this.props.filters.ra
    console.log( this.props.filters)
    return (
        <div>         
            <Card variant="outlined">
                <CardHeader title="Selected filters">
                    
                </CardHeader>
                <CardContent>
                    {Object.entries(col_attributes).map(([key,value])=>{
                        return(
                            value.map(function(val,idx){
                                return(
                                    <Chip
                                        key={'col_'+idx}
                                        icon={<CompareArrowsIcon />}
                                        label={val}
                                        color="primary"
                                    />
                                )
                            })
                    )})
                    } 
                    {Object.entries(row_attributes).map(([key,value])=>{
                        return(
                            value.map(function(val,idx){
                                return(
                                    <Chip
                                        key={'row_'+idx}
                                        icon={<FingerprintIcon />}
                                        label={val}
                                        color="primary"
                                    />
                                )
                            })
                    )})
                    }                    
                </CardContent>
            </Card>
        </div>
    );
  }
}

export default withRouter(SelectedFilterResults);