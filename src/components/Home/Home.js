import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {Grid,  List, Box, Paper, Card, CardContent, Button, ButtonGroup} from '@material-ui/core';
//import bgImg from '../../assets/img/Home_bg2.jpg' // relative path to image 
import logo from '../../assets/logo/RGVLogo_home_crop.png'

import { withRouter, Link } from "react-router-dom";

const styles = {
	   imgContainer: {
		    maxHeight: 520,
		   	minHeight: 500,
		   	height: 500,
			backgroundImage: `url(${logo})`,
			backgroundRepeat  : 'no-repeat',
			backgroundPosition: 'top',
		   	padding: 0
		},
	    title: {
		    color: '#00A99D'
	    },
	    featureList: {
		      listStyle: 'none',
		      paddingLeft: 0,
		   },
	    itemList: {
		    color: 'white',
		    fontSize: "1.2rem",
		    textTransform: 'uppercase',
		    marginBottom: 10,
	    },
	    itemText: {
		    backgroundColor: '#000000',
		    paddingTop: 2,
		    paddingBottom: 2,
		    paddingLeft:8,
		    paddingRight:8,

	    },

	   itemText1: {
		   backgroundColor: '#000000',
		   paddingTop:2,
		   paddingBottom:2,
		   paddingLeft: 8,
		   paddingRight: 8
	   },
	   itemText2: {
		   backgroundColor: '#000000',
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
		minWidth: "100%",
		fontSize: "1rem",
		backgroundColor: "#3f50b5"
		},
	    butBot: {
		    position: "relative",
		    bottom:0,
		    marginTop: 100
	    }
	  };



function HomeContent() {
	
  return (

	 <Box>

<Paper variant="outlined" style={styles.imgContainer}>
	<Box mt={25}  mx="30%" >

    <Typography variant="body1" gutterBottom>
	Get access to a database gathering datasets about repro-genomics and use our interactive viewer to explore cell populations and marker genes.
     </Typography>
	  <br />
	  
      <ul style={styles.featureList}>
	  <li style={styles.itemList}><span style={styles.itemText}>Visualize repartition by cell and gene metadata</span></li>
	  <li style={styles.itemList}><span style={styles.itemText1} >Filter cells according to multiple parameters</span></li>
	  <li style={styles.itemList}><span style={styles.itemText2}>Compare gene expression &amp; discover marker genes </span></li>
      </ul>
	             
</Box>	 <Box style={styles.butBot}>
	<Link to="/view/studies">
	  <Button variant="contained" size="large" style={styles.largeButton}>Browse available studies</Button>
	  </Link>
	 </Box>
	  </Paper>




</Box>	
 
  );
}
export default HomeContent;
