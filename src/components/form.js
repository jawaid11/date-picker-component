import React, { useState, useRef } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { LuGraduationCap } from "react-icons/lu";
import { PiToolboxLight } from "react-icons/pi";
import ResumePreview from "./preview";
import PersonalDetails from "./personalDetails";
import SkillsAndTools from "./skillsAndTools";
import EducationDetails from "./educationDetails";
import Experience from "./experience";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import html2pdf from "html2pdf.js";
import { useSelector } from "react-redux";

const labels = [
  { id: 1, heading: "Personal Details", icon: <PersonOutlineIcon />, component: <PersonalDetails /> },
  { id: 2, heading: "Experience", icon: <PiToolboxLight />, component: <Experience /> },
  { id: 3, heading: "Education Details", icon: <LuGraduationCap />, component: <EducationDetails /> },
  { id: 4, heading: "Skills And Tools", icon: <PiToolboxLight />, component: <SkillsAndTools /> },
];

function StepperComponent({ activeStep }) {
  return (
    <Box sx={{ width: "100%", padding: "12px" }}>
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
  const [activeStep, setActiveStep] = useState(0);
  const resumeRef = useRef();

  // Move useSelector here to access personalDetails
  const personalDetails = useSelector((state) => state.personalDetails);

  const handleNext = () => {
    if (activeStep < labels.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const handleDownload = () => {
    const element = resumeRef.current;
    const options = {
      margin: 0.5,
      filename: `${personalDetails.fName}_${personalDetails.lName}_Resume.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(options).save();
  };

  return (
    <Grid container sx={{ marginTop:"64px", width: "100%", height: "calc(100vh - 64px)", overflowX: "hidden", backgroundColor: "#f5f5f5" }}>
      <Grid
        item
        md={6}
        xs={12}
        className="custom-scroll"
        sx={{
          padding: "8px 0px 0px 12px",
          height: "660px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StepperComponent activeStep={activeStep} />
        <Box sx={{ flexGrow: 1, overflowY: "auto" }} mt={1}>
          <Box display="flex" alignItems="center">
            {labels[activeStep].icon}
            <Typography variant="h6" sx={{ marginLeft: "8px" }}>
              {labels[activeStep].heading}
            </Typography>
          </Box>
          <Box mt={1}>{labels[activeStep].component}</Box>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="center"  mt={2} mr={2.5}>
          <Button sx={{ marginRight: "8px" }} variant="outlined" onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>
          <Button variant="outlined" onClick={handleNext}>
            {activeStep === labels.length - 1 ? "Finish" : "Next"}
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
      padding: "8px 0px 0px 12px",
      height: "660px",
      display: "flex",
      flexDirection: "column",
    }}
  >
        <Box sx={{ position: "sticky", top: 0, background: "#fff", zIndex: 1, padding: "8px", backgroundColor: "#f5f5f5" }}>
          <Typography variant="h6">Resume Preview</Typography>
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: "auto", paddingRight: "14px" }} ref={resumeRef}>
          <ResumePreview />
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="center" mt={2} mr={2.5}>
          <Button variant="outlined" onClick={handleDownload}>
            Download
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Form;
