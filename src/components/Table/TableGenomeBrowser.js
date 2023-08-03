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
      fixedHeader: {
            backgroundColor: "#FAFAFA",
            textTransform: "uppercase",
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
        //const rows = this.props.rows
        const rows = this.state.species
        console.log(this.state)
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
                    
                    <Box style={{width:200, maxWidth:240}}>{this.state.species[rowIndex].name}</Box>
                  
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
                    
                    <Box style={{width:200, maxWidth:240}}>{this.state.species[rowIndex].short}</Box>
                  
                  );
                }
            }
        }
        ];

        const options = {
            print: false,
            download: false,
            selectableRows: 'none',
        };
        return (
          <ThemeProvider theme={this.getMuiTheme()} >
            {this.state.loading ? <Spinner/> :
              <MUIDataTable 
                  data={rows}
                  columns={columns}
                  options={options}
              />
            }
          </ThemeProvider>
            // <Box>
            //   <Box ml="1%">	
            //     <Breadcrumbs/> 
            //   </Box>
            //   <Paper>
            //     <Box mx={4} mb={4} mt={-2}>
            //       {this.state.loading ? <Spinner/> : <TableComponent data={this.state.data} filters={this.state.filters} type={this.props.match.params.browse_by} />}
            //     </Box>
            //   </Paper>
            // </Box>

            // displayTable = (KeysToTable,key,rows) =>{
            //   return React.createElement(KeysToTable[key],{rows: rows})
            // }
            // render() {
            //   const KeysToTable ={
            //     studies:StudyTable,
            //     datasets:DatasetTable,
            //   }
            //   const rows = this.props.data
            //   return (
            //       <div>
            //         {this.displayTable(KeysToTable,this.props.type,rows)}
            //       </div>
    );
  }
}

export default withRouter(TableGenomeBrowserComponent);
