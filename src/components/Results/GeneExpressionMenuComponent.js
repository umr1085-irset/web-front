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

import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';
import {Spinner} from '../Loading/LoadingComponent'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { MDBCol, MDBRow } from "mdbreact";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Button, ButtonGroup} from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';


import ScatterPlotIcon from "../../assets/Icons/ScatterPlot";
import ScatterPlotIconDouble from "../../assets/Icons/ScatterPlotOutlined";
import HexbinIcon from "../../assets/Icons/Hexa";
import DensityIcon from "../../assets/Icons/Curves";
import DotPlotIcon from "../../assets/Icons/DotPlot";
import ViolinIcon from "../../assets/Icons/ViolinPlot";
import Chip from '@material-ui/core/Chip';


import update from 'immutability-helper'


class GeneExpPlotMenuComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          loading:true,
          selector:{
            ra:{},
            ca:{}
          },
          filters:{
            ra:{},
            ca:{}
          },
          input:"",
          scale: false,
          method:"first",
          chart_type: "",
          genes:[],
          url:"/api/v1/dataset/genes/",
        };
        this.handleDelete = this.handleDelete.bind(this)
        this.updateGraph = this.updateGraph.bind(this)
      }
    
    async getGenes(id,selector){
        this.setState({loading:true});
        const genes={
          id:id,
          filters:selector
        }
        await trackPromise(
          axios.post(this.state.url,genes)
          .then(response => {
            this.setState({
              genes:response.data.genes,
              loading:false});
          })
          .catch(error => {
            toastOnError("Error loading genes");
          })
        )
      }
    
    async getSelectedGenes(id,selector,method){
        const genes={
          id:id,
          method:method,
          filters:selector
        }
        await trackPromise(
          axios.post(this.state.url,genes)
          .then(response => {
            this.setState({selector:{ra:{Symbol:response.data.genes}}})
            this.props.setStateParent({
                selector: update(this.props.selector, {
                    ra:{Symbol: {$set: response.data.genes}},
                }),
            })
          })
          .catch(error => {
            toastOnError("Error loading genes");
          })
        )
      }
    
    handleChangeGeneSelection = (event) => {
        this.setState({method:event.target.value})
        if(event.target.value==="custom"){
            this.setState({selector:{ra:{Symbol:[]}}})
            this.props.setStateParent({
                selector: update(this.props.selector, {
                    ra:{Symbol: {$set: []}},
                }),
            })
        } else{
            this.getSelectedGenes(this.props.loom,this.props.selector,event.target.value)
        }
    };

    handleChangeAttributes = (event) => {
        this.setState({selected_attrs: event.target.value });
        this.props.callbackUpdateGraph("selected_attrs",event.target.value)
    };
    handleChange = (event) => {
        console.log(event.target.checked)
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
        this.props.callbackUpdateGraph("scale",event.target.checked)
    };
    handleDelete = (gene) => () => {
        var index = this.state.selector.ra.Symbol.indexOf(gene)
        if (index !== -1) {
            this.state.selector.ra.Symbol.splice(index, 1);
            this.props.setStateParent({
                selector: update(this.props.selector, {
                    ra:{Symbol: {$set: this.state.selector.ra.Symbol}},
                }),
            });
        }
        
    }
    componentDidMount() {
        this.setState({
            display_type:this.props.display_type,
            chart_type:this.props.chart_type,
            selector:this.props.selector,
            selected_attrs:this.props.selected_attrs,
            attrs:this.props.attrs,
            scale:this.props.scale,
        })
        this.getSelectedGenes(this.props.loom,this.props.selector,this.state.method)
        this.getGenes(this.props.loom,this.props.selector)
        
    }

    componentWillReceiveProps(nextProps) {
        if( nextProps.filters !== this.props.filters ){
                this.getGenes(this.props.loom,nextProps.selector)
                if(this.state.method !== "custom"){
                    this.getSelectedGenes(this.props.loom,nextProps.selector,this.state.method)
                }
        }
        
    }
    addgene = () =>{
        if(this.state.selector.ra.Symbol.indexOf(this.state.input) === -1 ){
            this.setState({selector:{ra:{Symbol:this.state.selector.ra.Symbol.concat(this.state.input)}}})
            this.props.setStateParent({
                selector: update(this.props.selector, {
                    ra:{Symbol: {$push: [this.state.input]}},
                }),
            });
            this.setState({input:""})
        }
        
    
    }

    displayIcon = (plot_type,KeysToIconDisplay,key) =>{
        return React.createElement(KeysToIconDisplay[plot_type],{key:key ,fontSize:"large"})
    }

    updateGraph(chart, event){
        this.props.callbackUpdateGraph("chart_type",chart)
    }

    render() {
        const KeysToIconDisplay = {
            scatter:ScatterPlotIcon,
            hexbin:HexbinIcon,
            density:DensityIcon,
            violin:ViolinIcon,
            dot:DotPlotIcon,
            scatter_d:ScatterPlotIconDouble
        };
        const display_type = this.props.display_type
        const attributes = this.props.attrs['ca']
        const default_value = this.props.selected_attrs
        return (
            <div className="mb-3">
                <MDBRow>
                    <MDBCol md="3">
                        <FormControl className="control-filter">
                            <InputLabel className="control-filter"  id="geneList">Gene(s) selection</InputLabel>
                            <Select className="control-filter"
                            labelId="geneList"
                            id="geneList"
                            defaultValue={this.state.method}
                            value={this.state.method}
                            onChange={this.handleChangeGeneSelection}
                            >
                            <MenuItem value="first" >first 10 genes</MenuItem>
                            <MenuItem value="variance" >top 10 variable genes</MenuItem>
                            <MenuItem value="custom" >My selection</MenuItem>
                            </Select>
                        </FormControl>
                    
                    </MDBCol>
                    <MDBCol md="3">
                        <FormControl className="control-filter">
                            <InputLabel className="control-filter"  id="selected_attrs">Display by</InputLabel>
                            <Select  className="control-filter"
                            labelId="selected_attrs"
                            id="selected_attrs"
                            defaultValue={default_value}
                            onChange={this.handleChangeAttributes}
                            >
                            {attributes.map(function(attr,a_idx){
                                return(
                                    <MenuItem key={"mn_a_"+a_idx} value={attr} >{attr}</MenuItem>
                                )
                            })}
                            </Select>
                        </FormControl>
                    
                    </MDBCol>
                    <MDBCol md="3">
                        {display_type.map((type,idxt) =>
                            <ButtonGroup className="mb-2" key={this.props.name+"_col1_r1_col2"+idxt}>
                                <Tooltip title={type} aria-label={type} key={type+"_col1_r1_col2_tool"+idxt}>
                                    <Button onClick={(e) => this.updateGraph(type)} id={this.props.name+"_barchart_btn"+idxt} variant="outlined" color="primary">{this.displayIcon(type,KeysToIconDisplay,this.props.name+"_col1_r1_col2_tool_btn_hex"+idxt)}</Button>
                                </Tooltip>
                            </ButtonGroup>
                        )}
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
                {this.state.selector.ra.Symbol?
                    <MDBRow className="mt-3">
                        {this.state.gene?<Spinner/> :
                            
                            <MDBCol md="3">
                                <MDBRow>
                                    <MDBCol md="6">
                                        <Autocomplete
                                            limitTags={2}
                                            id="genes"
                                            title="genes"
                                            size="small"
                                            onChange={(event, newValue) => {
                                                this.setState({input:newValue})
                                            }}
                                            options={this.state.genes}
                                            renderInput={(params) => (
                                            <TextField  {...params} label="Select genes" placeholder="Select genes" />
                                            )}
                                        />
                                    </MDBCol>
                                   
                                    <MDBCol md="4">
                                        {this.state.input === ""?
                                            <Button variant="outlined" color="primary" disabled>Add gene</Button>:
                                            <Button onClick={this.addgene} variant="outlined" color="primary">Add gene</Button>
                                        }
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                           
                        }
                        <MDBCol md="9">
                            {this.state.selector.ra.Symbol.map(function(gene,idx){
                                return(
                                    <Chip
                                        key={'row_'+idx}
                                        label={gene}
                                        color="primary"
                                        onDelete={this.handleDelete(gene)}
                                    />
                                )
                            },this)}
                        </MDBCol>
                    </MDBRow>
                    :null
                }
                    
            </div>
        );
    }
  }
  
export default GeneExpPlotMenuComponent;