import React from 'react';

import{ Avatar, Button, Grid, Paper, TextField, Typography, Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const Login = () => {


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

    const initialValues = {
        username: '',
        password: '',
        remember_me: false
    }

    // Validate form using Formik Yup 
    const validationSchema= Yup.object().shape({
        username:Yup.string().email().required('Please enter valid email.'),
    })


    const onSubmit = (values, props) =>{
        console.log(props);

    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                  <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                  <h2>Sign in</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {
                        (props) => (
                            <Form>
                                {console.log(props)}
                                <Field as={TextField} label='Username' name="username" variant='standard' placeholder='Enter username'fullWidth required/>
                                <Field as={TextField} label='Password' name="password" type='password' variant='standard' placeholder='Enter password' fullWidth required/>
                                <Field as={FormControlLabel}
                                    name="remember_me"
                                    control={
                                        <Checkbox 
                                            color="primary"
                                        />
                                    }
                                    label="Remember me"
                                />
                                <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth >Sign in</Button>
                            </Form>
                        )
                    }
                </Formik>
              <Typography>
                    <Link href='#'>Forgot Password</Link>
              </Typography>
              <Typography>Do you have an account?
                    <Link href='./register.js'>Sign up</Link>
              </Typography>
        </Paper>
        </Grid>
    )
}

export default Login;