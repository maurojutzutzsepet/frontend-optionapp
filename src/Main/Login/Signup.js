import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "./store/actions";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

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

export default function Signup() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const flagLogin = useSelector(
    ({ loginReducer }) => loginReducer.loginReducer.flagLogin
  );

  useEffect(() => {
    if (flagLogin) {
      navigate("/");
      alert.success("Usuario creado correctamente!!!");
    }
  }, [flagLogin, navigate, alert]);

  const submitsignUp = () => {
    dispatch(signupAction({ username, email, password }));
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
                <Typography>Sign up </Typography>
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
                  id="email"
                  label="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onClick={() => submitsignUp()}
                >
                  Sign up
                </Button>
              </Grid>
            </div>
          </Paper>
        </div>
      </Grid>
    </div>
  );
}
