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
import { Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import { Button,} from '@material-ui/core';
import axios from "axios";

import { Box } from "@material-ui/core";

var fileDownload = require('js-file-download');
class TableDatasetsComponent extends Component {
  constructor(props) {
    super(props);
    this.downloadDataset = this.downloadDataset.bind(this)
  }
  
  async downloadDataset(id) {
        console.log('/api/v1/datasets/'+id+'/download')
        axios.get('/api/v1/datasets/'+id+'/download', { 
            responseType: 'blob',
        }).then(res => {
            fileDownload(res.data, id+'.zip');
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
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
               fontSize: "1rem",
	       color: "black",
	          }

	        },
	    MUIDataTableHeadCell: {
		 fixedHeader: {
	         backgroundColor: "#FAFAFA",
	         textTransform: "uppercase"
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
      const rows = this.props.rows
      //console.log(this.props.rows)
      const columns = [
       {
         name: "datasetId",
         label: "Id",
         options: {
          filter: true,
          sort: false,
          display: false,
         }
        },
        {
          name: "title",
          label: "Title",
          options: {
            filter: true,
            sort: false,
            customBodyRenderLite: (dataIndex, rowIndex) => {
              return (
                
                <Box style={{width:200, maxWidth:240}}><Link to={"/dataset/"+this.props.rows[rowIndex].datasetId} className="primary">
                    {this.props.rows[rowIndex].title}
                </Link></Box>
		      
              );
            }
          }
        },
      	      
        {
         name: "loomColInfo",
         label: "Nb",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "omics",
         label: "Omics",
         options: {
          filter: true,
          sort: false,
          display: false,
 
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
         }
        },
        {
          name: "technology",
          label: "Technology",
          options: {
           filter: true,
           sort: false,
	   display: false,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
        /*	
            customBodyRenderLite: (dataIndex, rowIndex) => {
              return (
                <span>
                    {this.props.rows[rowIndex].sop.technology[0]?.displayLabel}
                </span>
              );
            }*/
          }
         },

        {
         name: "resolution",
         label: "Resolution",
         options: {
          filter: true,
          sort: false,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
         }
        },


        {
         name: "techno_description",
         label: "Assay",
         options: {
          filter: true,
          sort: false,
         }
        },


        {
         name: "expProcess"
         label: "Experimental design",
         options: {
          filter: true,
          sort: false,
          display: true,
 
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
         }
        },

        {
         name: "molecules",
         label: "Molecules applied",
         options: {
          filter: true,
          sort: false,
	  display: true,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
         }
        },


	      {
          name:"sex",
          label: "Sex",
          options: {
           filter: true,
           sort: false,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
          }
         },

        
         {
          name: "species",
          label: "Species",
          options: {
           filter: true,
           sort: false,
           display: false,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
          }
         },


         {
          name: "organ",
          label: "Biomaterial from",
          options: {
           filter: true,
           sort: false,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
          }
         },


         {
          name: "tissue",
          label: "Biomaterial entity",
          options: {
           filter: true,
           sort: false,
           display: false,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
          }
         },
        
         {
          name: "developmentStage",
          label: "Dev. Stage",
          options: {
           filter: true,
           sort: false,
	   display: false,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
          }
         },

         {
          name: "ageRange",
          label: "Age",
          options: {
           filter: true,
           sort: false,
          }
         },

         {
          name: "diseaseStage",
          label: "Disease stage",
          options: {
           filter: true,
           sort: false,
           display: false,
          }
         },

	//         {
        //  name: "id",
        //  label: "Download",
        //  options: {
          //  filter: false,
          //  sort: false,
       //   customBodyRenderLite: (dataIndex, rowIndex) => {
         //   return (
     //   <Button onClick={() => {this.downloadDataset(this.props.rows[rowIndex].datasetId)}} variant="contained" color="primary" className='p-2'>
    //              Download
     //        </Button>
      //      );
       //   }
         // }
       //  },
       ];

       const options = {
         print: false,
         download: false,
	 selectableRows: 'none',
       };
    return (
        <ThemeProvider theme={this.getMuiTheme()} >
        <MUIDataTable 
          data={rows}
          columns={columns}
          options={options}
        />
  	</ThemeProvider>
    );
  }
}

export default TableDatasetsComponent;
