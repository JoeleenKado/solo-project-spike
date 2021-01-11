//import { AppBar } from '@material-ui/core';
import React from 'react';
import { makeStyles, withStyles, AppBar, Toolbar, Grid, InputBase, IconButton, Badge, Paper, Card, Typography } from '@material-ui/core';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


const useStyles = makeStyles(theme =>({
    root: {
        backgroundColor: 'brown'
    },
    pageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: 'gold'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subTitle2':{
            opacity: '0.6'
        }
    }
}))


export default function PageHeader(props) {


const classes = useStyles();
const {title, subTitle, icon} = props;
    return (
       <Paper elevation={0} square className={classes.root}>
<div className={classes.PageHeader}>
    <Card className={classes.pageIcon}>
        {icon}
    </Card>
    <div className={classes.pageTitle}>
        <Typography
        variant='h6'
        component='div'>
            {title}</Typography>
            <Typography
        variant='subtitle2'
        component='div'>
            {subTitle}</Typography>
    </div>
</div>
       </Paper>
            
    )
}