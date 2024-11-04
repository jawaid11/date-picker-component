import React, { useState } from 'react';
import { Container, Typography, Box, Button, IconButton, Card, CardContent, CardActionArea, Grid } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Template1 from '../assets/images/template1.png';
import Template2 from '../assets/images/template2.png';
import Template3 from '../assets/images/template3.png';
import Template4 from '../assets/images/template4.png';
import Logo from '../assets/images/home.png';
import { useNavigate } from 'react-router-dom';

const templates = [
  { id: 1, name: 'Template 1', image: Template1 },
  { id: 2, name: 'Template 2', image: Template2 },
  { id: 3, name: 'Template 3', image: Template3 },
  { id: 4, name: 'Template 4', image: Template4 },
];

const TemplateSelector = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate here

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? templates.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === templates.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSelectTemplate = () => {
    setSelectedTemplate(templates[currentIndex].id);
    console.log(`Selected Template: ${templates[currentIndex].name}`);
    navigate('./form')
  };

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {/* Left side (Carousel) */}
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <IconButton onClick={handlePrev} aria-label="previous">
              <ArrowBackIosNewIcon />
            </IconButton>
            <Card
              sx={{
                width: '65%',
                maxHeight: '80vh',
                position: 'relative',
                border: selectedTemplate === templates[currentIndex].id ? '2px solid #000' : '1px solid #ccc',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)', // Slightly darker background on hover
                },
              }}
            >
              <CardActionArea onClick={handleSelectTemplate}>
                <CardContent>
                  <img
                    src={templates[currentIndex].image}
                    alt={templates[currentIndex].name}
                    style={{ width: '100%', height: 'auto', maxHeight: '70vh' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSelectTemplate}
                    >
                      Use
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
            <IconButton onClick={handleNext} aria-label="next">
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Right side (Logo) */}
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <img src={Logo} alt="Logo" style={{ maxWidth: '80%', height: 'auto' }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TemplateSelector;
