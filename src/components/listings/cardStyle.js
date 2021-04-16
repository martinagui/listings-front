import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    "&:hover": {
      boxShadow: "-1px 7px 14px -1px rgba(57,56,56,0.38)",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  fullHeightCard: {
    height: "100%",
  },
  cardHeaderHeight: {
    height: "120px",
  },
  priceContainer: {
    paddingTop: "4%",
    paddingBottom: "4%",
    paddingLeft: "4%",
    paddingRight: "4%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
  },
  fav: {},
  featureContainer: {
    paddingTop: "0%",
    paddingBottom: "4%",
    paddingLeft: "4%",
    paddingRight: "4%",
    display: "flex",
    flexDirection: "column",
  },
  feature: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    paddingBottom: "1%",
  },
  address: {
    fontSize: 15,
    fontWeight: "200",
    fontFamily: "Arial, sans-serif",
  },
}));

export default useStyles;
