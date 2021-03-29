import React, { Component } from "react";
import { Button, ButtonGroup,Divider, } from '@material-ui/core';

import { MDBRow, MDBCol, MDBCollapse  } from "mdbreact";

import HexaIcon from '../../assets/Icons/Hexa';
import HexaOutlinedIcon from '../../assets/Icons/HexaOutlined';
import HexaTwoToneIcon from '../../assets/Icons/HexaTwoTone';

class GraphSelector extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading:true
      };
    }


    render() {
    return (
        <div>
            <HexaIcon color="primary"></HexaIcon>
            <HexaOutlinedIcon color="primary"></HexaOutlinedIcon>
            <HexaTwoToneIcon color="primary"></HexaTwoToneIcon>

            <HexaIcon color="action"></HexaIcon>
            <HexaOutlinedIcon color="action"></HexaOutlinedIcon>
            <HexaTwoToneIcon color="action"></HexaTwoToneIcon>




            <ButtonGroup color="action" aria-label="outlined primary button group" >
                    <Button color="primary" style={{borderWidth: '2px'}}><HexaTwoToneIcon color="primary"></HexaTwoToneIcon></Button>
                    <Button><HexaTwoToneIcon color="action"></HexaTwoToneIcon></Button>
                    <Button><HexaTwoToneIcon color="action"></HexaTwoToneIcon></Button>
                </ButtonGroup>
                
            <ButtonGroup color="primary" variant="contained" disableElevation aria-label="outlined primary button group">
                    <Button><HexaTwoToneIcon tyle={{ color: "#ffffff" }}  fontSize="large"></HexaTwoToneIcon></Button>
                </ButtonGroup>

                <Divider  />	
        </div>

        );
    }
}
export default GraphSelector;
