import React from 'react';
import {TextField, Grid, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function LoginForm(props){
    const classes = useStyles();
    return(
        <div className="container">
        <form action="#" method="POST" className="formgroup">
            <Grid className={classes.root} container direction="column" justify="center" alignItems="space-between" spacing={2}>
                <TextField className={classes.root} id="email" label="Email id" variant="filled"/>
                <TextField className={classes.root} id="password" label="Password" variant="filled" type="password"/>
            </Grid>
        </form>
        </div>
    );
}

export default LoginForm;