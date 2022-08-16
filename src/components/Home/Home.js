import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {Grid,  List, Box, Paper, Card, CardContent, Button, ButtonGroup} from '@material-ui/core';
import bgImg from '../../assets/img/Home_bg_full_info.jpg' // relative path to image 

import { withRouter, Link } from "react-router-dom";


const styles = {
	   imgContainer: {
		   	height: 500,
		        backgroundImage: `url(${bgImg})`,
		        backgroundPosition: 'center',
		        backgroundRepeat: 'no-repeat',
		   	padding: 0
		      },
	    title: {
		    color: '#00A99D'
	    },
	    featureList: {
		      listStyle: 'none',
		      paddingLeft: 0
		   },
	    itemList: {
		    color: 'white',
		    fontSize: "1.2rem",
		    textTransform: 'uppercase',
		    marginBottom: 10,
		    
	    },
	    itemText: {
		    backgroundColor: '#6767c5',
		    paddingTop: 2,
		    paddingBottom: 2,
		    paddingLeft:8,
		    paddingRight:8
	    },

	   itemText1: {
		   backgroundColor: '#ecc405',
		   paddingTop:2,
		   paddingBottom:2,
		   paddingLeft: 8,
		   paddingRight: 8
	   },
	   itemText2: {
		   backgroundColor: '#bde486',
		   paddingTop:2,
		   paddingLeft: 8,
		   paddingRight: 8
	   },
	    browse: {
		padding: 0,
		marginTop: 8
		},
	    textBrowse: {
		paddingTop: 14,
		marginLeft: "8%"
		 },
	    largeButton: {
		minHeight: 50,
		maxHeight: 50,
		minWidth: "96%",
		fontSize: "1.4rem"
		   },
	    butBot: {
		    position: "relative",
		    bottom:0,
		    marginTop: 15,
		    marginBottom: 25
	    }
	  };



function HomeContent() {
	
  return (

	 <Box>

<Paper variant="outlined" style={styles.imgContainer}>.
	</Paper>


	 <Box style={styles.butBot}>
	<Link to="/view/studies">
	  <Button variant="contained" color="primary" size="large" style={styles.largeButton}>Browse available studies</Button>
	  </Link>
	 </Box>
	




</Box>	
 
  );
}
export default HomeContent;
