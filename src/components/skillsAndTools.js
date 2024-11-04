import React from 'react';
import { Grid, Box } from '@mui/material';
import Skills from './skills'; 
import Tools from './tools'; 

const SkillsAndTools = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Skills />
        </Grid>
        <Grid item xs={12} md={6}>
          <Tools />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsAndTools;
