//import { AppBar } from '@material-ui/core';
import React from 'react';
import { makeStyles, withStyles, AppBar, Toolbar, Grid, InputBase, IconButton, Badge, TextField } from '@material-ui/core';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


const useStyles = makeStyles(theme =>({
    
}))


export default function Input(props) {



const {name, label, value, onChange} = props
    return (
        <TextField
                        variant="outlined"
                        label={label}
                        name={name}
                        value={value} 
                        onChange = {onChange}
                        />
              
            
    )
}