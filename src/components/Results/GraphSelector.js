import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { Button,Divider} from '@material-ui/core';

import { MDBRow, MDBCol, MDBContainer  } from "mdbreact";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import Tooltip from '@material-ui/core/Tooltip';

import HexaIcon from '../../assets/Icons/Hexa';
import CurveIcon from '../../assets/Icons/Curves';
import ScatterIcon from '../../assets/Icons/ScatterPlot';

class GraphSelector extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading:true
      };
    }


    render() {
      const genes = this.props.genes_menu
    return (
        <MDBContainer>
          <h4>Graph parameters</h4>
          <Divider  />
          <MDBRow>
            <MDBCol md="12">
              <Typography variant="body2" color="textSecondary" component="p"  className="result-title">
                  Chart view
              </Typography>
              <MDBRow>
                <MDBCol md="2">
                  <Tooltip title="Scatter plot" aria-label="scatter">
                    <Button variant="outlined" color="primary"><ScatterIcon  fontSize="large"></ScatterIcon></Button>
                  </Tooltip>
                </MDBCol>
                <MDBCol md="2">
                  <Tooltip title="Hexabin plot" aria-label="hexabin">
                    <Button variant="outlined" color="primary"><HexaIcon  fontSize="large"></HexaIcon></Button>
                  </Tooltip>
                </MDBCol>
                <MDBCol md="2">
                  <Tooltip title="Density plot" aria-label="density">
                    <Button variant="outlined" color="primary"><CurveIcon  fontSize="large"></CurveIcon></Button>
                  </Tooltip>
                </MDBCol>
              </MDBRow>             
            </MDBCol>
          </MDBRow>

          <MDBRow className="mt-4">
              <MDBCol md="12">
                <Typography variant="body2" color="textSecondary" component="p"  className="result-title">
                    Select gene
                </Typography>
                <MDBRow className="mt-3">
                  <MDBCol md="6">
                    <Autocomplete multiple
                        limitTags={2}
                        id="genes"
                        title="genes"
                        size="small"
                        onChange={(event, newValue) => {
                            // this.props.setStateParent({
                            //     filters: update(this.props.filters, {
                            //         [filter.attributes]:{[filter.name]: {$set: newValue}},
                            //     }),
                            // });
                            console.log(newValue)
                          }}
                        options={genes}
                        renderInput={(params) => (
                        <TextField  {...params} variant="outlined" label="Select genes" placeholder="Select genes" />
                        )}
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCol>
          </MDBRow>
        </MDBContainer>

        );
    }
}
export default GraphSelector;
