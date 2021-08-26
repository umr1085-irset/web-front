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

import { MDBContainer } from "mdbreact";
import ResultsLayout from '../components/Results/ResultsLayoutHudeca'
import {Spinner} from '../components/Loading/LoadingComponent'

import axios from "axios";
import { toastOnError } from "../utils/Utils";
import { trackPromise } from 'react-promise-tracker';


class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
          loading:true,
          dataset:{},
        };
        this.getData = this.getData.bind(this)
      }
    
    async getData(id){
        await trackPromise(
          axios.get("/api/v1/datasets/"+id+"/view")
          .then(response => {
            this.setState({dataset:response.data});
            this.setState({loading:false});

          })
          .catch(error => {
            toastOnError("Error loading dataset Results");
          })
        )
      }

    async componentDidMount() {
      this.getData(this.props.match.params.did)
    }
  

  render() {
    return (
      <MDBContainer fluid className="mt-5">         
        {this.state.loading ? <Spinner/> : <ResultsLayout dataset={this.state.dataset} />}
      </MDBContainer>
    );
  }
}

export default withRouter(ResultsPage);