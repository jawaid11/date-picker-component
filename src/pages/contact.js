import React from "react";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import { Phone as PhoneIcon, Email as EmailIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';

const contact = () => {
  return (
    <Box sx={{ padding: "16px", backgroundColor: "#f5f5f5", minHeight: "90.5vh" }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Get in <span style={{ color: "#3f51b5" }}>Touch</span>
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary">
            We’re here to help and answer any questions you might have.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" mb={1}>
            <PhoneIcon sx={{ color: "#3f51b5", fontSize: 40, mr: 1 }} />
            <Typography variant="h5">Call Us</Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            You can reach us at: <strong>(123) 456-7890</strong>
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" mb={1}>
            <EmailIcon sx={{ color: "#3f51b5", fontSize: 40, mr: 1 }} />
            <Typography variant="h5">Email Us</Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            Send us an email at: <strong>support@gethired.com</strong>
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" mb={1}>
            <LocationOnIcon sx={{ color: "#3f51b5", fontSize: 40, mr: 1 }} />
            <Typography variant="h5">Visit Us</Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            Our office is located at: <strong>123 Resume St, Job City, JS 45678</strong>
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Send Us a Message
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Your Name"
              sx={{ mb: 1 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Your Email"
              sx={{ mb: 1 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Subject"
              sx={{ mb: 1 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Message"
              multiline
              rows={4}
              sx={{ mb: 1 }}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 1 }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default contact;
