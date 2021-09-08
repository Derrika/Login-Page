import React, { useState , initialState} from "react";
//import { Redirect } from "react-router";
import{ Avatar, Button, Grid, Paper, TextField, Typography, Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = () => {

    const [values, setValues] = useState(initialState);

    const paperStyle = {

        padding: 20,
        height: '60vh',
        width: 280,
        margin: "20px auto" ,
    }
    const avatarStyle = {
        backgroundColor: 'green',
    }

    const btnStyle = {
        margin: '8px 0',

    }

    const handleChange = (err) => {
        let {name, value } = err.target;
        setValues({...values, [name]: value });
    }


    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                  <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                  <h2>Sign in</h2>
                </Grid>
                <TextField label='Username' variant='standard' placeholder='Enter username'fullWidth required/>
                <TextField label='Password' type='password' variant='standard' placeholder='Enter password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        //checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
              />
              <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth >Sign in</Button>
              <Typography>
                    <Link href='#'>Forgot Password</Link>
              </Typography>
              <Typography>Do you have an account?
                    <Link href='#'>Sign up</Link>
              </Typography>
        </Paper>
        </Grid>
    )
}

export default Login;