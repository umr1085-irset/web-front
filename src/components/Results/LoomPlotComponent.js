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

import { Doughnut, Pie, Bar } from 'react-chartjs-2';

// reactstrap components
import { CardContent, CardHeader, Card} from '@material-ui/core';


import { MDBRow, MDBCol, MDBCollapse, MDBIcon } from "mdbreact";

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
            this.setState({
              chart:response.data.chart,
              style:response.data.style,
              loading:false});
          })
          .catch(error => {
            toastOnError("Error loading dataset");
          })
        )
      }

      async componentDidMount() {
          this.getDataPlot(this.props.url,this.props.loom,this.props.style,this.props.attrs)
      }

      state = {
        collapseID: ""
      }
      
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      }

      displayPlot = (plot_type,KeysToComponentDisplay,data) =>{
        if(plot_type === "scatter"){
          return React.createElement(KeysToComponentDisplay[plot_type],{key:"plot_"+plot_type ,data: data.data, layout:data.layout})
        } else {
          return React.createElement(KeysToComponentDisplay[plot_type],{key:"plot_"+plot_type ,data: data})
        }
        
      }

    render() {
      const KeysToComponentDisplay = {
          pie:Pie,
          doughnut:Doughnut,
          bar:Bar,
          scatter:PlotComponent
      };
      return (
        <Card className="card-chart">
            <CardHeader title={<a onClick={this.toggleCollapse("basicCollapse")}><MDBIcon icon="cog"  /></a>}>
              
              
            </CardHeader>
            <CardContent>
              <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
              </MDBCollapse>
              {this.state.loading ? <Spinner/> : this.displayPlot(this.state.style,KeysToComponentDisplay,this.state.chart)}
            </CardContent>
        </Card>
      );
    }
  }
  
export default LoomPlotComponent;