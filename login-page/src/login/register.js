import { Avatar, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, {useState, initialState} from "react";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Register = () => {

    const [values, setValues] = useState(initialState);

    /** Style components for form */

    const paperStyle = {
        padding: '30px 20px',
        width: 300,
        margin: '20px auto',

    }

    const headerStyle = {
        margin: 0,
    }

    const avatarStyle = {
        backgroundColor: '#44bd32',
    }

    const marginTop = {
        marginTop: 7,
    }

    const btnStyle = {
        margin: '8px 0',

    }

    /** Handle button chahge */

    const handleChange = (err) => {
        let {name, value } = err.target;
        setValues({...values, [name]: value });
    }

    return (
        <Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}>
                    <AddCircleOutlineOutlinedIcon/>
                </Avatar>
                <h2 style={headerStyle}>Register</h2>
                <Typography variant='caption' gutterBottom>Please complete this form to create an account.</Typography>
            </Grid>
            <form>
                <TextField label='Name' variant='standard' fullWidth/>
                <TextField label='Email' variant='standard' fullWidth/>

                <FormControl component="fieldset" style={marginTop
                }>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" style={{display:'initial'}} onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <TextField label='Contact' variant='standard' fullWidth/>
                <TextField label='password' variant='standard' fullWidth/>
                <TextField label='Confirm Password' variant='standard' fullWidth/>

                <FormControlLabel
                    control={<Checkbox onChange={handleChange} name="checkedA" />}
                    label="I accept the terms and conditions."
                />
                <Button type='submit' variant='contained' color='primary' style={btnStyle}>Register</Button>
            </form>
        </Paper>
    </Grid>
    );
}

export default Register;