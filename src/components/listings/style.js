import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5px",
    // backgroundColor: "red",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "blue",
      display: "flex",
      flexDirection: "column",
    },
  },
  sidebar: {
    width: "20%",
    // backgroundColor: "green",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "40px",
    },
  },
  listings: {
    width: "80%",
    // backgroundColor: "blue",
    paddingLeft: "0.5%",
  },
  nOfListings: {
    paddingTop: "2px",
    paddingBottom: "6px",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
  },
}));

export default useStyles;
