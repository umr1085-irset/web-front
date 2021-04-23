import React, { Component } from "react";
import { Button,Divider} from '@material-ui/core';

import { MDBRow, MDBCol, MDBContainer  } from "mdbreact";


import Tooltip from '@material-ui/core/Tooltip';

import BarchartIcon from '../../assets/Icons/Barchart';
import PieIcon from '../../assets/Icons/PieTwoTone';
import ScatterPlotIcon from "../../assets/Icons/ScatterPlot";
import HexbinIcon from "../../assets/Icons/Hexa";


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
      console.log(attributes)
      const display_type = this.props.display_type
      
      const KeysToIconDisplay = {
        pie:PieIcon,
        bar:BarchartIcon ,
        scatter:ScatterPlotIcon,
        hexbin:HexbinIcon,
        //density:DensityIcon
    };

      let tagList = attributes.map((attribute,idx)  => 
        <MDBCol md="12" className="mt-2" key={this.props.name+"_col1_btn"+idx}>
            <MDBRow middle key={this.props.name+"_col1_r1"+idx}>
                <MDBCol md="6" className="mb-2" key={this.props.name+"_col1_r1_col1"+idx} style={{ textTransform: 'capitalize' }}>
                    {attribute}
                </MDBCol>
                {display_type.map((type,idxt) =>
                    <MDBCol md="2" className="mb-2" key={this.props.name+"_col1_r1_col2"+idxt}>
                        <Tooltip title={type} aria-label={type} key={type+"_col1_r1_col2_tool"+idxt}>
                            <Button onClick={(e) => this.updateGraph(attribute, type)}  id={this.props.name+"_barchart_btn"+idxt} variant="outlined" color="primary">{this.displayIcon(type,KeysToIconDisplay,this.props.name+"_col1_r1_col2_tool_btn_hex"+idxt)}</Button>
                        </Tooltip>
                    </MDBCol>
                )}
            </MDBRow>
            <Divider/>
        </MDBCol>        
    )

    return (
        <MDBContainer>
          <MDBRow middle>
            {tagList}
          </MDBRow>
        </MDBContainer>

        );
    }
}
export default GraphSelectorLight;
