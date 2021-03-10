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
import { Link  } from "react-router-dom";

import {MDBTable, MDBTableBody } from "mdbreact";

import Typography from '@material-ui/core/Typography';
import { Button} from '@material-ui/core';



class TableStudiesComponent extends Component {
  render() {
      const rows = this.props.rows
      //const columns = this.props.columns
      console.log("STUDYTABLE")
    return (
        <MDBTable hover responsive> 
            <MDBTableBody>
            {rows.map(function(row,i) {
                return(
             
                    <tr key={"row_"+i}>
                        <td key={"ID_"+i}><Typography variant="body1">{row.studyId.toString()}</Typography></td>
                        <td key={"title_"+i}><Typography variant="body1"><Link to={"/hudeca/study/"+row.studyId}><Button color="primary">{row.title.toString()}</Button></Link></Typography></td>
                        <td key={"authors_"+i}><Typography variant="body1">{row.authors.toString()}</Typography></td>
                        <td key={"pub_date_"+i}><Typography variant="body1">{row.pub_date.toString()}</Typography></td>
                        <td key={"topics_"+i}><Typography variant="body1">{row.topics.toString()}</Typography></td>
                        <td key={"technology_"+i}><Typography variant="body1">{row.technology.toString()}</Typography></td>
                        <td key={"species_"+i}><Typography variant="body1">{row.species.toString()}</Typography></td>
                        <td key={"tissues_"+i}><Typography variant="body1"  className="capitalize">{row.tissues.toString()}</Typography></td>
                    </tr>
)
                })}
            </MDBTableBody>
        </MDBTable>
  
    );
  }
}

export default TableStudiesComponent;