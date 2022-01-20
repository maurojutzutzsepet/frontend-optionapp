import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./store/actions";
import { useLocalStorage } from "../../hooks";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainForm: {
    margin: 68,
  },
  formPaper: {
    margin: 24,
    padding: 12,
  },
  navBar: {
    backgroundColor: "#282828;",
  },
  iconMedia: {
    color: "#f00;",
  },
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useLocalStorage("infoUser", "");

  //selector con informacion del usuario
  const infoUser = useSelector(
    ({ loginReducer }) => loginReducer.loginReducer.infoUser
  );

  //se inicia secion y se almacena token el localstorage
  useEffect(() => {
    if (infoUser && infoUser.token) {
      setUserInfo(infoUser);
    }
  }, [infoUser, setUserInfo]);

  //validacion si el usuario ha iniciado sesison
  //si encuentra un token ingresa al modulo search
  useEffect(() => {
    if (userInfo && userInfo.token) {
      navigate("/search");
    }
  }, [userInfo, navigate]);

  //disptach que envia los datos para inicio de sesion
  const submitLogin = () => {
    dispatch(loginAction({ username, password }));
  };

  return (
    <div>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <YouTubeIcon className={classes.iconMedia} fontSize="large" />
          <Typography className={classes.title} variant="h6">
            YouTube
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <div className={classes.mainForm}>
          <Paper elevation={3}>
            <div className={classes.formPaper}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <YouTubeIcon className={classes.iconMedia} fontSize="large" />
                <Typography>Login </Typography>
              </Grid>
              <Grid item xs={12} className={classes.formPaper}>
                <TextField
                  id="username"
                  label="username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} className={classes.formPaper}>
                <TextField
                  id="standard-password-input"
                  label="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid container item xs={12} justifyContent="center">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => submitLogin()}
                >
                  Sign in
                </Button>
              </Grid>
              Don't have an account yet?{" "}
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate("/signup")}
              >
                Register now
              </Link>
            </div>
          </Paper>
        </div>
      </Grid>
    </div>
  );
}
