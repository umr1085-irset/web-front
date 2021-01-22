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
import "../../assets/scss/black-dashboard-react/custom/utilities/_sizing.scss"
import axios from "axios";

import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';
import {Spinner} from '../Loading/LoadingComponent'


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,

} from "reactstrap";

import { MDBRow, MDBCol } from "mdbreact";
import { Doughnut, Pie } from 'react-chartjs-2';

class SexRepartitionComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          chart: [],
          plot_type:"",
          reader:"",
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
                      chart : response.data.chart, 
                      plot_type: response.data.plot_type,
                      reader: response.data.reader,
                      loading:false
                    });            
                })
                .catch(error => {
                  toastOnError(error);
                })
            )
          }
    }

    displayPlot = (plot_type,reader,KeysToComponentDisplay,data) =>{
      return React.createElement(KeysToComponentDisplay[reader][plot_type],{key:"SexRepartitionComponent_plot_"+reader+"__"+plot_type ,data: data})
    }

    render() {
      const KeysToComponentDisplay = {
        chartjs: {
          pie:Pie,
          doughnut:Doughnut
        },
      };

      return (
        <Card className="card-chart">
            <CardHeader>
                <MDBRow>
                    <MDBCol sm="6">
                        <h5 className="card-category">Sex repartition</h5>
                    </MDBCol>
                </MDBRow>
            </CardHeader>
            <CardBody>
              {this.state.loading ? <Spinner/> : this.displayPlot(this.state.plot_type,this.state.reader,KeysToComponentDisplay,this.state.chart) }
            </CardBody>
        </Card>
      );
    }
  }
  
export default SexRepartitionComponent;