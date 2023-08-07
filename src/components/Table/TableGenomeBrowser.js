/*!

=========================================================
* SciLicium Platform v0.0.1
=========================================================

* Copyright 2021 SciLicium (https://www.scilicium.com)

* Coded by SciLicium
* Author: Thomas Darde

* TO DO:
  - Fit datatable to data (accordding dataset or studies)
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"; 
import {Spinner} from '../../components/Loading/LoadingComponent'
import { withRouter  } from "react-router-dom";

import { Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import { Button,} from '@material-ui/core';
import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';

import { Box } from "@material-ui/core";
import { MDBCol, MDBIcon, MDBRow, MDBContainer} from "mdbreact";


import susScr3 from '../../assets/img/species/susScr3.png'
import rn6 from '../../assets/img/species/rn6.png'
import rheMac8 from '../../assets/img/species/rheMac8.png'
import mm10 from '../../assets/img/species/mm10.png'
import hg38 from '../../assets/img/species/hg38.png'
import galGal5 from '../../assets/img/species/galGal5.png'
import danRer10 from '../../assets/img/species/danRer10.png'
import canFam3 from '../../assets/img/species/canFam3.png'
import bosTau8 from '../../assets/img/species/bosTau8.png'

class TableGenomeBrowserComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={
      loading:true,
      species:null
    };
  }
  
  async getGenomeData(){
    this.setState({loading:true})
    const url = "/api/v1/public/genomebrowser";
    await trackPromise(
      axios.get(url)
      .then(response => {
        console.log('3')
        this.setState({
            species:response.data,
            loading:false});
        console.log('4')
      })
      .catch(error => {
        toastOnError("Error loading genome browser list");
      })
    )
  }

  async componentDidMount() {
      this.getGenomeData()
  }

  getMuiTheme = () => createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          textTransform: "none"
        },
        elevation4: {
          boxShadow: "none"
        },
      },
      MUIDataTableBodyCell: {
        root: {
          fontSize: "0.8rem",
          color: "black",
        }
      },
        MUIDataTableHeadCell: {
          toolButton: {
            justifyContent: 'center'
          },
          fixedHeader: {
                backgroundColor: "#FAFAFA",
                textTransform: "none",
                fontSize: "0.7em"
          }
        },
        MUIDataTableSelectCell : {
          headerCell: {
                background: "#DFEFEE",
          backgroundColor: "#DFEFEE"
        }
        }
          }
    })
    
  render() {
        const rows = this.state.species
        //const species = this.state.species
        console.log(this.state)

        const map1 = new Map();
        map1.set('susScr3',susScr3);
        map1.set('rn6',rn6);
        map1.set('rheMac8',rheMac8);
        map1.set('mm10',mm10);
        map1.set('hg38',hg38);
        map1.set('galGal5',galGal5);
        map1.set('danRer10',danRer10);
        map1.set('canFam3',canFam3);
        map1.set('bosTau8',bosTau8);

        const columns = [
        {
            name: "genome",
            label: "Genome",
            options: {
                filter: true,
                sort: false,
                display: true,
                // customBodyRender: (value, tableMeta, updateValue) => (
                //   value.join(", ")
                // )
                customBodyRenderLite: (dataIndex, rowIndex) => {
                  return (

                    <img src={map1.get(rows[rowIndex].short)} height="50" title={rows[rowIndex].name} alt={rows[rowIndex].name}></img>

                  );
                }
            }
        },
        {
            name: "release",
            label: "UCSC genome release",
            options: {
                filter: true,
                sort: false,
                display: true,
                // customBodyRender: (value, tableMeta, updateValue) => (
                //   value.join(", ")
                // )
                customBodyRenderLite: (dataIndex, rowIndex) => {
                  return (
                    
                    <Box style={{width:200, maxWidth:240}}>{rows[rowIndex].short}</Box>
                  
                  );
                }
            }
        },
        {
          name: "jbrowse",
          label: "RGV Genome Browser",
          options: {
              filter: true,
              sort: false,
              display: true,
              // customBodyRender: (value, tableMeta, updateValue) => (
              //   value.join(", ")
              // )
              customBodyRenderLite: (dataIndex, rowIndex) => {
                return (
                  
                  //<Box style={{width:200, maxWidth:240}}>{this.state.species[rowIndex].short}</Box>
                  //<a class="btn btn-info"href="{{species[rowIndex].rgv_url}}">
                  <Button variant="contained" color='primary' href={rows[rowIndex].rgv_url} target="_blank">
                    <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                  </Button>
                );
              }
          }
      }
        ];

        const options = {
            print: false,
            download: false,
            filter: false,
            selectableRows: 'none',
            search: false
        };

        return (
          <MDBRow>
            <MDBCol md="1"></MDBCol>
            <MDBCol md="10">
              <ThemeProvider theme={this.getMuiTheme()} >
                {this.state.loading ? <Spinner/> :
                  <MUIDataTable 
                      data={rows}
                      columns={columns}
                      options={options}
                  />
                }
              </ThemeProvider>
            </MDBCol>
            <MDBCol md="1"></MDBCol>
          </MDBRow>
    );
  }
}

export default withRouter(TableGenomeBrowserComponent);
