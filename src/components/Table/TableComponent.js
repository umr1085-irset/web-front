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

import StudyTable from './TableStudies'
import DatasetTable from './TableDatasets'
import GenomeBrowserTable from './TableGenomeBrowser'


class TableComponent extends Component {

  displayTable = (KeysToTable,key,rows) =>{
    return React.createElement(KeysToTable[key],{rows: rows})
  }
  render() {
    const KeysToTable ={
      studies:StudyTable,
      datasets:DatasetTable,
    }
    const rows = this.props.data
    return (
        <div>
          {this.displayTable(KeysToTable,this.props.type,rows)}
        </div>

    );
  }
}

export default TableComponent;
