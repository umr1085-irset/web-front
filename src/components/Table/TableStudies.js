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


class TableStudiesComponent extends Component {
  render() {
      const rows = this.props.rows
      const columns = [
        {
         name: "studyId",
         label: "Id",
         options: {
          filter: false,
          sort: true,
         }
        },
        {
          name: "title",
          label: "Title",
          options: {
            filter: true,
            sort: true,
            customBodyRenderLite: (dataIndex, rowIndex) => {
              return (
                <Link to={"/study/"+this.props.rows[rowIndex].studyId} className="primary">
                    {this.props.rows[rowIndex].title}
                </Link>
              );
            }
          }
        },
        {
         name: "authors",
         label: "Authors",
         options: {
          filter: true,
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
         }
        },
        {
         name: "pub_date",
         label: "Publication Date",
         options: {
          filter: true,
          sort: false,
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
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
          }
         },
         {
          name: "dev_stage",
          label: "Developmental Stage",
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
          label: "Tissues",
          options: {
           filter: true,
           sort: false,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
          }
         },
         {
          name: "pmids",
          label: "PMID",
          options: {
           filter: true,
           sort: false,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
          }
         },

       ];

       const options = {
         print: false,
         download: false,
         selectableRows:'none',
         filterType: 'dropdown',
       };
    return (

        <MUIDataTable
          data={rows}
          columns={columns}
          options={options}
        />
  
    );
  }
}

export default TableStudiesComponent;