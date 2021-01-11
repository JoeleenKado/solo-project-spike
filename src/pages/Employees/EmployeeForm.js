//import { AppBar } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import {Grid} from '@material-ui/core';
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


const{
    values,
    setValues,
    handleInputChange
}=useForm(initialFValues);





    return (
            <Form>
            <Grid container>
                <Grid item xs={6}>

                   <Controls.Input
                   name="fullName"
                   label="Full Name"
                value={values.fullName}
                onChange={handleInputChange}/>
                    
                    <Controls.Input
                        variant="outlined"
                        label="email"
                        name="email"
                        value={values.email}
                        onChange = {handleInputChange}

                         />
                </Grid>
                <Grid item xs={6}>
                <Controls.RadioGroup
name="gender"
label="Gender"
value={values.gender} 
onChange = {handleInputChange}
items={genderItems}

                
                />

                <Controls.Select
                name="departmentId"
                label="Department"
                value={values.departmentId}  
                onChange={handleInputChange} 
                options={employeeService.getDepartmentCollection()}
                    />
<Controls.Checkbox
name="isPermanent"
label="Permanent Employee"
value={values.isPermanent}
onChange={handleInputChange} 

/>
                </Grid>

            </Grid>
            </Form>

    )
}