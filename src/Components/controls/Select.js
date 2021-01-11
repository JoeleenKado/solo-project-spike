//import { AppBar } from '@material-ui/core';
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect,  } from '@material-ui/core';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


// const useStyles = makeStyles(theme =>({
    
// }))


export default function Select(props) {


const {name, value, label, onChange, options} = props;

    return (
      <FormControl
      variant="outlined">
          <InputLabel>{label}</InputLabel>
<MuiSelect
label={label}
name={name}
value={value}
onChange={onChange}>
<MenuItem value="">None</MenuItem>
{
    options.map(
        item =>(<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
    )
}
</MuiSelect>

      </FormControl>
            
    )
}