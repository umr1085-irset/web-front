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
import ReactMarkdown from "react-markdown";

import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
import { Typography, Container, Paper, Grid, Box, Button } from '@material-ui/core';


const gfm = require('remark-gfm')

class CitePage extends Component {
  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(this.props.content).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }
  render() {
    const { markdown } = this.state;
    return (

      <Paper variant="outlined" >
	   <Box mx={8} my={6}>
      
        <ReactMarkdown plugins={[gfm]} source={markdown} />
      
	</Box>
     </Paper>

    );
  }
}

export default CitePage;
