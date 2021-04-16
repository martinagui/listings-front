import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    height: "40px",
    backgroundColor: "white",
    marginTop: "9px",
  },
  links: {
    marginLeft: "2%",
    marginRight: "2%",
    textDecoration: "none",
    // textTransform: "uppercase",
    fontSize: "16px",
    fontFamily: "arial",
    fontWeight: "400",
    color: "black",
    "&:hover": {
      fontSize: "17px",
    },
    "&:active": {
      color: "blue",
    },
  },
}));

export default function AdminNavbar() {
  const classes = useStyles();

  return (
    <Box className={classes.nav}>
      <NavLink
        exact
        to="/admin/add"
        activeClassName="active"
        className={classes.links}
      >
        New Listing
      </NavLink>
      <NavLink exact to="/" activeClassName="active" className={classes.links}>
        My Listings
      </NavLink>
      <NavLink exact to="/" activeClassName="active" className={classes.links}>
        Favourites
      </NavLink>
      <NavLink exact to="/" activeClassName="active" className={classes.links}>
        Account Settings
      </NavLink>
      <NavLink exact to="/" activeClassName="active" className={classes.links}>
        Logout
      </NavLink>
    </Box>
  );
}
