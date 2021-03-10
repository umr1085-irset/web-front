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
import { CardContent, CardHeader, Card} from '@material-ui/core';


import { MDBRow, MDBCol } from "mdbreact";

class LoomPlotComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          loading:true
        };
      }

      async getDataPlot(url,id,style,attrs){
        this.setState({loading:true});
        await trackPromise(
          axios.get(url+"?id="+id+"&style="+style+"&attrs="+attrs)
          .then(response => {
            this.setState({plot:response.data});
            this.setState({loading:false});

          })
          .catch(error => {
            toastOnError("Error loading dataset");
          })
        )
      }

      async componentDidMount() {
          this.getDataPlot(this.props.url,this.props.loom,this.props.style)
      }


    render() {
      return (
        <Card className="card-chart">
            <CardContent>
                <MDBRow>
                    <MDBCol md="12" sm="12" className="text-center">
                        {this.state.loading ? <Spinner/> : <PlotComponent data={this.state.plot.chart.data} layout={this.state.plot.chart.layout} frames={this.state.plot.chart.frames} config={this.state.plot.chart.config}/>}
                    </MDBCol>
                </MDBRow>
            </CardContent>
        </Card>
      );
    }
  }
  
export default LoomPlotComponent;