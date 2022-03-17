import React, { Component } from "react";
import { Button,Divider, Typography, MenuItem } from '@material-ui/core';

import { MDBRow, MDBCol, MDBContainer  } from "mdbreact";


import Tooltip from '@material-ui/core/Tooltip';


class ReductionSelector extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading:true
      };
      this.updateGraph = this.updateGraph.bind(this)
    }


    updateGraph(reduc, event){
        console.log("updategraph reduc " + reduc)
        this.props.callbackUpdateGraphReduc(reduc)
    }

 


    render() {
      const reductions = this.props.reduc
      

      let reducList = reductions.map((reduc,idx)  => 
        
	      <MDBCol  key={this.props.name+"_2_col1_btn"+idx}>
            <MDBRow middle key={this.props.name+"_2_col1_r1"+idx}>
                    <Button onClick={(e) => this.updateGraph(reduc)}  id={this.props.name+"_2_btn"+idx} >{reduc}</Button>
             </MDBRow>
         
        </MDBCol>        
	      
    )

    return (
	<MDBContainer fluid>
            {reducList}
	   </MDBContainer>
          
       

        );
    }
}
export default ReductionSelector;
