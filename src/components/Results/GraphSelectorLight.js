import React, { Component } from "react";
import { Button,Divider, Typography, MenuItem } from '@material-ui/core';
import { MDBRow, MDBCol, MDBContainer  } from "mdbreact";
import Tooltip from '@material-ui/core/Tooltip';


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

    render() {
      const attributes = this.props.attrs['ca']
      const display_type = 'scatter'

      let tagList = attributes.map((attribute,idx)  => 
        <MDBCol  key={this.props.name+"_2_col1_btn"+idx}>
            <MDBRow middle key={this.props.name+"_2_col1_r1"+idx}>
                    <Button onClick={(e) => this.updateGraph(attribute)}  id={this.props.name+"_2_btn"+idx} >{attribute}</Button>
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
