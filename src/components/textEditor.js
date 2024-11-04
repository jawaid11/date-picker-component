// src/QuillEditor.js
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import { Box} from '@mui/material';

const QuillEditor = ({ value, onChange }) => {
    const handleChange = (content) => {
      onChange(content);
    };
  
    return (
        <Box> 
      <ReactQuill
      style={{height: '110px', marginBottom: '32px'}}
        value={value}
        onChange={handleChange}
        placeholder="Start writing..."
      />
      </Box>
    );
  };
  ;

export default QuillEditor;
