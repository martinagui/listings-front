import React, { useState, useEffect } from "react";
import axios from "axios";

import useStyles from "./style";
import { useTheme, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";

//Sidebar buy/rent selector
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

//Icons
import HomeIcon from "@material-ui/icons/Home";
import ApartmentIcon from "@material-ui/icons/Apartment";

//Pedido Axios desde aqui.
//Get URL
//localhost:4000/api/q?type[]=house&type[]=apt

const Sidebar = ({ listings, setListings }) => {
  const classes = useStyles();
  const theme = useTheme();

  //Local storage:

  const [laData, setLaData] = React.useState("");

  //Rent or Buy
  const [searchType, setsearchType] = React.useState("Rent");
  console.log(searchType);
  //Price Range
  const [min, setMin] = React.useState("");
  const [max, setMax] = React.useState("");
  //Property Types/Kind
  const [propertyType, setPropertyType] = React.useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000/api/q?searchType=${searchType}`)
  //     .then((res) => {
  //       // setListings(res.data);
  //       setLaData(res.data);
  //     })
  //     .then(console.log(laData))
  //     .catch((err) => {
  //       console.log("Error");
  //     });
  // }, []);

  // pTypeMap function receives the propertyType filters (array) and delivers the formatted string required for axios's req.query.
  function pTypeMap(pType) {
    let typeUrl = "";
    //Loop through propertyType and return the query+& except for the last element of the array.
    //I cant fucking believe I did this 10/4/2021 @ 4:26am
    for (let i = 0; i < pType.length; i++) {
      i !== pType.length - 1
        ? (typeUrl += `type[]=${pType[i]}&`)
        : (typeUrl += `type[]=${pType[i]}`);
    }
    return typeUrl;
  }

  function apply() {
    axios
      .get(
        `http://localhost:4000/api/q?searchType=${searchType}&min=${min}&max=${max}&${pTypeMap(
          propertyType
        )}`
      )
      // .get("http://localhost:4000/api/listings")
      .then((res) => {
        console.log(res.data);
        setListings(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  const prices = [
    0,
    50000,
    100000,
    150000,
    200000,
    250000,
    300000,
    350000,
    400000,
    450000,
    500000,
    550000,
    600000,
    700000,
    750000,
  ];
  let minPrices = [];
  let maxPrices = [];

  const handleRentOrBuy = (event, newValue) => {
    setsearchType(newValue);
    console.log(newValue);
  };

  const handleMinChange = (event) => {
    setMin(event.target.value);
    console.log("Min value", min);
  };
  const handleMaxChange = (event) => {
    setMax(event.target.value);
    console.log(max);
  };

  //PROPERTY TYPES

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const types = [
    "House",
    "Townhouse",
    "Condo",
    "Land",
    "Mobile home",
    "Commercial Building",
    "Office",
  ];

  function getStyles(type, propertyType, theme) {
    return {
      fontWeight:
        propertyType.indexOf(type) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleTypeChange = (event) => {
    setPropertyType(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.title}>{searchType}</Box>

      <Box className={classes.rentBuy}>
        <BottomNavigation
          value={searchType}
          onChange={handleRentOrBuy}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            value="Rent"
            label="Rent"
            icon={<ApartmentIcon />}
          />
          <BottomNavigationAction value="Buy" label="Buy" icon={<HomeIcon />} />
        </BottomNavigation>
      </Box>

      <Box className={classes.price}>
        {/* MIN PRICE SELECTOR */}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Min Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={min}
            onChange={handleMinChange}
          >
            {prices.map((price, i) => (
              <MenuItem value={price}>{price / 1000}K</MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* MAX PRICE SELECTOR */}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Max Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={max}
            onChange={handleMaxChange}
          >
            {prices.map((price, i) => (
              <MenuItem value={price}>{price / 1000}K</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.type}>
        {/* PROPERTY TYPES */}
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-mutiple-chip-label">Property Type</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={propertyType}
            onChange={handleTypeChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {types.map((type) => (
              <MenuItem
                key={type}
                value={type}
                style={getStyles(type, propertyType, theme)}
              >
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.features}>Features</Box>
      <Box className={classes.apply}>
        <Button variant="contained" color="primary" onClick={apply}>
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
