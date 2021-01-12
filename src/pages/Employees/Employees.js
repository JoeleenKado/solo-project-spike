//import { AppBar } from '@material-ui/core';
import React from 'react';
import { makeStyles, withStyles, AppBar, Toolbar, Grid, InputBase, IconButton, Badge, Paper } from '@material-ui/core';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../Components/PageHeader'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';


// const useStyles = makeStyles(theme =>({
//    pageContent: {
//        margin: theme.spacing(5),
//        padding: theme.spacing(3)
//    }
// }))


export default function Employees() {

// const classes = useStyles();


    return (
        <>

<PageHeader
       title='New Employee'
       subTitle='Form design with validation'
       icon={<PeopleOutlineIcon fontSize='large'/>}
       />

        {/* <PageHeader
       title='New Employee'
       subTitle='Form design with validation'
       icon={<PeopleOutlineIcon fontSize='large'/>}
       />
       <Paper className={classes.pageContent}> */}
      <EmployeeForm/>
       {/* </Paper> */}
       </>
            
    )
}