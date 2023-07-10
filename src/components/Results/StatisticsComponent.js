import React, { Component } from "react";
import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';
import axios from "axios";

import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MDBRow, MDBCol} from "mdbreact";
import {Spinner} from '../Loading/LoadingComponent'

class StatisticsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading:true,
          row_val: undefined,
          col_val:undefined
        };
      }
    
    async getFiltersData(url,id,filters){
        this.setState({loading:true});
        const plotData={
          id:id,
          filters:filters
        }
        await trackPromise(
          axios.post(url,plotData)
          .then(response => {
            this.setState({
                row_val:response.data.row_val,
                col_val:response.data.col_val,
                loading:false});
          })
          .catch(error => {
            toastOnError("Error loading dataset");
          })
        )
      }

    async componentDidMount() {
        this.setState({filters:this.props.filters})
        this.getFiltersData(this.props.url,this.props.loom,this.props.filters)
    }

    async componentWillReceiveProps(nextProps) {
        if( nextProps.filters !== this.props.filters ){
            this.getFiltersData(this.props.url,this.props.loom,nextProps.filters)
        }
    }

    render() {
      //const row_name = this.props.row_name
      const col_name = this.props.col_name
      //const row_val = this.state.row_val
      const col_val = this.state.col_val
      //const row_tot = this.props.row_tot
      const col_tot = this.props.col_tot

      //const percent_row = Math.round((row_val/row_tot)*100)
      const percent_col = Math.round((col_val/col_tot)*100)

    return (
	<Box> DATASET OVERVIEW   --    
            {this.state.loading
	? <Spinner/>
	: <Box style={{ display: "inline" }} >
  
     Percentage of filtered {col_name}: {percent_col}% ({col_val}/{col_tot})
            </Box> }
        </Box>

        );
    }
}
export default StatisticsComponent;