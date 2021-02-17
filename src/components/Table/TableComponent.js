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
import { Link  } from "react-router-dom";

import {Spinner} from '../Loading/LoadingComponent'
import { MDBRow, MDBContainer, MDBCol, MDBDataTableV5 } from "mdbreact";
import { Button } from '@material-ui/core';


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


  render() {
    const withMargin = {
      margin: '10px'
     };
    const data = {
      columns: [
        {
          label: 'Title',
          field: 'title',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Title',
          },
        },
        {
          label: 'Year',
          field: 'year',
          width: 270,
        },
      ],
      rows: this.filterPlainArray(this.props.data,this.props.filters)
    };

    const badgesData = {
      columns: [
        ...data.columns,
        {
          label: 'Actions',
          field: 'actions',
        },
        
      ],
      rows: [
        ...data.rows.map((row, order) => ({
          ...row,
          actions: (
            <>
              <Link to={"/hudeca/study/"+row.id}><Button variant="contained" color="primary" style={withMargin} className='p-2' key={'view_'+order} searchvalue={row.title}>
                View
              </Button></Link>
              <Button variant="contained" color="primary" style={withMargin} className='p-2' key={order} searchvalue={row.title}>
                Download
              </Button>
            </>
          ),
        })),
      ],
    };
    return (
          <MDBContainer className="mt-5">
            <MDBRow>
                <MDBCol md="12">
                {data.rows ? <MDBDataTableV5 hover entriesOptions={[5, 20, 25, 50]} entries={15} pagesAmount={4} data={badgesData} fullPagination /> : <Spinner/>}
                  
                </MDBCol>
            </MDBRow>

          </MDBContainer>
    );
  }
}

export default TableComponent;