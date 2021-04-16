import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: "5px",
    backgroundColor: "red",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "blue",
      display: "flex",
      flexDirection: "column",
    },
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    backgroundColor: "green",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "40px",
    },
  },
  title: {
    paddingTop: "2%",
    paddingBottom: "4%",
    display: "flex",
    textAlign: "center",
    alignSelf: "center",
    fontSize: "25px",
  },
  add: {
    paddingTop: "2%",
    paddingBottom: "4%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignSelf: "center",
    fontSize: "25px",
  },
  btn: {
    marginTop: "4%",
    marginBottom: "4%",
  },
  addForm: {
    marginTop: "40px",
    marginRight: "15%",
    marginLeft: "15%",
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
