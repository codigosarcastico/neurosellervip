import { createMuiTheme } from "@material-ui/core/styles";
// import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: { 
    type: 'dark',
     background: {
       default: '#141414',
       paper: '#221f1f'
     },
     primary : {
       light: '#ea3a43',
       main: '#e50914',
       dark: '#a0060e',
       contrastText: '#fff'
     } , 
     secondary : {
      light: '#41a397',
      main: '#128c7e',
      dark: '#0c6258',
      contrastText: '#fff'
     }, 
     whatsapp : { 
      background: 'linear-gradient(to left, #0c6258, #128c7e)',
      color : '#fff'
      
    }  
  },
  typography: {
     h1 : { fontWeight : 'bold', textTransform : 'uppercase' },
     h2 : { fontWeight : 'bold', textTransform : 'uppercase' },
     h3 : { fontWeight : 'bold', textTransform : 'uppercase' },
     h4 : { fontWeight : 'bold', textTransform : 'uppercase' }, 
     h5 : { fontWeight : 'bold', textTransform : 'uppercase' }, 
     h6 : { fontWeight : 'bold', textTransform : 'uppercase' }, 
  }
});

export default theme
