import React, { useState, useEffect } from "react";

import axios from "axios";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ListingCard from "./Card";
import Sidebar from "../sidebar/Sidebar";

//Import Styles
import useStyles from "./style";

const Listings = () => {
  //Using classes for Material UI
  const classes = useStyles();
  const [listings, setListings] = useState([]);

  console.log("Listings", listings);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/api/listings")
  //     .then((res) => {
  //       console.log(res.data);
  //       setListings(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("Error");
  //     });
  // }, []);

  return (
    <React.Fragment>
      <Container>
        <Box className={classes.container}>
          <Box className={classes.sidebar}>
            <Sidebar listings={listings} setListings={setListings} />
          </Box>
          <Box className={classes.listings}>
            <Box className={classes.nOfListings}>
              Showing {listings.length} properties
            </Box>

            <Grid container spacing={2}>
              {listings.map((listing, i) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={i}>
                    <ListingCard listing={listing} setListings={setListings} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Listings;
