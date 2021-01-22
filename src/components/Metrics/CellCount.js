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

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,

} from "reactstrap";

import { MDBRow, MDBCol } from "mdbreact";

    class CellCountComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          count: "",
          data_name:"",
        };
      }

    async componentDidMount() {
          const data_id = this.props.objid
          if (typeof(data_id) !== "undefined"){
            const url = this.props.data.url
            await trackPromise( axios
              .get(url+""+data_id)
              .then(response => {
                  this.setState({count : response.data.count, data_name: response.data.name });            
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
                    <MDBCol sm="12">
                        <h5 className="card-category">Cell count</h5>
                        <CardTitle tag="h2">{this.state.count}</CardTitle>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol sm="12">
                        <h5 className="card-category">Dataset</h5>
                        <CardTitle tag="h2">{this.state.data_name}</CardTitle>
                    </MDBCol>
                </MDBRow>
            </CardHeader>
            <CardBody>
                
            </CardBody>
        </Card>
      );
    }
  }
  
export default CellCountComponent;