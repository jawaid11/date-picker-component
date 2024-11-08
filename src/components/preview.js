import React, { useRef } from "react";
import { Box, Typography, Divider, List, ListItem } from "@mui/material";
import { useSelector } from "react-redux";

const ResumePreview = () => {
  const resumeRef = useRef();
  const personalDetails = useSelector((state) => state.personalDetails);
  const educationDetailsList = useSelector((state) => state.educationDetails);
  const experienceList = useSelector((state) => state.experienceDetails);
  const skills = useSelector((state) => state.skills);
  const tools = useSelector((state) => state.tools);

  return (
    <Box
      ref={resumeRef}
      className="custom-scroll"
      sx={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: 3,
        width: "100%",
        maxHeight: "96vh",
        overflowY: "auto",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Personal details */}
      {personalDetails.fName && (
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FF6F00" }}>
            {personalDetails.fName} {personalDetails.mName} {personalDetails.lName}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#FF6F00", marginBottom: "10px" }}>
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
          <Divider sx={{ borderColor: "#FF6F00", margin: "20px 0" }} />
        </Box>
      )}

      {/* Work Experience */}
      {experienceList && experienceList.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FF6F00" }}>
            Work Experience
          </Typography>
          {experienceList.map((data, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ color: "#FF6F00" }}>
                {data.companyName}
              </Typography>
              <Typography variant="body2" sx={{ color: "#FF6F00", marginBottom: "8px" }}>
                {data.jobTitle} | {data.startDate} - {data.endDate}
              </Typography>
              <List>
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
          <Divider sx={{ borderColor: "#FF6F00", margin: "20px 0" }} />
        </Box>
      )}

      {/* Education Section */}
      {educationDetailsList && educationDetailsList.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FF6F00" }}>
            Education
          </Typography>
          {educationDetailsList.map((education, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ color: "#FF6F00" }}>
                {education.school}
              </Typography>
              <Typography variant="body2" sx={{ color: "#FF6F00", marginBottom: "8px" }}>
                {education.courseName} | {education.startDate} - {education.endDate}
              </Typography>
              <Typography dangerouslySetInnerHTML={{ __html: education.description || "" }} />
            </Box>
          ))}
          <Divider sx={{ borderColor: "#FF6F00", margin: "20px 0" }} />
        </Box>
      )}

      {/* Skills Section */}
      {skills && skills.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FF6F00" }}>
            Skills
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
            {skills.map((data, index) => (
              <span key={index}>
                {data.skill}
                {index < skills.length - 1 && " | "}{" "}
              </span>
            ))}
          </Typography>
          <Divider sx={{ borderColor: "#FF6F00", margin: "20px 0" }} />
        </Box>
      )}

      {/* Tools Section */}
      {tools && tools.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#FF6F00" }}>
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
      )}
    </Box>
  );
};

export default ResumePreview;
