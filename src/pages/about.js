import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Info as InfoIcon, Build as BuildIcon, ContactMail as ContactMailIcon } from '@mui/icons-material';

const About = () => {
  return (
    <Box sx={{ padding: "24px", backgroundColor: "#f5f5f5", minHeight: "90.5vh" }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            About <span style={{ color: "#3f51b5" }}>Get Hired</span> 
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary">
            Your Gateway to Professional Success
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" mb={2}>
            <InfoIcon sx={{ color: "#3f51b5", fontSize: 40, mr: 2 }} />
            <Typography variant="h5">Our Mission</Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            At <strong>Get Hired</strong>, we aim to simplify the job search process by providing a sleek, user-friendly platform for creating, managing, and sharing professional resumes. Our mission is to empower job seekers to showcase their skills and experiences in the best possible light, helping them to achieve their career aspirations.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" mb={2}>
            <BuildIcon sx={{ color: "#3f51b5", fontSize: 40, mr: 2 }} />
            <Typography variant="h5">Why Choose Us?</Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            With a variety of customizable templates and an intuitive design, <strong>Get Hired</strong> makes it easy for anyone to create a professional resume that stands out. Whether you are a recent graduate or an experienced professional, our tool adapts to your needs, ensuring your resume is always polished and up-to-date.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" mb={2}>
            <ContactMailIcon sx={{ color: "#3f51b5", fontSize: 40, mr: 2 }} />
            <Typography variant="h5">Contact Us</Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            We’re here to help! If you have any questions, suggestions, or need assistance, feel free to reach out to us at <strong>support@gethired.com</strong>. Our dedicated support team is always ready to assist you.
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" mb={2}>
            <InfoIcon sx={{ color: "#3f51b5", fontSize: 40, mr: 2 }} />
            <Typography variant="h5">Our Vision</Typography>
          </Box>
          <Typography variant="body1" color="textSecondary">
            We envision a world where everyone has the opportunity to present themselves in the best possible way. <strong>Get Hired</strong> is not just about resumes; it's about building confidence and opening doors to new opportunities.
          </Typography>
        </Grid>

      </Grid>
    </Box>
  );
};

export default About;
