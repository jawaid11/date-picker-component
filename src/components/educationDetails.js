import React, { useState, useEffect } from "react";
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
  addEducationDetail,
  updateEducationDetail,
  removeEducationDetail,
} from "../redux/educationDetailsSlice";
import QuillEditor from "./textEditor";

const EducationDetails = () => {
  const dispatch = useDispatch();
  const educationDetails = useSelector((state) => state.educationDetails); // Get from Redux store
  const [educationDetailsList, setEducationDetailsList] = useState(
    educationDetails.length ? educationDetails : [{}]
  );

  useEffect(() => {
    setEducationDetailsList(educationDetails.length > 0 ? educationDetails : [{ educationDetails: '' }]);
  }, [educationDetails]);

  const handleAddEducation = () => {
    const newEducation = {}; // Create an empty object for new education entry
    setEducationDetailsList([...educationDetailsList, newEducation]);
    dispatch(addEducationDetail(newEducation)); // Dispatch to add a new entry to Redux
  };

  const handleRemoveEducation = (index) => {
    const updatedList = educationDetailsList.filter((_, i) => i !== index);
    setEducationDetailsList(updatedList);
    dispatch(removeEducationDetail(index)); // Dispatch to remove entry from Redux
  };

  const handleCheckboxChange = (index, checked) => {
    const currentDate = checked ? "Currently Pursuing" : "";
    handleChange(index, "endDate", currentDate);
  };

  const handleChange = (index, field, value) => {
    const updatedList = [...educationDetailsList];
    updatedList[index] = { ...updatedList[index], [field]: value };
    setEducationDetailsList(updatedList);
    dispatch(
      updateEducationDetail({
        index,
        updatedDetails: { [field]: value },
      })
    ); // Dispatch to update a specific entry in Redux
  };

  return (
    <>
      {educationDetailsList.map((detail, index) => (
        <Box key={index} sx={{ position: "relative", mb: 3 }}>
          {index > 0 && (
            <IconButton
              onClick={() => handleRemoveEducation(index)}
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              <RiDeleteBin6Line />
            </IconButton>
          )}
          <Grid container md={12} xs={12} spacing={2}>
            <Grid container item md={6} xs={12}>
              <InputLabel id="school">School / College</InputLabel>
              <TextField
                inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                fullWidth
                name="school"
                value={detail.school || ""}
                onChange={(e) => handleChange(index, "school", e.target.value)}
                type="text"
                variant="outlined"
                size="small"
                id="school"
                placeholder="Enter school or college name"
              />
            </Grid>
            <Grid container item md={6} xs={12}>
              <InputLabel id="courseName">Course Name</InputLabel>
              <TextField
                inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                fullWidth
                name="courseName"
                value={detail.courseName || ""}
                onChange={(e) => handleChange(index, "courseName", e.target.value)}
                type="text"
                variant="outlined"
                size="small"
                id="courseName"
                placeholder="Enter course name"
              />
            </Grid>
            <Grid container item md={6} xs={12}>
              <InputLabel id="startDate">Start Date</InputLabel>
              <TextField
                inputProps={{ style: { fontSize: 14, fontWeight: 400 } }}
                fullWidth
                name="startDate"
                value={detail.startDate || ""}
                onChange={(e) => handleChange(index, "startDate", e.target.value)}
                type="date"
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
                          sx={{ padding: 0, marginLeft: '24px' }}
                          onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                        />
                      }
                      label="Currently Pursuing"
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
                disabled={detail.endDate === "Currently Pursuing"}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
                variant="outlined"
                size="small"
                id="endDate"
              />
            </Grid>
            <Grid container item md={12} xs={12}>
              <InputLabel id="description">Description</InputLabel>
              <QuillEditor
                value={detail.description || ""}
                onChange={(content) => handleChange(0, "description", content)}
                placeholder="Start writing your description..."
                style={{ marginBottom: "20px" }}
              />
            </Grid>
          </Grid>
          {index < educationDetailsList.length - 1 && <Divider sx={{ my: 3 }} />}
        </Box>
      ))}
      <Box mt={2}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddEducation}
          startIcon={<AddCircleOutlineIcon />}
        >
          Add more
        </Button>
      </Box>
    </>
  );
};

export default EducationDetails;
