import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import { isAuthenticated } from '../utilities/isAuthenticated';


//----------------------------------------------added--------------------------------------------------
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utilities/mutations';
//----------------------------------------------^^^^^--------------------------------------------------

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="PLACEHOLDER">
        Pixeleer
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login(props) { // added props inside login
  //-----------------------------------------------------------------added-----------------------------------------------
    const [userInput, setUserInput] = useState({email:'', username: '', password: '', type: 'login'});
    const [addUser] = useMutation(ADD_USER, {variables: userInput});
    const [loginUser] = useMutation(LOGIN_USER, {variables: userInput});

  //---------------------------------------------------------------------------------------------------------------------
  const navigate = useNavigate();

  function navigateHome() {
    navigate('/')
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let user, token;
    let mutation = userInput.type === 'register' ? addUser : loginUser;
    let type = userInput.type === 'register' ? 'addUser' : 'loginUser';

    const {data} = await mutation();

    user = data[type].user;
    token = data[type].token;

    localStorage.setItem('token', token)
    console.log(user)
    const userData = isAuthenticated();
    props.setUser(userData);


    navigate('/');

    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  const handleInputChange = (e) => {
    setUserInput({...userInput, [e.target.name]: e.target.value})
  }

  const clickedRegister = () => {
    setUserInput({...userInput, type: 'register'})
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={2}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random/art)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 0, bgcolor: 'secondary.main' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
            <h2>{userInput.type} 
              <Button onClick={clickedRegister}
                variant="contained"
                sx={{ mt: 3, mb: 4, ml: 10 }}
              >Sign-Up</Button>
            </h2>
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={userInput.email}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                value={userInput.username}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={userInput.password}
                onChange={handleInputChange}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container >
                <Grid item xs={6} sm={6} md={6} lg={6}>
                  <Link href="#" variant="body2" sx={{ ml: 4 }} fullWidth>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs>
                  <Button onClick={navigateHome}
                    variant="contained"
                    fullWidth
                    // sx={{ mr: 12}}
                  >Go Home</Button>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
