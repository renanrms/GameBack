import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as urls from '../constants/Urls';
import { loginAdmin, dispatchLogin } from '../api/auth';
import { Code } from '@material-ui/icons';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://gameback.com/">
        GameBack
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

export default function Signin(props) {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [error, setError] = useState('')
  const history = useHistory();

  function handleOpenSnackbar() {
    setOpenSnackbar(true)
  }

  function handleCloseSnackbar() {
    setOpenSnackbar(false)
  }

  function handleSubmit(event) {
    event.preventDefault();

    loginAdmin(username, password)
    .then((response) => {
      const { code, data } = response;
      if (code == 200) {
        dispatchLogin(data.token)
        return history.push(urls.DASHBOARD);
      } else {
        setError(`Nome de usuário ou senha inválida.`)
        handleOpenSnackbar(true)
      }
    });
  }

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Fazer login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nome de usuário"
            name="username"
            value={username}
            onChange={(event) => { setUsername(event.target.value) }}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            value={password}
            onChange={(event) => { setPassword(event.target.value) }}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!validateForm()}
          >
            Entrar
          </Button>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error">{error}</Alert>
      </Snackbar>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}