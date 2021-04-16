import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import AdmSidebar from "./AdmSidebar";
import useStyles from "./style";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

import Alejo from "../home/Alejo";
const Admin = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container>
        <AdminNavbar />
      </Container>
      <Route exact path="/admin/add" component={Alejo}></Route>
    </React.Fragment>
  );
};

export default Admin;
