import React from 'react';
import Typography from '@material-ui/core/Typography';
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Button, ButtonGroup, Badge, Box, Chip, Divider, Grid, CardContent, CardHeader, Card , Breadcrumbs} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import GetAppIcon from '@material-ui/icons/GetApp';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';

import HexaIcon from '../../assets/Icons/Hexa';
import HexaOutlinedIcon from '../../assets/Icons/HexaOutlined';
import HexaTwoToneIcon from '../../assets/Icons/HexaTwoTone';

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




const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

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
	

  return (

	<Box className="App" maxWidth="m" m={2}>

	        <Typography variant="h1" gutterBottom>
          Style Guide (H1)
        </Typography>

  <Grid container spacing={3}>
        <Grid item xs={12}>
           <Card variant="outlined">
		   <CardHeader title="Typography"></CardHeader>
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
		  </Card>
        </Grid>
		 </Grid>
		 
		 
		 
		 
		
  <Grid container spacing={3}>
        <Grid item xs={12}>
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
        </Grid>
		</Grid>
	  
	
		
		
	  <Grid container spacing={3}>
        <Grid item xs={12}>
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
        </Grid>
		</Grid>

  <Grid container spacing={3}>
        <Grid item xs={12}>
           <Card variant="outlined">
		   <CardHeader title="Alert messages"></CardHeader>
      <CardContent>

  
  <Alert severity="error">This is an error alert — check it out!</Alert>
<Alert severity="warning">This is a warning alert — check it out!</Alert>
<Alert severity="info">This is an info alert — check it out!</Alert>
<Alert severity="success">This is a success alert — check it out!</Alert>



 </CardContent>
		  </Card>
        </Grid>
		</Grid>
		
		
		
		
		  <Grid container spacing={3}>
        <Grid item xs={12}>
           <Card variant="outlined">
		   <CardHeader title="Slider"></CardHeader>
      <CardContent>
	  


      <RangeSlider />




 </CardContent>
		  </Card>
        </Grid>
		</Grid>
		

		</Box>

 
  );
}
export default TestApp;
