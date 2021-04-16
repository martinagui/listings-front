import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    // textAlign: "center",
    // alignSelf: "center",
  },
  title: {
    paddingTop: "2%",
    paddingBottom: "4%",
    display: "flex",
    textAlign: "center",
    alignSelf: "center",
    fontSize: "25px",
  },
  rentBuy: {
    paddingTop: "2%",
    paddingBottom: "4%",
  },
  price: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  features: {
    paddingTop: "4%",
    paddingBottom: "4%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  apply: {
    paddingTop: "2%",
    paddingBottom: "2%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl: {
    width: 160,
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  type: {
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

export default useStyles;
