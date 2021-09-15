import { Button, Container, Grid, Paper } from "@material-ui/core";
import React from "react";
import Login from "../login/Login";


const homepage = () => {

    const anchorStyle = {
        textDecoration: null,
    }

    return (
        <Container fixed>
            <Grid>
                <Paper elevation={5}>
                    <h1>DSC Software Development Limited</h1>
                    <Button><a href={Login} style={anchorStyle}>Login</a></Button>
                </Paper>
            </Grid>
        </Container>
    );
}

export default homepage;