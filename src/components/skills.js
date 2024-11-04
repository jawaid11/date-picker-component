import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, IconButton, Grid } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { addSkills, removeSkills, updateSkills } from '../redux/skillsSlice';

const Skills = () => {
  const dispatch = useDispatch();
  const skillsDetails = useSelector((state) => state.skills);
  const [skills, setSkills] = useState([{ skill: '' }]); // Initialize with an object

  useEffect(() => {
    setSkills(skillsDetails.length > 0 ? skillsDetails : [{ skill: '' }]); // Initialize with existing skills or one empty skill
  }, [skillsDetails]);

  const handleSkillChange = (index, value) => {
    const skillsList = [...skills];
    skillsList[index] = { skill: value }; // Update the specific skill property
    setSkills(skillsList);
    dispatch(updateSkills({ index, addedSkills: { skill: value } }));
  };

  const handleAddSkill = () => {
    const newSkill = { skill: '' }; // New skill object
    setSkills((prev) => [...prev, newSkill]);
    dispatch(addSkills(newSkill));
  };

  const handleRemoveSkill = (index) => {
    const filterSkills = skills.filter((_, i) => i !== index);
    setSkills(filterSkills);
    dispatch(removeSkills(index));
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={12} key={index}>
            <Box display="flex" alignItems="center">
              <TextField
                inputProps={{ style: { fontSize: 14, fontWeight: 400, width: "340px"} }}
                label={`Skill ${index + 1}`}
                name={`skill-${index}`} // Unique name for each input
                type="text"
                value={skill.skill || ''} // Ensure it defaults to an empty string if undefined
                onChange={(event) => handleSkillChange(index, event.target.value)} // Pass the value directly
                variant="outlined"
                size="small"
                id={`skill-${index}`} // Use a unique ID for each input
              />
              { index > 0 &&
              <IconButton onClick={() => handleRemoveSkill(index)}>
                <DeleteIcon />
              </IconButton>
}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box mt={2}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddSkill}
          startIcon={<AddCircleOutlineIcon />}
        >
          Add Skill
        </Button>
      </Box>
    </Box>
  );
};

export default Skills;
