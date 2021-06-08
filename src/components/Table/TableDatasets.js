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
import { Button,} from '@material-ui/core';
import axios from "axios";

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

  render() {
      const rows = this.props.rows
      const columns = [
        {
         name: "datasetId",
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
                <Link to={"/dataset/"+this.props.rows[rowIndex].datasetId} className="primary">
                    {this.props.rows[rowIndex].title}
                </Link>
              );
            }
          }
        },
        {
         name: "type",
         label: "Type",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
          name: "technology",
          label: "Technology",
          options: {
           filter: true,
           sort: true,
          }
         },
         {
          name: "gender",
          label: "Gender",
          options: {
           filter: true,
           sort: true,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
          }
         },
         {
          name: "tissue",
          label: "Tissue",
          options: {
           filter: true,
           sort: true,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
          }
         },
         {
          name: "devStage",
          label: "Dev. Stage",
          options: {
           filter: true,
           sort: true,
           customBodyRender: (value, tableMeta, updateValue) => (
              value.join(", ")
            )
          }
         },
         {
          name: "id",
          label: "Download",
          options: {
           filter: false,
           sort: false,
          customBodyRenderLite: (dataIndex, rowIndex) => {
            return (
              <Button onClick={() => {this.downloadDataset(this.props.rows[rowIndex].datasetId)}} variant="contained" color="primary" className='p-2'>
                  Download
              </Button>
            );
          }
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

export default TableDatasetsComponent;