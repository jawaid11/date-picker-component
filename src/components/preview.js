import React, { useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import html2pdf from "html2pdf.js";
import { useSelector } from "react-redux";

const ResumePreview = () => {
  const resumeRef = useRef();
  const personalDetails = useSelector((state) => state.personalDetails);
  const educationDetailsList = useSelector((state) => state.educationDetails);
  const experienceList = useSelector((state) => state.experienceDetails);
  const skills = useSelector((state) => state.skills);
  const tools = useSelector((state) => state.tools);

  console.log("skills", skills);
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
    <>
      <Box
        ref={resumeRef}
        sx={{
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: 3,
          width: "100%",
          maxHeight: "96vh", // Use viewport height units
          overflowY: "auto", // Enable vertical scrolling
          lineHeight: 1.6,
        }}
      >
        {/* Personal details */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FF6F00" }}>
          {personalDetails.fName} {personalDetails.mName}{" "}
          {personalDetails.lName}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#FF6F00", marginBottom: "10px" }}
        >
          {personalDetails.wantedJobTitle}
        </Typography>
        <Typography variant="body2">
          {personalDetails.city}, {personalDetails.country} |{" "}
          {personalDetails.phone} | {personalDetails.email}
        </Typography>
        {/* Summary */}
        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="body1" sx={{ fontStyle: "italic" }}>
            {personalDetails.summary}
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "#FF6F00", margin: "8px 0" }} />
        {/* Work Experience */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#FF6F00" }}
          >
            Work Experience
          </Typography>
          {experienceList?.map((data, index) => (
            <Box key={index}>
              <Typography variant="body2" sx={{ color: "#FF6F00" }}>
                {data?.companyName}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FF6F00", marginBottom: "8px" }}
              >
                {data?.jobTitle} | {data?.startDate} - {data?.endDate}
              </Typography>
              <List>
                {/* List out experience details */}
                <ListItem sx={{ padding: "0" }}>
                  <Typography
                    variant="body2"
                    sx={{ marginBottom: "5px" }}
                    dangerouslySetInnerHTML={{ __html: data.description || "" }}
                  />
                </ListItem>
              </List>
            </Box>
          ))}
        </Box>
        <Divider sx={{ borderColor: "#FF6F00", margin: "8px 0" }} />
        {/* Education Section */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#FF6F00" }}
          >
            Education
          </Typography>
          {/* Loop through education details */}
          {educationDetailsList?.map((education, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ color: "#FF6F00" }}>
                {education.school}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#FF6F00", marginBottom: "8px" }}
              >
                {education.courseName} | {education.startDate} -{" "}
                {education.endDate}
              </Typography>
              <Typography variant="body2">{education.description}</Typography>
            </Box>
          ))}
        </Box>
        <Divider sx={{ borderColor: "#FF6F00", margin: "8px 0" }} />
        {/* Skills Section */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#FF6F00" }}
          >
            Skills
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
            {skills.map((data, index) => (
              <span key={index}>
                {data.skill}
                {index < skills.length - 1 && " | "}{" "}
                {/* Add separator only between skills */}
              </span>
            ))}
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "#FF6F00", margin: "8px 0" }} />

        {/* Tools Section */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#FF6F00" }}
          >
            Tools
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
            {tools.map((data, index) => (
              <span key={index}>
                {data.tool}
                {index < tools.length - 1 && " | "}{" "}
              </span>
            ))}
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        item
        md={12}
        xs={12}
        sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleDownload}
          sx={{ marginTop: "16px" }}
        >
          Download PDF
        </Button>
      </Grid>
    </>
  );
};

export default ResumePreview;
