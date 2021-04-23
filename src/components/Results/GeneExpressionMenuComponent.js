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
import Typography from '@material-ui/core/Typography';

import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';
import {Spinner} from '../Loading/LoadingComponent'
import Switch from '@material-ui/core/Switch';
import GraphSelectorLight from './GraphSelectorLight'
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { MDBCol, MDBCollapse, MDBRow, MDBIcon } from "mdbreact";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

class GeneExpPlotMenuComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          loading:true,
          filters:{},
          scale: false,
          attrs:"clusters",
          gene_selection:"first",
          chart_type: "",
          genes_list: [],
          selector:{
            ra:{},
            ca:{}
          }
        };
      }

    
    handleChangeGeneSelection = (event) => {
        this.setState({gene_selection:event.target.value})
    };

    handleChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
    };

    state = {
        collapseID: ""
      }
      
    toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
    }


    render() {
     
        const genes = ['1','2','3','4','5','6',]
        return (
            <div className="mb-3">
                <MDBRow>
                    <MDBCol md="3">
                        <FormControl className="control-filter">
                            <InputLabel className="control-filter"  id="geneList">Gene(s) selection</InputLabel>
                            <Select className="control-filter"
                            labelId="geneList"
                            id="geneList"
                            defaultValue={this.state.gene_selection}
                            value={this.state.gene_selection}
                            onChange={this.handleChangeGeneSelection}
                            >
                            <MenuItem value="first" >first 10 genes</MenuItem>
                            <MenuItem value="variable" >top 10 variable genes</MenuItem>
                            <MenuItem value="custom" >My selection</MenuItem>
                            </Select>
                        </FormControl>
                    
                    </MDBCol>
                    {this.state.gene_selection==="custom"?
                        <MDBCol md="3">
                            <Typography variant="body2" color="textSecondary" component="p"  className="result-title">
                                Select gene(s)
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
                    :null}
                    <MDBCol md="3">
                        <a style={{ textTransform: 'capitalize' }} onClick={this.toggleCollapse("basicCollapse")}>{this.state.attrs} <MDBIcon className="ml-2" icon="angle-down" /></a>
                        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID} className="filtertools">
                        </MDBCollapse>
                    </MDBCol>
                    <MDBCol md="3">
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.scale}
                                    onChange={this.handleChange}
                                    name="scale"
                                    color="primary"
                                    label="Scale"
                                />
                            }
                            label="Scale "
                        />
                        
                    </MDBCol>
                </MDBRow>
                
            </div>
        );
    }
  }
  
export default GeneExpPlotMenuComponent;