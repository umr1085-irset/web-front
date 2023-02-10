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
import GenomicDisplayComponent from './GenomicDisplayComponent'
import VerticalTabs from "./GenomicScatterOneTab"
import Divider from '@material-ui/core/Divider';
import { MDBCol, MDBRow } from "mdbreact";


class GeneExpPlotComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          loading:true,
          filters:{
            ra:{},
            ca:{},
            reduction:''
          },
          selector:{
            ra:{},
            ca:{}
          },
          attrs:"",
          gene_selection:"first",
          gene_list:[],
          chart_type: "",
          scale: false,
        };
      }

    componentDidMount() {
        this.setState({chart_type:this.props.chart_type,filters:this.props.filters,selector:this.props.filters,selected_attrs:this.props.attrs,reductions:this.props.reductions})
    }
    componentWillReceiveProps(nextProps) {
      if( nextProps.filters !== this.props.filters || nextProps.chart_type !== this.state.chart_type){
        this.setState({filters:nextProps.filters})
        this.setState({selector:nextProps.filters})
        this.setState({chart_type:nextProps.chart_type})
      }
    }
    callbackUpdateGraph = (key,val) => {
      console.log('callbackupdategraph')
      console.log(key,val)
      this.setState({[key]:val})
    }

    displayPlot = (plot_type,KeysToComponentDisplay,data) =>{
        return React.createElement(KeysToComponentDisplay[plot_type],{key:"plot_"+plot_type ,data: data.data, layout:data.layout})
    }

    
    render() {

      const element = (
        <MDBRow>
          <MDBCol md="6" sm="12" className="colDivider">
            <VerticalTabs selector={this.state.selector} type={this.state.chart_type} url={this.props.url} loom={this.props.loom} selected_attrs={this.state.selected_attrs}  scale={this.props.scale} />
          </MDBCol>
          <MDBCol md="6" sm="12">
            <VerticalTabs selector={this.state.selector} type={this.state.chart_type} url={this.props.url} loom={this.props.loom} selected_attrs={this.state.selected_attrs}  scale={this.props.scale} />
          </MDBCol>
        </MDBRow>
      )
      return (
        <div>
          <MDBRow>
            <MDBCol md="12">
              <GeneExpPlotMenuComponent scale={this.props.scale} loom={this.props.loom} display_type={this.props.display_type} chart_type={this.state.chart_type} selector={this.state.selector} filters={this.state.filters} selected_attrs={this.props.selected_attrs} attrs={this.props.all_attrs} reductions={this.state.reductions} setStateParent={(p, cb) => this.setState(p, cb)} callbackUpdateGraph={this.callbackUpdateGraph}/>
            </MDBCol>
          </MDBRow>
          <Divider />
          <MDBRow>
            <MDBCol md="12">
              {this.state.chart_type==="scatter" || this.state.chart_type==="violin" || this.state.chart_type==="density" ?
                this.state.selector.ra.Symbol?
                element:null
                :
                <GenomicDisplayComponent url={this.props.url} loom={this.props.loom} type={this.props.chart_type} scale={this.state.scale} chart_type={this.state.chart_type} selector={this.state.selector} selected_attrs={this.state.selected_attrs} style={{ height: 800}} />
              }     
            </MDBCol>
          </MDBRow>
            
        </div>
      );
    }
  }
  
export default GeneExpPlotComponent;
