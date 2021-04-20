import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { Button, ButtonGroup,Paper, Tabs, Tab, Divider, Grid, CardContent, CardHeader, Card , Breadcrumbs} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GetAppIcon from '@material-ui/icons/GetApp';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HexaIcon from '../../assets/Icons/Hexa';
import HexaOutlinedIcon from '../../assets/Icons/HexaOutlined';
import HexaTwoToneIcon from '../../assets/Icons/HexaTwoTone';
import SquareOutlinedIcon from '../../assets/Icons/SquareOutlined';

import CurvesIcon from '../../assets/Icons/Curves';
import CurvesTwoToneIcon from '../../assets/Icons/CurvesTwoTone';

import ScatterPlotIcon from '../../assets/Icons/ScatterPlot';
import ScatterPlotOutlinedIcon from '../../assets/Icons/ScatterPlotOutlined';
import ScatterPlotTwoToneIcon from '../../assets/Icons/ScatterPlotTwoTone';

import PieOutlinedIcon from '../../assets/Icons/PieOutlined';
import PieTwoToneIcon from '../../assets/Icons/PieTwoTone';

import BarchartIcon from '../../assets/Icons/Barchart';
import BarchartOutlinedIcon from '../../assets/Icons/BarchartOutlined';
import BarchartTwoToneIcon from '../../assets/Icons/BarchartTwoTone';

import DoughnutIcon from '../../assets/Icons/Doughnut';
import DoughnutOutlinedIcon from '../../assets/Icons/DoughnutOutlined';
import DoughnutTwoToneIcon from '../../assets/Icons/DoughnutTwoTone';

import SettingsIcon from '../../assets/Icons/Settings';

import Alert from '@material-ui/lab/Alert';
import Slider from '@material-ui/core/Slider';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: theme.spacing(3),
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.primary.dark, 0.12),
    },
  },
}))(Chip); 

const withMargin = {
 margin: '10px'
};

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}




const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  borderl: {
	borderRight: '1px solid #CCCCCC',
  },
   minW: {
	minWidth: '300px',
  },
}));

function valuetext(value) {
  return `${value}`;
}

function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}





function TestApp() {
	
  const classes = useStyles();
	const [expanded, setExpanded] = React.useState(true);
	const [expanded2, setExpanded2] = React.useState(true);
	const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  return (

	<Box className="App"  m={2}>

	        <Typography variant="h1" gutterBottom>
          Style Guide (H1)
        </Typography>


           <Card variant="outlined" >
		   <CardHeader title="Typography"  action={
<IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        }>
</CardHeader>
		<Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
		   <Typography variant="h2" gutterBottom>
        h2. For dataset/study name as main titles
      </Typography>
	  
	   <Typography variant="h3" gutterBottom>
        h3. For dataset/study name in results lists 
      </Typography>
      <Typography variant="h4" color="textSecondary" gutterBottom>
        h4. For attributes in results lists and and chart titles
      </Typography>

      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>

      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
	  </CardContent>
	   </Collapse>
		  </Card>

		 
		 

           <Card variant="outlined">
		   <CardHeader title="Repartition by cell metadata" subheader="% expressed in nb of cells" action={
<IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded2,
          })}
          onClick={handleExpandClick2}
          aria-expanded={expanded2}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        }>
</CardHeader>
		<Collapse in={expanded2} timeout="auto" unmountOnExit>
      <CardContent>
	  
	  
	  
 <Grid container direction="row" xs={12}>
        
		 
		  <Grid item xs={12} sm={4}  className={classes.minW}>
          <Box  padding={2}>graph1<br /> Avec du blablblablablba lblablb<br /> Avec du blablblablablba lblablb</Box>
        </Grid>
        <Grid item xs={12} sm={4}  className={classes.minW}>
            <Box  padding={2}>graph2</Box>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.minW}>
           <Box padding={2}>graph3</Box>
        </Grid>
		       

		
		
		 </Grid>
	  
	  </CardContent>
	   </Collapse>
		  </Card>
   




		 

		

           <Card variant="outlined">
		   <CardHeader title="Buttons and icons"></CardHeader>
      <CardContent>
		  <Box mb={1} >
   <Button variant="contained" style={withMargin}>Default</Button>
<Button variant="contained" color="primary" style={withMargin}>
  Primary
</Button>

<Button variant="contained" disabled style={withMargin}>
  Disabled
</Button>
<Button variant="contained" color="primary" href="#contained-buttons" style={withMargin}>
  Link
</Button>


			
</Box>
<Divider  />

<Button>Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons" color="primary">
  Link
</Button>

<Divider  />


<Box mt={1} >
<Button style={withMargin}
        variant="contained"
        color="primary"
        size="small"
        startIcon={<GetAppIcon />}
      >Download small
  </Button>
<Button style={withMargin}
        variant="contained"
        color="primary"
        startIcon={<GetAppIcon />}
      >
        Download medium
      </Button>
	  
	  
<Button style={withMargin}
        variant="contained"
        color="primary"
        startIcon={<GetAppOutlinedIcon />}
      >
        Download outlined icon
      </Button>
	  
	<Button style={withMargin}
        variant="outlined"
        color="primary"
        size="large"
        startIcon={<GetAppIcon />}
      > Download large outline button
	    </Button>
	
	
 <IconButton aria-label="show 17 new notifications" color="primary">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> 
	  
