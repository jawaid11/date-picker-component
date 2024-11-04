import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import homeImage from "../assets/images/home.png";

const Home = () => {
  const navigate = useNavigate(); 

  const handleCreateResumeClick = () => {
    navigate("/template");
  };

  return (
    <Grid container xs={12} style={{ paddingTop: "48px" }}>
      <Grid container item xs={12} md={6}>
        <img src={homeImage} alt="home" height="100%" width="100%" />
      </Grid>
      <Grid container item xs={12} md={6}>
        <Box style={{ margin: "16px" }}>
          <Typography
            variant="h4"
            style={{ paddingTop: "48px", fontWeight: "bold" }}
          >
            Welcome to Get Hired
          </Typography>
          <Typography
            variant="h6"
            style={{ paddingTop: "48px", fontWeight: "bold" }}
          >
            Welcome to Get Hired
          </Typography>
          <Typography variant="h6">
            At Get Hired, we believe that your resume is your first step towards
            achieving your career goals. Whether you're a seasoned professional
            or just starting out, our intuitive and powerful resume builder
            helps you create a standout resume effortlessly.
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateResumeClick} // Add onClick event to navigate
          >
            Create Resume
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
