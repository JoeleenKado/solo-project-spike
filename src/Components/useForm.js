//import { AppBar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles, AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from '@material-ui/core';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


// const useStyles = makeStyles(theme =>({
    
// }))


export function useForm(initialFValues) {

    const [values, setValues] = useState(initialFValues);

    const handleInputChange= e=>{
        const {name, value} = e.target 
        setValues({
            ...values, 
            [name]: value
        })
        }

    return {
        values,
        setValues,
        handleInputChange

    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {

    const classes = useStyles();
    return (
        <form className={classes.root} autoComplete="off">
{props.children}
        </form>
    )
}