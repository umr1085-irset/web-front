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
import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';
import PlotComponent from "../Plots/PlotComponent"
import {Spinner} from '../Loading/LoadingComponent'


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,

} from "reactstrap";

import { MDBRow, MDBCol } from "mdbreact";

class MainGraphComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data: [],
          layout: [],
          config : [],
          frames : [],
          title : "",
          loading:true
        };
      }

      async componentDidMount() {
          const data_id = this.props.objid
          if (typeof(data_id) !== "undefined"){
            const url = this.props.data.url
            await trackPromise( axios
              .get(url+""+data_id)
              .then(response => {
                  this.setState(
                    {
                      data : response.data.chart.data, 
                      layout: response.data.layout,
                      frames: response.data.frames,
                      config: response.data.config,
                      title: response.data.title,
                      loading:false
                    });            
                })
                .catch(error => {
                  toastOnError(error);
                })
            )
          }
    }


    render() {
      return (
        <Card className="card-chart">
            <CardHeader>
                <MDBRow>
                    <MDBCol sm="6">
                        <h5 className="card-category">{this.props.title}</h5>
                    </MDBCol>
                </MDBRow>
            </CardHeader>
            <CardBody>
                <MDBRow>
                    <MDBCol md="8" sm="12" className="text-center">
                        {this.state.loading ? <Spinner/> : <PlotComponent data={this.state.data} layout={this.state.layout} frames={this.state.frames} config={this.state.config}/>}
                    </MDBCol>
                    <MDBCol md="8" sm="12">

                    </MDBCol>
                </MDBRow>
            </CardBody>
        </Card>
      );
    }
  }
  
export default MainGraphComponent;