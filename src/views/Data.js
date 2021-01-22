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
import axios from "axios";
import { toastOnError } from "../utils/Utils";
import { trackPromise } from 'react-promise-tracker';

import RenderCard from "../utils/JsonRenderer";
import {Spinner} from '../components/Loading/LoadingComponent'


// reactstrap components

import { MDBContainer } from "mdbreact";

class DataPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          page_config: [],
          did:"",
          loading:true,
        };
        this.getData = this.getData.bind(this)
      }
    
    async getData(did){
        
        await trackPromise( axios
        .get("/api/v1/data/"+did)
        .then(response => {
            const resp_data = response.data[0]
            this.setState({page_config : resp_data.config_page});
            this.setState({loading: false})            
          })
          .catch(error => {
            toastOnError(error);
          })
        )
    }

    componentDidMount(){
            this.setState({did: this.props.match.params.did})
            this.getData(this.state.did)
    }

    
    
  render() {
  
    return (
          <MDBContainer className="mt-5">
              {this.state.loading ? <Spinner/> : this.state.page_config.map(config => RenderCard(config, this.state.did)) }
          </MDBContainer>
    );
  }
}

export default DataPage;