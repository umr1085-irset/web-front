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

import { MDBRow, MDBContainer, MDBCol, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import StudyTable from './TableStudies'


class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data:null,
      filters:{
        type:[],
        tissues: [],
        technology:[],
        pmid: [],
        title: [],
        author:[],
        pub_date:[],
        devstage:[],
        gender: []
      }
    };
  }
  

  filterPlainArray(array, filters) {
    if(filters===null) return array
    const getValue = value => (typeof value === 'string' ? value.toUpperCase() : value);
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
      // validates all filter criteria
      return filterKeys.every(key => {
        // ignores an empty filter
        if (!filters[key].length) return true;
        return filters[key].find(filter => getValue(filter) === getValue(item[key]));
      });
    });
  }

  displayTable = (KeysToTable,key,columns,rows) =>{
    return React.createElement(KeysToTable[key],{columns:columns,rows: rows})
  }
  render() {
    const KeysToTable ={
      studies:StudyTable,
      datasets:StudyTable,
    }
    const columns = this.props.columns;
    const rows = this.filterPlainArray(this.props.data,this.props.filters);
    return (
          <MDBContainer className="mt-5">
            <MDBRow>
                <MDBCol md="12">
                  {this.displayTable(KeysToTable,this.props.type,columns,rows)}
                </MDBCol>
            </MDBRow>

          </MDBContainer>
    );
  }
}

export default TableComponent;