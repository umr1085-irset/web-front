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
    const genes = this.props.filters.genes
    const cell_type = this.props.filters.celltype
    return (
        <div>         
            <Card variant="outlined">
                <CardHeader title="Selected filters">
                    
                </CardHeader>
                <CardContent>                    
                    {genes ?
                        <Chip
                        icon={<CompareArrowsIcon />}
                        label={genes}
                        color="primary"
                        />
                    :<p>No selected gene</p>}
                    {cell_type ? 
                        cell_type.map(function(celltype,index){
                            return(<Chip
                                icon={<FingerprintIcon />}
                                color="primary"
                                label={celltype}
                                key={index}
                                />)
                        })
                    :<p>No selected cell type</p>}
                </CardContent>
            </Card>
        </div>
    );
  }
}

export default withRouter(SelectedFilterResults);