import React from "react";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

// Small amount of styles for this form.
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: { paddingTop: "24px" },
  gridPad: { marginLeft: "0px" },
  features: {
    display: "flex",
    flexDirection: "column",
  },
  send: {
    marginTop: "50px",
    display: "flex",
    alignItems: "right",
  },
}));

export default function AddressForm() {
  const classes = useStyles();

  //Storing all form values for use in GET request.
  const [form, setForm] = React.useState({});

  //Temporary hardcoded values
  var date = new Date();
  date.setDate(date.getDate() + 30);

  form.userId = 1234;
  form.statusId = 1;
  form.expirationDate = date;

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [key]: value });
  };

  console.log(form);
  //Price
  const [value, setValue] = React.useState();

  //Simple Select - Propiedades

  // const [listingTypeId, setListingTypeId] = React.useState("");
  // const [rentOrSale, setRentOrSale] = React.useState("");

  const listingTypes = [
    "House",
    "Townhouse",
    "Condo",
    "Land",
    "Mobile home",
    "Commercial Building",
    "Office",
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const {
      address,
      baths,
      beds,
      city,
      description,
      garage,
      hasPool,
      imageUrl,
      listingTypeId,
      price,
      rentOrSale,
      sqft,
      state,
      zip,
      userId,
      statusId,
      expirationDate,
      propertyTypeId,
    } = form;

    axios
      .post("http://localhost:4000/api/add", {
        address,
        baths,
        beds,
        city,
        description,
        garage,
        hasPool,
        imageUrl,
        listingTypeId,
        price,
        rentOrSale,
        sqft,
        state,
        zip,
        userId,
        statusId,
        expirationDate,
        propertyTypeId,
      })

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  return (
    <React.Fragment>
      <Box className={classes.main}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Adding a listing
        </Typography>
        <Box>
          <FormControl required className={classes.formControl}>
            <InputLabel id="listingTypeId">Rent or Sell</InputLabel>
            <Select
              labelId="listingTypeId"
              id="listingTypeId"
              name="listingTypeId"
              value={form.listingTypeId || ""}
              onChange={handleChange}
              className={classes.selectEmpty}
            >
              <MenuItem value={1}>Rent</MenuItem>
              <MenuItem value={2}>Sell</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>

          <FormControl required className={classes.formControl}>
            <InputLabel id="propertyTypeId">Property Type</InputLabel>
            <Select
              labelId="propertyTypeId"
              id="propertyTypeId"
              name="propertyTypeId"
              value={form.propertyTypeId || ""}
              onChange={handleChange}
              className={classes.selectEmpty}
            >
              <MenuItem value={1}>House</MenuItem>
              <MenuItem value={2}>Apartment</MenuItem>
              <MenuItem value={3}>Condo</MenuItem>
              <MenuItem value={4}>Land</MenuItem>
              <MenuItem value={5}>Mobile home</MenuItem>
              <MenuItem value={6}>Commercial bldng</MenuItem>
              <MenuItem value={7}>Office</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            onChange={handleChange}
            value={form.address || ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            multiline
            fullWidth
            rows={3}
            onChange={handleChange}
            value={form.description}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            onChange={handleChange}
            value={form.city || ""}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="state"
            name="state"
            label="State"
            fullWidth
            onChange={handleChange}
            value={form.state || ""}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip"
            fullWidth
            onChange={handleChange}
            value={form.zip || ""}
          />
        </Grid>
      </Grid>
      <Box pt={5}>
        <Typography variant="h6" gutterBottom>
          Listing details
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {/* <CurrencyTextField
              label="Asking price"
              currencySymbol="$"
              outputFormat="number"
              name="price"
              decimalCharacter=","
              digitGroupSeparator="."
              // onChange={(event, value) => setValue(value)}
              InputProps={{
                style: { fontSize: 20 }, // font size of input text
              }}
              value={form.price}
              onChange={handleChange}
            /> */}
            <Grid item xs={12}>
              <TextField
                required
                id="price"
                name="price"
                label="Price"
                type="number"
                fullWidth
                onChange={handleChange}
                value={form.price || ""}
                InputProps={{
                  style: { fontSize: 20 },
                }}
              />
            </Grid>

            <Box className={classes.features}>
              <Grid item xs={3}>
                <TextField
                  required
                  id="beds"
                  name="beds"
                  label="Beds"
                  type="number"
                  fullWidth
                  onChange={handleChange}
                  value={form.beds || ""}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  id="baths"
                  name="baths"
                  label="Baths"
                  type="number"
                  fullWidth
                  onChange={handleChange}
                  value={form.baths || ""}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  id="garage"
                  name="garage"
                  label="Garages"
                  type="number"
                  fullWidth
                  onChange={handleChange}
                  value={form.garage || ""}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  id="pool"
                  name="hasPool"
                  label="Pool"
                  fullWidth
                  onChange={handleChange}
                  value={form.hasPool || ""}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  id="sqft"
                  name="sqft"
                  label="Sq.Ft."
                  type="number"
                  fullWidth
                  onChange={handleChange}
                  value={form.sqft || ""}
                />
              </Grid>
            </Box>
          </Grid>
          <Grid container spacing={3} className={classes.gridPad}>
            <Grid item xs={12}>
              <TextField
                required
                id="imageUrl"
                name="imageUrl"
                label="Image URL"
                fullWidth
                // autoComplete="given-name"
                onChange={handleChange}
                value={form.imageUrl || ""}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box className={classes.send}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Send
        </Button>
      </Box>
    </React.Fragment>
  );
}
