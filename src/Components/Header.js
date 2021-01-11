//import { AppBar } from '@material-ui/core';
import React from 'react';
import { makeStyles, withStyles, AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@material-ui/core';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


const useStyles = makeStyles(theme =>({
    root: {
        backgroundColor: 'green',
        transform: 'translateZ(0)'
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover':{
            backgroundColor: 'white'
        },
        '& .MuiSvgIcon-root':{
            marginRight: theme.spacing(1)
        }
    }
}))


export default function Header() {

const classes = useStyles();


    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container
                alignItems='center'>
                    <Grid item>
                        <InputBase 
                        placeholder="Search topics"
                        className = {classes.searchInput}
                        startAdornment={<SearchIcon fontSize="small"/>}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNoneIcon fontSize='small'/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color='primary'>
                                <ChatBubbleOutlineIcon fontSize='small'/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                                <PowerSettingsNewIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}