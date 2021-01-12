//import { AppBar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import {Grid, makeStyles, TextField} from '@material-ui/core';
// import FourKIcon from '@material-ui/icons/FourK';
// import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
// import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
// import SearchIcon from '@material-ui/icons/Search';
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {useForm, Form} from '../../Components/useForm';
import Controls from '../../Components/controls/Controls';
//import RadioGroup from '../../Components/controls/RadioGroup';
import Input from '../../Components/controls/Input';
import * as employeeService from '../../services/employeeService'
const genderItems = [
    {id:'female', title: 'Female'},
    {id:'male', title: 'Male'},
    {id:'other', title: 'Other'},

]
//here we will space our inputs so they are not butted up against eachother.
const useStyle = makeStyles(theme =>({
    root: {
   '& .MuiFormControl-root' : {
       width: '80%',
       margin: theme.spacing(1)
   }
    }
}))

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'female',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
}

export default function EmployeeForm() {


// const{
//     values,
//     setValues,
//     handleInputChange
// }=useForm(initialFValues);
const [values, setValues] = useState(initialFValues);
const classes = useStyle();

    return (
           <form className={classes.root}>
               <Grid container>
                   <Grid item xs={6}>
                       <TextField
                       variant="outlined"
                       label="Full Name"
                       value={values.fullName}>
                       </TextField> 
                       <TextField
                       variant="outlined"
                       label="email"
                       value={values.email}>
                       </TextField>
                   </Grid>
                   <Grid item xs={6}></Grid>

               </Grid>
           </form>
   )
}