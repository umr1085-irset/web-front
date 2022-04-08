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

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';


import update from 'immutability-helper'


class AutocompleteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            filters:{
                genes:"",
                celltype:""
        
            }
        };
      }

    onTypeChange = (event, values,key) => {
        // this.props.setStateParent({
        //     filters: update(this.props.filters, {
        //         [key]: { $set: values },
        //     }),
        // });
        console.log(key)
    }

    async getData(id,key,value){
        await trackPromise(
          axios.get("/api/v1/datasets/"+id+"/filters?key="+key+"&value="+value)
          .then(response => {
            this.setState({
              options:response.data.values,
              loading:false});
          })
          .catch(error => {
            toastOnError("Error loading dataset");
          })
        )
      }

    async componentDidMount() {
        this.getData(this.props.id,this.props.indexCR,this.props.value)
    }

  render() {
    const name = this.props.value
    return (
        <div>
        {this.state.loading? <div></div> :
            <Autocomplete
                id={name}
                title={name}
                size="small"
                onChange={this.onTypeChange("test")}
                options={this.state.options}
                renderInput={(params) => (
                <TextField {...params} variant="standard" label={"Filter by "+ name} placeholder={"Filter by "+ name} />
                )}
            />}
        </div>
);
  }
}

export default withRouter(AutocompleteComponent);