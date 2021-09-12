import { Button, Container, Grid, Paper } from "@material-ui/core";
import React from "react";


const homepage = () => {
    return (
        <Container fixed>
            <Grid>
                <Paper elevation={5}>
                    <h1>DSC Software Development Limited</h1>
                    <Button><a href="./homepage">Login</a></Button>
                </Paper>
            </Grid>
        </Container>
    );
}

export default homepage;