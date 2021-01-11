//import { makeStyles } from '@material-ui/core';
import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core';

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'collumn',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: 'blue'
    }
}




const SideMenu= (props) => {
const {classes} = props;


   return(
       <div className={classes.sideMenu}>

       </div>
   ) 
}

export default withStyles(style)(SideMenu);