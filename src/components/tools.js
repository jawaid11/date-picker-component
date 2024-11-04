import React, { useEffect, useState } from "react";
import { Box, TextField, Button, IconButton, Grid } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from 'react-redux';
import { addTools, removeTools, updateTools } from '../redux/toolsSlice';

const Tools = () => {
    const dispatch = useDispatch();
    const toolsDetails = useSelector((state) => state.tools);
  const [tools, setTools] = useState([{ tool: "" }]);

    useEffect(() => {
      setTools(toolsDetails.length > 0 ? toolsDetails : [{ tool: '' }]);
    }, [toolsDetails]);

  const handleToolChange = (index, value) => {
    const toolsList = [...tools];
    toolsList[index] = { tool: value };
    setTools(toolsList);
    dispatch(updateTools({ index, addedTools: { tool: value } }));
  };

  const handleAddTool = () => {
    const newTool = { tool: '' };
    setTools((prev) => [...prev, newTool]);
    dispatch(addTools(newTool));
  };

  const handleRemoveTool = (index) => {
    const filterTools = tools.filter((_, i) => i !== index);
    setTools(filterTools);
    dispatch(removeTools(index));
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {tools.map((tool, index) => (
          <Grid item xs={12} sm={12} key={index}>
            <Box display="flex" alignItems="center">
              <TextField
                inputProps={{ style: { fontSize: 14, fontWeight: 400, width: "340px"} }}
                label={`Tool ${index + 1}`}
                value={tool.tool || ""}
                onChange={(event) =>
                  handleToolChange(index, event.target.value)
                }
                variant="outlined"
                size="small"
              />
              {index > 0 && (
                <IconButton onClick={() => handleRemoveTool(index)}>
                  <DeleteIcon />
                </IconButton>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box mt={2}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddTool}
          startIcon={<AddCircleOutlineIcon />}
        >
          Add Tool
        </Button>
      </Box>
    </Box>
  );
};

export default Tools;