</Box>	  
	  
	  
	  <Divider  />


		<Box mt={1}>
		<Button variant="outlined" style={withMargin}>Default</Button>
<Button variant="outlined" color="primary" style={withMargin}>
  Primary
</Button>
<Button variant="outlined" color="secondary" style={withMargin}>
  Secondary
</Button>
<Button variant="outlined" disabled style={withMargin}>
  Disabled
</Button>
<Button variant="outlined" color="primary" href="#outlined-buttons" style={withMargin}>
  Link
</Button>
</Box>



	  
	  <Divider  />


		<Box mt={1}>
		
				

			
<HexaIcon color="primary"></HexaIcon>
<HexaOutlinedIcon color="primary"></HexaOutlinedIcon>
<HexaTwoToneIcon color="primary"></HexaTwoToneIcon>

<HexaIcon color="action"></HexaIcon>
<HexaOutlinedIcon color="action"></HexaOutlinedIcon>
<HexaTwoToneIcon color="action"></HexaTwoToneIcon>

<CurvesIcon color="primary"></CurvesIcon>
<CurvesTwoToneIcon color="primary"></CurvesTwoToneIcon>
<ScatterPlotOutlinedIcon color="primary"></ScatterPlotOutlinedIcon>
<ScatterPlotIcon color="primary"></ScatterPlotIcon>
<ScatterPlotTwoToneIcon color="primary"></ScatterPlotTwoToneIcon>

<PieOutlinedIcon color="primary"></PieOutlinedIcon>
<PieTwoToneIcon color="primary"></PieTwoToneIcon>

<DoughnutOutlinedIcon color="primary"></DoughnutOutlinedIcon>
<DoughnutIcon color="primary"></DoughnutIcon>
<DoughnutTwoToneIcon color="primary"></DoughnutTwoToneIcon>

<BarchartOutlinedIcon color="primary"></BarchartOutlinedIcon>
<BarchartIcon color="primary"></BarchartIcon>
<BarchartTwoToneIcon color="primary"></BarchartTwoToneIcon>

<ButtonGroup style={withMargin}
        color="primary" variant="contained" disableElevation
        aria-label="outlined primary button group"
      >
        <Button><ScatterPlotTwoToneIcon tyle={{ color: "#ffffff" }}  fontSize="large"></ScatterPlotTwoToneIcon></Button>
      </ButtonGroup>
	  
	<ButtonGroup style={withMargin}
        color="primary" variant="contained" disableElevation
        aria-label="outlined primary button group"
      >
        <Button><SettingsIcon tyle={{ color: "#ffffff" }}  fontSize="large"></SettingsIcon></Button>
      </ButtonGroup>



<ButtonGroup
        color="action"
        aria-label="outlined primary button group" style={withMargin}
      >
        <Button color="primary" style={{borderWidth: '2px'}}><HexaTwoToneIcon color="primary"></HexaTwoToneIcon></Button>
        <Button><HexaTwoToneIcon color="action"></HexaTwoToneIcon></Button>
        <Button><HexaTwoToneIcon color="action"></HexaTwoToneIcon></Button>
      </ButtonGroup>
	  
<ButtonGroup style={withMargin}
        color="primary" variant="contained" disableElevation
        aria-label="outlined primary button group"
      >
        <Button><HexaTwoToneIcon tyle={{ color: "#ffffff" }}  fontSize="large"></HexaTwoToneIcon></Button>
      </ButtonGroup>

	  <Divider  />	
	
	<ButtonGroup style={withMargin}
        orientation="vertical"
        color="action"
        aria-label="vertical outlined primary button group" 
      >
        <Button variant="outlined" color="primary" style={{borderWidth: '2px', borderBottomWidth: '2px', borderColor: '#26a69a' }} ><HexaTwoToneIcon color="primary"></HexaTwoToneIcon></Button>
        <Button><HexaTwoToneIcon color="action"></HexaTwoToneIcon></Button>
        <Button><HexaTwoToneIcon color="action"></HexaTwoToneIcon></Button>
      </ButtonGroup>



		
		</Box>


	 </CardContent>
		  </Card>

	  

           <Card variant="outlined">
		   <CardHeader title="Breadcrumbs"></CardHeader>
		   
      <CardContent>
		<Breadcrumbs aria-label="breadcrumb">
  <StyledBreadcrumb
    component="a"
    href="#"
    label="Home"
    icon={<HomeIcon fontSize="small" style={{ color: 'white' }}  />}
    onClick={handleClick}
  />
  <StyledBreadcrumb component="a" href="#" label="Study List" onClick={handleClick} />


  
</Breadcrumbs>
 </CardContent>
		  </Card>



           <Card variant="outlined">
		   <CardHeader title="Alert messages"></CardHeader>
      <CardContent>

  
  <Alert severity="error">This is an error alert — check it out!</Alert>
<Alert severity="warning">This is a warning alert — check it out!</Alert>
<Alert severity="info">This is an info alert — check it out!</Alert>
<Alert severity="success">This is a success alert — check it out!</Alert>



 </CardContent>
		  </Card>

		
		

           <Card variant="outlined">
		   <CardHeader title="Slider"></CardHeader>
      <CardContent>
	  


      <RangeSlider />




 </CardContent>
		  </Card>
 
		

		</Box>

 
  );
}
export default TestApp;
