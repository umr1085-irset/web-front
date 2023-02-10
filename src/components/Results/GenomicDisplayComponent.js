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
import { MDBCol, MDBRow } from "mdbreact";


class GenomicDisplayComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
            loading:true,
            chart:null,
            selected_attrs:"",
            chart_type: "pie",
            reduction:'',
            selector:{
              ra:{},
              ca:{}
            },
          };
      }

      async getDataPlot(url,id,style,attrs,filters){
	console.log(attrs);
        if(attrs){
          this.setState({loading:true,chart:null});
          const plotData={
            id:id,
            style:style,
            attrs:attrs,
            filters:filters
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

      }

      async componentDidMount() {
          this.setState({chart_type:this.props.chart_type,scale:this.props.scale,selector:this.props.selector,selected_attrs:this.props.selected_attrs,selector:this.props.filters})
          this.getDataPlot(this.props.url,this.props.loom,this.props.chart_type,this.props.selected_attrs,this.props.selector)
      }

      componentWillReceiveProps(nextProps) {
        if( nextProps.chart_type !== this.props.chart_type || nextProps.selected_attrs !== this.props.selected_attrs  ){
          this.setState({chart_type:nextProps.chart_type,scale:this.props.scale,selector:this.props.selector,selected_attrs:nextProps.selected_attrs,selector:nextProps.filters})
          this.getDataPlot(this.props.url,this.props.loom,nextProps.chart_type,nextProps.selected_attrs,this.props.selector)
        }
        
      }

      displayPlot = (plot_type,KeysToComponentDisplay,data) =>{
          return React.createElement(KeysToComponentDisplay[plot_type],{key:"plot_"+plot_type ,data: data.data, layout:data.layout})
      }

    
    render() {
      const KeysToComponentDisplay = {
        violin:PlotComponent,
        hexbin:PlotComponent,
        dot:PlotComponent,
	density:PlotComponent
      };
      return (
          <MDBRow>
            <MDBCol md="12">
                {this.state.loading ? <Spinner/> : this.displayPlot(this.state.style,KeysToComponentDisplay,this.state.chart)}  
            </MDBCol>
          </MDBRow>
      );
    }
  }
  
export default GenomicDisplayComponent;
