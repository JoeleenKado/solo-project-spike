import { CssBaseline, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import SideMenu from '../Components/SideMenu';
import './App.css';
//import SideMenu from '../Components/SideMenu'
//import {makeStyles, withStyles} from '@material-ui/core';
import Header from '../Components/Header'
import PageHeader from '../Components/PageHeader';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import Employees from '../pages/Employees/Employees'

const theme = createMuiTheme({
  pallet: {
    primary: {
      main: 'aqua',
      light: 'purple'
    },
    secondary: {
      main: 'pink',
      light: 'indigo'
    },
    background: {
      default: 'yellow'
    }
  },
  shape: {
    borderRadius: '100px'
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'

      }
    }
  },
  props : {
    MuiIconButton: {
      disableRipple: false //disable the ripple effect when you click an icon
    }
  }
})

const useStyles = makeStyles({
  appMain : {
    paddingLeft: '320px',
    width: '100%' 
  }
})

function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <SideMenu/>
       <div className={classes.appMain}>
       <Header/>

<PageHeader
       title='Page Header'
       subTitle='Page Description'
       icon={<PeopleOutlineIcon fontSize='large'/>}
       />
       <Employees/>
       </div>
       <CssBaseline/>
       </ThemeProvider>

  );
}

export default App;
