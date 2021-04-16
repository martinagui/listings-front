import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AdmSidebar from "./AdmSidebar";
import useStyles from "./style";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AddForm from "./AddForm";

const Admin = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <AdminNavbar />
        <Box className={classes.addForm}>
          <AddForm />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Admin;
