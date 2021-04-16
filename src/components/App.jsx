import React from "react";
// import { Router, Route, Switch } from "react-router";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Listings from "./listings/Listings";
import Admin from "./admin/Admin";
import Add from "./admin/Add";

export default function App() {
  return (
    <>
      <Navbar />

      <Route exact path="/" component={Home}></Route>
      <Route exact path="/listings" component={Listings}></Route>
      <Route exact path="/admin" component={Admin}></Route>
      <Route exact path="/admin/add" component={Add}></Route>
    </>
  );
}
