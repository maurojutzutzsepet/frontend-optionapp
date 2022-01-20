import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchText } from "../store/actions";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Box, Button, Grid, Menu, MenuItem } from "@material-ui/core";
import ListResults from "./ListResults";
import { useLocalStorage } from "../../../hooks";
import logoutUser from "../../../utils/logOut";
import { useStylesInput } from "./sytles";

//componente input en el navBar
export default function FormValidText() {
  const dispatch = useDispatch();
  const classes = useStylesInput();

  const [textSearch, setTextSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const [userInfo] = useLocalStorage("infoUser", "");

  //reducer donde encontramos los resultados de youtube
  const searchResults = useSelector(
    ({ textReducer }) => textReducer.textReducer.searchResults
  );

  const handleProfileMenuOpen = (event) => {
    setOpenPopup(!openPopup);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenPopup(!openPopup);
    logoutUser();
  };

  //boton dinamico para logout
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={"primary-search-account-menu"}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={openPopup}
      onClose={() => setOpenPopup(!openPopup)}
    >
      <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
    </Menu>
  );

  //funcion que realiza la busqueda
  const makeRequest = () => {
    dispatch(searchText({ textSearch, userInfo }));
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <YouTubeIcon className={classes.iconMedia} fontSize="large" />
          <Typography className={classes.title} variant="h6">
            YouTube
          </Typography>
          <Grid container item justifyContent="center">
            <Box width="70%">
              <div className={classes.search}>
                <Box display="flex">
                  <InputBase
                    placeholder="Buscar"
                    onChange={(e) => setTextSearch(e.target.value)}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") makeRequest();
                    }}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                  <Button
                    onClick={() => makeRequest()}
                    startIcon={<SearchIcon style={{ color: "#ffff" }} />}
                  />
                </Box>
              </div>
            </Box>
          </Grid>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              aria-controls={"primary-search-account-menu"}
              color="inherit"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* se llama al componente de listado de resultados*/}
      <ListResults searchResults={searchResults} />
      {/* popup de logout*/}
      {renderMenu}
    </div>
  );
}
