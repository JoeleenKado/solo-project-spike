//import { AppBar } from '@material-ui/core';
import React from 'react';
import {FormLabel, FormControl, RadioGroup as MuiRadioGroup, FormControlLabel, Radio, makeStyles} from '@material-ui/core';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


const useStyles = makeStyles(theme =>({
    
}))


export default function RadioGroup(props) {

const {name, label, value, onChange, items} = props;


    return (
        <FormControl>
                        
        <FormLabel>{label}</FormLabel>
        <MuiRadioGroup row
            name={name}
        value={value} 
        onChange = {onChange}>

{
    items.map(
        (item)=>(
            <FormControlLabel key={item.id} value={item.id} control={<Radio/>} label={item.title}/>

        )
    )
}

            
            </MuiRadioGroup>

    </FormControl>
            
    )
}