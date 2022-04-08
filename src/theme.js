import  { teal } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
	
  
  palette: {
    primary: {
		main: '#26a69a',
	},
    secondary: {
      main: '#f73378',
    },
	
	background:  {
		default:'#F2F2F2',
	},
  },
typography: {
	fontSize: 12,
    fontFamily: [
      '"Open Sans"',
	  'Quicksand',
      'Arial',
      'sans-serif'
    ].join(','),
	h1 : {
      textTransform: "Uppercase",	  
    },
	h2 : {
      textTransform: "Uppercase",
	  fontFamily: "Quicksand",
	  fontWeight: 400,
	  fontSize: "2rem",
    },
	h3: {
      textTransform: "Uppercase",
	  fontFamily: "Quicksand",
	  fontWeight: 400,
	  fontSize: "1.2rem",
    },
	h4 : {
	  fontFamily: "Quicksand",
	  fontWeight: 500,
	  fontSize: "1rem",	  
    },
  },

  overrides: {

    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
		borderRadius: '0px',
      },
	  withMargin: {
		  margin: '10px'
	  }
    },
	MuiCard: {
      root: {
        padding:'0px',
      },
    },
	MuiCardHeader: {
      root: {
        backgroundColor:'#F9F9F9',
	textTransform: 'Uppercase',
	fontWeight: 600,
	padding: '8px 16px'
      },
	  title: {
        fontSize : '12px',
	color: '#666666',
	fontFamily : 'Quicksand'
      },
    },
  },
});
export default theme;
