import React from "react";

//Card
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import useStyles from "./cardStyle";

export default function ListingCard({ listing }) {
  //Material UI classes
  const classes = useStyles();

  //   //React hook useState;
  //   const [expanded, setExpanded] = React.useState(false);

  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };

  return (
    <Card className={classes.root} className={classes.fullHeightCard}>
      <CardMedia
        className={classes.media}
        image={listing.imageUrl}
        title={listing.address}
      />
      <Box className={classes.priceContainer}>
        <Box className={classes.price}>${listing.price}</Box>

        <Box className={classes.fav}>
          <FavoriteBorderIcon />
        </Box>
      </Box>

      <Box className={classes.featureContainer}>
        <Box className={classes.feature}>
          {listing.beds} Beds {listing.baths} Baths {listing.sqft} m2
        </Box>
        <Box className={classes.address}>
          {listing.address} {listing.city.toUpperCase()} {listing.state}
        </Box>
      </Box>
    </Card>
  );
}
