import React, { Component } from "react";
import { Button,Divider, Typography, MenuItem } from '@material-ui/core';

import { MDBRow, MDBCol, MDBContainer  } from "mdbreact";


import Tooltip from '@material-ui/core/Tooltip';

import BarchartIcon from '../../assets/Icons/Barchart';
import PieIcon from '../../assets/Icons/PieTwoTone';
import ScatterPlotIcon from "../../assets/Icons/ScatterPlot";
import HexbinIcon from "../../assets/Icons/Hexa";
import DensityIcon from "../../assets/Icons/Curves";



class GraphSelectorLight extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading:true
      };
      this.updateGraph = this.updateGraph.bind(this)
    }


    updateGraph(attr, chart_type, event){
        this.props.callbackUpdateGraph(attr, chart_type)
    }

    displayIcon = (plot_type,KeysToIconDisplay,key) =>{
        return React.createElement(KeysToIconDisplay[plot_type],{key:key ,fontSize:"large"})
    }



    render() {
      const attributes = this.props.attrs['ca']
      const display_type = this.props.display_type
      
      const KeysToIconDisplay = {
        pie:PieIcon,
        bar:BarchartIcon ,
        scatter:ScatterPlotIcon,
        hexbin:HexbinIcon,
        density:DensityIcon
    };

      let tagList = attributes.map((attribute,idx)  => 
        
	      <MDBCol  key={this.props.name+"_col1_btn"+idx}>
            <MDBRow middle key={this.props.name+"_col1_r1"+idx}>
                <MDBCol key={this.props.name+"_col1_r1_col1"+idx} style={{ textTransform: 'capitalize' }} className="d-flex align-items-center border-bottom py-2">
                    {attribute} : 
                </MDBCol>
                {display_type.map((type,idxt) =>
                    <MDBCol  key={this.props.name+"_col1_r1_col2"+idxt} className="border-bottom py-2">
                        <Tooltip title={type} aria-label={type} key={type+"_col1_r1_col2_tool"+idxt}>
                            <Button onClick={(e) => this.updateGraph(attribute, type)}  id={this.props.name+"_barchart_btn"+idxt} variant="outlined" color="primary">{this.displayIcon(type,KeysToIconDisplay,this.props.name+"_col1_r1_col2_tool_btn_hex"+idxt)}</Button>
                        </Tooltip>
                    </MDBCol>
                )}
            </MDBRow>
           
        </MDBCol>        
	      
    )

    return (
	<MDBContainer fluid>
            {tagList}
	   </MDBContainer>
          
       

        );
    }
}
export default GraphSelectorLight;
