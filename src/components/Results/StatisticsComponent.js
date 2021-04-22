import React, { Component } from "react";
import { toastOnError } from "../../utils/Utils";
import { trackPromise } from 'react-promise-tracker';
import axios from "axios";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MDBRow, MDBCol} from "mdbreact";

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
      const row_name = this.props.row_name
      const col_name = this.props.col_name
      const row_val = this.state.row_val
      const col_val = this.state.col_val
      const row_tot = this.props.row_tot
      const col_tot = this.props.col_tot

    return (
        <Card variant="outlined">
            {this.state.loading? null:
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Statistics
                    </Typography>
                    <MDBRow>
                        <MDBCol md="12">
                            <Typography variant="body2" component="h2">
                                Number of {row_name} display
                            </Typography>
                            <Typography variant="h5" component="p">
                                {row_val}/{row_tot}
                            </Typography>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="mt-2" md="12">
                            <Typography variant="body2" component="h2">
                                Number of {col_name} display
                            </Typography>
                            <Typography variant="h5" component="p">
                                {col_val}/{col_tot}
                            </Typography>
                        </MDBCol>
                    </MDBRow>
                </CardContent>
            }
        </Card>

        );
    }
}
export default StatisticsComponent;
