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

import { Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper, Box } from "@material-ui/core";
import { TableRow, TableCell} from "@material-ui/core";

class TableStudiesComponent extends Component {

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
      console.log(this.props.rows)
      const rows = this.props.rows
      const columns = [
        {
         name: "studyId",
         label: "Id",
         options: {
          filter: false,
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
                <Box style={{width:250, maxWidth:370}}><Link to={"/study/"+this.props.rows[rowIndex].studyId} className="primary">
                    {this.props.rows[rowIndex].title}
                </Link></Box>
              );
            }
          }
},

        {
          name: "description",
          label: "Description",
          options: {
            filter: false,
            sort: false,
            display: false,
	}
	},

        {
         name: "technology",
         label: "Technology",
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
         name: "experimentalDesign",
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
          name: "species",
          label: "Species",
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
          name: "dev_stage",
          label: "Dev. Stage",
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
          name: "biomaterialType",
          label: "Biomaterial type",
          options: {
           filter: true,
           sort: false,
	   display : false,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
          }
         },

         {
          name: "organs",
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
          name: "tissues",
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
          name: "pathology",
          label: "Topic",
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
         name: "nb_dataset",
         label: "Nb datasets",
         options: {
          filter: false,
          sort: false,
         }
        },
        {
         name: "authors",
         label: "Authors",
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
         name: "shorthand",
         label: "First author (et al)",
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
         name: "pub_date",
         label: "Pub. date",
         options: {
          filter: true,
          sort: false,
	  display:false,
          customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
         }
        },

        {
         name: "articlefull",
         label: "Article",
         options: {
          filter: true,
          sort: false,
	  display:true,

            customBodyRenderLite: (dataIndex, rowIndex) => {
              return (
                <a href={"https://pubmed.ncbi.nlm.nih.gov/"+this.props.rows[rowIndex].pmids} className="primary" target="_blank">
                    {this.props.rows[rowIndex].articlefull}
                </a>
              );
            }



	 }
        },
	      { name: "pmids",
          label: "PMID",
          options: {
           filter: true,
           sort: false,
	   display: false,
   
            customBodyRenderLite: (dataIndex, rowIndex) => {
              return (
               <a href={"https://pubmed.ncbi.nlm.nih.gov/"+this.props.rows[rowIndex].pmids} className="primary" target="_blank">
                    {this.props.rows[rowIndex].pmids}
                </a>
              );
            }
	      
   
          }
         },

       ];

       const options = {
         print: false,
         download: false,
         selectableRows:'none',
         filterType: 'dropdown',
	 expandableRows: true,
	 expandableRowsHeader: false,
	 renderExpandableRow: (rowData, rowMeta) => {
         //console.log(rowData, rowMeta);
	 const colSpan = rowData.length + 1;
         return (
	<TableRow>
		<TableCell colSpan={colSpan}>
		    {JSON.stringify(rowData[2])}
		 </TableCell>
        </TableRow>
	);

	 },	 
       };
    return (
	<ThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          data={rows}
          columns={columns}
          options={options}
          elevation={0}
        />
	   </ThemeProvider>
  
    );
  }
}

export default TableStudiesComponent;
