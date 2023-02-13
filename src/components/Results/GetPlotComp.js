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


import { MDBCol, MDBRow } from "mdbreact";

class GetPlotComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          loading:true,
        };
      }

      async getDataPlot(url,id,style,attrs,filters,symbol,reduction){
        this.setState({loading:true});
        filters['reduction'] = reduction
        var plotData = {}
        if(style==='violin' || style==='density'){
          plotData={
            id:id,
            style:style,
            attrs:attrs,
            symbols:[symbol],
            filters:filters
          }
        } else{
          plotData={
            id:id,
            style:style,
            attrs:symbol,
            filters:filters
          }
        }
        await trackPromise(
          axios.post(url,plotData)
          .then(response => {
            this.setState({
              chart:response.data.chart,
              style:response.data.style,
              genes_menu:response.data.genes_menu,
              loading:false});
          })
          .catch(error => {
            toastOnError("Error loading dataset");
          })
        )
      }

      async componentDidMount() {
          this.getDataPlot(this.props.url,this.props.id,this.props.type,this.props.attrs,this.props.filters,this.props.gene)
      }

      componentWillReceiveProps(nextProps) {
        if( nextProps.filters !== this.props.filters || nextProps.attrs !== this.props.attrs || nextProps.type !== this.props.type  || nextProps.gene !== this.props.gene  ){
          this.getDataPlot(this.props.url,this.props.id,nextProps.type,nextProps.attrs,nextProps.filters,nextProps.gene)
        }
        
      }




    render() {
      //console.log(this.props.filters)
      return (
        <div className="spatialCollapse">
              {this.state.loading ? <Spinner/> : <PlotComponent data={this.state.chart.data} layout={this.state.chart.layout}/>} 
        </div>
      );
    }
  }
  
export default GetPlotComponent;
