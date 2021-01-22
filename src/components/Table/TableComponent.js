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
import {Spinner} from '../Loading/LoadingComponent'

import { MDBRow, MDBContainer, MDBCol, MDBDataTableV5 } from "mdbreact";

class TableComponent extends Component {
  render() {
    const data = {
      columns: [
        {
          label: 'Name',
          field: 'name',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Description',
          field: 'description',
          width: 270,
        },
        {
          label: 'Status',
          field: 'status',
          width: 200,
        },
        {
          label: 'Created at',
          field: 'created_at',
          sort: 'asc',
          width: 100,
        },
      ],
      rows: this.props.data
    };
    return (
          <MDBContainer className="mt-5">
            <MDBRow>
                <MDBCol md="12">
                {data.rows ? <MDBDataTableV5 hover entriesOptions={[5, 20, 25, 50]} entries={5} pagesAmount={4} data={data} fullPagination /> : <Spinner/>}
                  
                </MDBCol>
            </MDBRow>

          </MDBContainer>
    );
  }
}

export default TableComponent;