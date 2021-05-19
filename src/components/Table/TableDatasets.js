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
         name: "id",
         label: "Id",
         options: {
          filter: true,
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
         }
        },
        {
         name: "pub_date",
         label: "Publication Date",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "technology",
         label: "Technology",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
          name: "species",
          label: "Species",
          options: {
           filter: true,
           sort: false,
          }
         },
         {
          name: "dev_stage",
          label: "Developmental Stage",
          options: {
           filter: true,
           sort: false,
          }
         },
         {
          name: "tissues",
          label: "Tissues",
          options: {
           filter: true,
           sort: false,
          }
         },
         {
          name: "pmids",
          label: "PMID",
          options: {
           filter: true,
           sort: false,
          }
         },
       ];

       const options = {
         print: false,
         download: false,
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