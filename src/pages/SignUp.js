import React, {useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import axios from 'axios'
import { GlobalContext } from "../context/GlobalState";
import { Redirect } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export const  SignUp = ()  => {
    const classes = useStyles();

    let {handleLogIn,loginState} = useContext(GlobalContext);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirect,setRedirect] = useState(false)
    // const [redirect, setRedirect] = useState(false)

    const submit = async (e) => {
        e.preventDefault()
        axios
        .post(`http://localhost:8090/api/v1/users/sign-up`, 
        {name,email,password})
        .then(res => {
            if(res.status===201){
                handleLogIn(res.data)    
                setRedirect(true)
            }
        })
        .catch( error => {
            console.log(error);
        })
        
    }

    if(redirect){
        return <Redirect to="/"/>
    }
    
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <form 
            className={classes.form} 
            noValidate 
            onSubmit={submit}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    autoComplete="name"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    onChange={e => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={e => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={e => setPassword(e.target.value)}
                    />
                </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>            
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="/sign-in" variant="body2">
                    Already have an account? Sign in
                    </Link>
                </Grid>
                </Grid>
            </form>
            </div>
            <Box mt={5}>
            </Box>
            
        </Container>
    )
}
