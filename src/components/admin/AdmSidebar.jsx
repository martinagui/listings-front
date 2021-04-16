import React, { useState, useEffect } from "react";
import axios from "axios";
import useStyles from "../admin/style";
import Box from "@material-ui/core/box";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const AdmSidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sidebar}>
      <Box className={classes.title}>Dashboard</Box>
      <Box className={classes.add}>
        <Button className={classes.btn} variant="contained" color="primary">
          Favourites
        </Button>

        <Button
          className={classes.btn}
          component={Link}
          to="/admin/add"
          variant="contained"
          color="primary"
        >
          New Listing
        </Button>

        <Button className={classes.btn} variant="contained" color="primary">
          Button 3
        </Button>

        <Button
          className={classes.btn}
          component={Link}
          to="/listings"
          variant="contained"
          color="primary"
        >
          Listings
        </Button>
      </Box>
    </Box>
  );
};

export default AdmSidebar;
