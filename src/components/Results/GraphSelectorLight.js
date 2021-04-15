import React, { Component } from "react";
import { Button,Divider} from '@material-ui/core';

import { MDBRow, MDBCol, MDBContainer  } from "mdbreact";


import Tooltip from '@material-ui/core/Tooltip';

import BarIcon from '../../assets/Icons/Barchart';
import PieIcon from '../../assets/Icons/PieTwoTone';

class GraphSelectorLight extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading:true
      };
      this.updateGraph = this.updateGraph.bind(this)
    }

    updateGraph2(event){ 
        console.log(event.currentTarget.value)
        console.log(event.currentTarget.value[0])
        console.log(event.currentTarget.value[1])
        //this.props.callbackUpdateGraph(event.currentTarget.value,)
    }

    updateGraph(attr, chart_type, event){
        this.props.callbackUpdateGraph(attr, chart_type)
    }


    render() {
      const attributes = this.props.attrs
      let tagList = attributes.map((attribute,idx)  => 
        <MDBCol md="12" className="mt-2" key={this.props.name+"_col1_btn"+idx}>
            <MDBRow middle key={this.props.name+"_col1_r1"+idx}>
                <MDBCol md="6" className="mb-2" key={this.props.name+"_col1_r1_col1"+idx}>
                    {attribute}
                </MDBCol>
                <MDBCol md="2" className="mb-2" key={this.props.name+"_col1_r1_col2"+idx}>
                    <Tooltip title="barchart" aria-label="barchart" key={this.props.name+"_col1_r1_col2_tool"+idx}>
                        <Button onClick={(e) => this.updateGraph(attribute, "bar")}  id={this.props.name+"_barchart_btn"+idx} variant="outlined" color="primary"><BarIcon key={this.props.name+"_col1_r1_col2_tool_btn_hex"+idx}  fontSize="large"></BarIcon></Button>
                    </Tooltip>
                </MDBCol>
                <MDBCol md="2" className="mb-2" key={this.props.name+"_col1_r1_col2_pie"+idx}>
                    <Tooltip title="pie" aria-label="pie" key={this.props.name+"_col1_r1_col2_tool_pie"+idx}>
                        <Button onClick={(e) => this.updateGraph(attribute, "pie")}  id={this.props.name+"_pie_btn"+idx} variant="outlined" color="primary"><PieIcon key={this.props.name+"_col1_r1_col2_tool_btn_hex_pie"+idx}  fontSize="large"></PieIcon></Button>
                    </Tooltip>
                </MDBCol>
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
