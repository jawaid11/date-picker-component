import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  TextField,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperience,
  removeExperience,
  updateExperience,
} from "../redux/exprienceSlice";
import QuillEditor from "./textEditor";

const Experience = () => {
  const dispatch = useDispatch();
  const experienceDetails = useSelector((state) => state.experienceDetails);
  const [experienceList, setExperienceList] = useState([{}]);

  useEffect(() => {
    setExperienceList(
      experienceDetails.length > 0
        ? experienceDetails
        : [{ experienceDetails: "" }]
    );
  }, [experienceDetails]);

  const handleAddExperience = () => {
    const newExperience = {};
    setExperienceList((prevList) => [...prevList, newExperience]);
    dispatch(addExperience(newExperience));
  };

  const handleRemoveExperience = (index) => {
    const updatedList = experienceList.filter((_, i) => i !== index);
    setExperienceList(updatedList);
    dispatch(removeExperience(index));
  };

  const handleChange = (index, field, value) => {
    const updatedList = [...experienceList];
    updatedList[index] = { ...updatedList[index], [field]: value };
    setExperienceList(updatedList);
    dispatch(
      updateExperience({
        index,
        updatedDetails: { [field]: value },
      })
    );
  };

  const handleCheckboxChange = (index, checked) => {
    const currentDate = checked ? "Currently working here" : ""; // Get current date in YYYY-MM-DD format
    handleChange(index, "endDate", currentDate);
  };

  return (
    <>
      {experienceList.map((detail, index) => (
        <Box key={index} sx={{ position: "relative", mb: 3 }}>
          {index > 0 && (
            <IconButton
              onClick={() => handleRemoveExperience(index)}
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              <RiDeleteBin6Line />
            </IconButton>
          )}

          <Grid container spacing={2} md = {12} sx ={12}>
            <Grid container item md={6} xs={12}>
              <InputLabel id="jobTitle">Job Title / Designation</InputLabel>
              <TextField
                inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                fullWidth
                name="jobTitle"
                type="text"
                value={detail.jobTitle || ""}
                onChange={(e) =>
                  handleChange(index, "jobTitle", e.target.value)
                }
                variant="outlined"
                size="small"
                id="jobTitle"
                placeholder="Enter job title"
              />
            </Grid>
            <Grid container item md={6} xs={12}>
              <InputLabel id="companyName">Company Name</InputLabel>
              <TextField
                inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                fullWidth
                name="companyName"
                type="text"
                value={detail.companyName || ""}
                onChange={(e) =>
                  handleChange(index, "companyName", e.target.value)
                }
                variant="outlined"
                size="small"
                id="companyName"
                placeholder="Enter your company name"
              />
            </Grid>
            <Grid container item md={6} xs={12}>
              <InputLabel id="startDate">Start Date</InputLabel>
              <TextField
                inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                fullWidth
                name="startDate"
                type="date"
                value={detail.startDate || ""}
                onChange={(e) =>
                  handleChange(index, "startDate", e.target.value)
                }
                variant="outlined"
                size="small"
                id="startDate"
              />
            </Grid>
            <Grid container item md={6} xs={12}>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box>
                  <InputLabel id="endDate">End Date</InputLabel>
                </Box>
                <Box>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ padding: 0, marginLeft: "24px" }}
                          onChange={(e) =>
                            handleCheckboxChange(index, e.target.checked)
                          }
                        />
                      }
                      label="Currently working here"
                    />
                  </FormGroup>
                </Box>
              </Box>
              <TextField
                inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                fullWidth
                name="endDate"
                type="date"
                value={detail.endDate || ""}
                disabled={detail.endDate === "Currently working here"}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
                variant="outlined"
                size="small"
                id="endDate"
              />
            </Grid>
            <Grid container item md={12} xs={12} style={{display : 'flex', flexDirection :'column'}}>
              <InputLabel id="description">Description</InputLabel>
              <QuillEditor
                value={detail.description || ""}
                onChange={(content) =>
                  handleChange(index, "description", content)
                }
              />
            </Grid>
          </Grid>
          {index < experienceList.length - 1 && <Divider sx={{ my: 3 }} />}
        </Box>
      ))}
      <Button
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleAddExperience}
      >
        Add more
      </Button>
    </>
  );
};

export default Experience;
