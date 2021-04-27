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
import GeneExpPlotMenuComponent from './GeneExpressionMenuComponent'
import PlotComponent from "../Plots/PlotComponent"
import { Doughnut, Pie, HorizontalBar  } from 'react-chartjs-2';

import Divider from '@material-ui/core/Divider';
import { MDBCol, MDBRow } from "mdbreact";

import _ from 'lodash'

class GeneExpPlotComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          loading:true,
          filters:{
            ra:{},
            ca:{}
          },
          selector:{
            ra:{},
            ca:{}
          },
          attrs:"",
          gene_selection:"first",
          gene_list:[],
          chart_type: "",
        };
      }

    componentDidMount() {
        this.setState({chart_type:this.props.chart_type,filters:this.props.filters,selector:this.props.filters,attrs:this.props.attrs})
    }
    componentWillReceiveProps(nextProps) {
      if( nextProps.filters !== this.props.filters ){
        this.setState({filters:nextProps.filters})
        const new_selector = _.merge(nextProps.filters, this.state.selector);
        console.log("UPDATE SELECTOR")
        console.log(new_selector)
        this.setState({selector:new_selector})
      }
    }

    
    render() {
      return (
        <div>
          <MDBRow>
            <MDBCol md="12">
              <GeneExpPlotMenuComponent loom={this.props.loom} display_type={this.props.display_type} chart_type={this.state.chart_type} selector={this.state.selector} selected_attrs={this.props.attrs} attrs={this.props.all_attrs} setStateParent={(p, cb) => this.setState(p, cb)}/>
            </MDBCol>
          </MDBRow>
          <Divider />
          <MDBRow>
            <MDBCol md="12">
                display accoding menu selection (use displayPlot & KeysToComponentDisplay)
                {this.state.selector.ra.Symbol?
                  <ul>
                    {this.state.selector.ra.Symbol.map(function(gene,idx){
                      return(
                        <li key={idx}>{gene}</li>
                      )
                    })}
                </ul>
              :null  
              }
                
            </MDBCol>
          </MDBRow>
            
        </div>
      );
    }
  }
  
export default GeneExpPlotComponent;