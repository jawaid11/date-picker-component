import React, { useState } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { LuGraduationCap } from "react-icons/lu";
import { PiToolboxLight } from "react-icons/pi";
import ResumePreview from './preview';
import PersonalDetails from "./personalDetails";
import SkillsAndTools from "./skillsAndTools";
import EducationDetails from "./educationDetails";
import Experience from "./experience";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const labels = [
  {
    id: 1,
    heading: "Personal Details",
    icon: <PersonOutlineIcon />,
    component: <PersonalDetails />,
  },
  {
    id: 2,
    heading: "Experience",
    icon: <PiToolboxLight />,
    component: <Experience />,
  },
  {
    id: 3,
    heading: "Education Details",
    icon: <LuGraduationCap />,
    component: <EducationDetails />,
  },
  {
    id: 4,
    heading: "Skills And Tools",
    icon: <LuGraduationCap />,
    component: <SkillsAndTools />,
  },
  {
    id: 5,
    heading: "Skills And Tools",
    icon: <LuGraduationCap />,
    component: <SkillsAndTools />,
  },
];

function StepperComponent({ activeStep }) {
  return (
    <Box sx={{ width: '100%', padding: '12px' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {labels.map((label) => (
          <Step key={label.id}>
            <StepLabel>{label.heading}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

const Form = () => {
  const [formData, setFormData] = useState({
    wantedJobTitle: "",
    summary: "",
    fName: "",
    lName: "",
    mName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
  });

  const [activeStep, setActiveStep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep < labels.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <Grid container sx={{ width: '100%', overflowX: 'hidden', marginTop: '66px' }}>
      <Grid 
        item 
        md={6} 
        xs={12} 
        className="custom-scroll"
        sx={{ 
          padding: "8px 0px 0px 12px", 
          height: '660px', 
          display: 'flex', 
          flexDirection: 'column' 
        }} 
      >
        <StepperComponent activeStep={activeStep} />
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }} mt={1}>
          <Box display="flex" alignItems="center">
            {labels[activeStep].icon}
            <Typography variant="h6" sx={{ marginLeft: '8px' }}>
              {labels[activeStep].heading}
            </Typography>
          </Box>
          <Box mt={1}>
            {labels[activeStep].component}
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="center" mt={2} mr={2.5}>
          <Button
            sx={{ marginRight: '8px' }}
            variant="outlined"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            Back
          </Button>
          <Button variant="outlined" onClick={handleSubmit}>
            {activeStep === labels.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Grid>

      {/* Resume preview on the right */}
      <Grid 
        item 
        md={6} 
        xs={12} 
        className="custom-scroll"
        sx={{ 
          padding: "8px 12px 8px 12px", 
          height: '600px', 
          overflowY: 'auto', 
          overflowX: 'hidden'
        }}
      >
        <Typography variant="h6">
          Resume Preview
        </Typography>
        <ResumePreview formData={formData} />
      </Grid>
    </Grid>
  );
};

export default Form;
