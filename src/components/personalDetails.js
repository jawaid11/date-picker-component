import React, { useState } from "react";
import { Grid, InputLabel, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalDetails } from "../redux/personalDetailsSlice";

const PersonalDetails = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  // Using Redux for form data management
  const formData = useSelector((state) => state.personalDetails);

  // Handle input changes and dispatch updates to Redux
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the Redux store
    dispatch(updatePersonalDetails({ [name]: value }));

    // Handle validation for each field
    let tempErrors = { ...errors };

    switch (name) {
        case "wantedJobTitle":
            tempErrors.wantedJobTitle = value ? "" : "Wanted Job Title is required.";
            break;
        case "summary":
            tempErrors.summary = value ? "" : "Summary is required.";
            break;
        case "fName":
            if (!value) {
                tempErrors.fName = "First Name is required.";
            } else if (!/^[A-Za-z]+$/.test(value)) {
                tempErrors.fName = "First Name must contain only alphabetic characters.";
            } else {
                tempErrors.fName = "";
            }
            break;
        case "lName":
            if (!value) {
                tempErrors.lName = "Last Name is required.";
            } else if (!/^[A-Za-z]+$/.test(value)) {
                tempErrors.lName = "Last Name must contain only alphabetic characters.";
            } else {
                tempErrors.lName = "";
            }
            break;
        case "email":
            if (!value) {
                tempErrors.email = "Email is required.";
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                tempErrors.email = "Email is not valid.";
            } else {
                tempErrors.email = "";
            }
            break;
        case "phone":
            if (!value) {
                tempErrors.phone = "Phone number is required.";
            } else if (!/^\d{10}$/.test(value)) {
                tempErrors.phone = "Phone number must be 10 digits.";
            } else {
                tempErrors.phone = "";
            }
            break;
        case "country":
            tempErrors.country = value ? "" : "Country is required.";
            break;
        case "city":
            tempErrors.city = value ? "" : "City is required.";
            break;
        case "address":
            tempErrors.address = value ? "" : "Address is required.";
            break;
        case "postalCode":
            if (!value) {
                tempErrors.postalCode = "Postal Code is required.";
            } else if (!/^\d{5,6}$/.test(value)) {
                tempErrors.postalCode = "Postal Code must be 5 or 6 digits.";
            } else {
                tempErrors.postalCode = "";
            }
            break;
        default:
            break;
    }
console.log('formData', formData)
    setErrors(tempErrors);
};

  return (
    <Grid container spacing={2} md={12} xs={12}>
      <Grid item md={12} xs={12}>
        <InputLabel id="wantedJobTitle">Wanted Job Title</InputLabel>
        <TextField
          inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
          autoComplete="off"
          fullWidth
          name="wantedJobTitle"
          type="text"
          variant="outlined"
          size="small"
          id="wantedJobTitle"
          placeholder="e.g. Teacher"
          value={formData.wantedJobTitle}
          onChange={handleChange}
          error={!!errors.wantedJobTitle}
          helperText={errors.wantedJobTitle}
        />
      </Grid>
      <Grid item md={12} xs={12}>
        <InputLabel id="summary">Summary</InputLabel>
        <TextField
          inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
          autoComplete="off"
          fullWidth
          name="summary"
          type="text"
          variant="outlined"
          size="small"
          id="summary"
          value={formData.summary}
          onChange={handleChange}
          error={!!errors.summary}
          helperText={errors.summary}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <InputLabel id="fName">First Name</InputLabel>
        <TextField
          inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
          autoComplete="off"
          fullWidth
          name="fName"
          type="text"
          variant="outlined"
          size="small"
          id="fName"
          value={formData.fName}
          onChange={handleChange}
          error={!!errors.fName}
          helperText={errors.fName}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <InputLabel id="mName">Middle Name</InputLabel>
        <TextField
          inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
          autoComplete="off"
          fullWidth
          name="mName"
          type="text"
          variant="outlined"
          size="small"
          id="mName"
          value={formData.mName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <InputLabel id="lName">Last Name</InputLabel>
        <TextField
          inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
          autoComplete="off"
          fullWidth
          name="lName"
          type="text"
          variant="outlined"
          size="small"
          id="lName"
          value={formData.lName}
          onChange={handleChange}
          error={!!errors.lName}
          helperText={errors.lName}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <InputLabel id="email">Email</InputLabel>
        <TextField
          inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
          autoComplete="off"
          fullWidth
          name="email"
          type="email"
          variant="outlined"
          size="small"
          id="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <InputLabel id="phone">Phone</InputLabel>
        <TextField
          inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
          autoComplete="off"
          fullWidth
          name="phone"
          type="tel"
          variant="outlined"
          size="small"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <InputLabel id="country">Country</InputLabel>
        <TextField
          inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
          autoComplete="off"
          fullWidth
          name="country"
          type="text"
          variant="outlined"
          size="small"
          id="country"
          value={formData.country}
          onChange={handleChange}
          error={!!errors.country}
          helperText={errors.country}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <InputLabel id="city">City</InputLabel>
        <TextField
          inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
          autoComplete="off"
          fullWidth
          name="city"
          type="text"
          variant="outlined"
          size="small"
          id="city"
          value={formData.city}
          onChange={handleChange}
          error={!!errors.city}
          helperText={errors.city}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <InputLabel id="postalCode">Postal Code</InputLabel>
        <TextField
          inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
          autoComplete="off"
          fullWidth
          name="postalCode"
          type="text"
          variant="outlined"
          size="small"
          id="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          error={!!errors.postalCode}
          helperText={errors.postalCode}
        />
      </Grid>
      <Grid item md={12} xs={12}>
        <InputLabel id="address">Address</InputLabel>
        <TextField
          inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
          autoComplete="off"
          fullWidth
          name="address"
          type="text"
          variant="outlined"
          size="small"
          id="address"
          value={formData.address}
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;
