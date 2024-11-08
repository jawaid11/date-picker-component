// src/components/QuillEditor.js
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import { FormControl } from "@mui/material";

const QuillEditor = ({
  value,
  onChange,
  placeholder = "Start writing...",
  style = {},
  ...props
}) => {
  const handleChange = (content) => {
    onChange(content);
  };

  return (
    <FormControl fullWidth style={{ ...style }}>
      <ReactQuill
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{ height: "150px", marginBottom: "32px" }}
        {...props} // Allow for additional props such as custom modules
      />
    </FormControl>
  );
};

export default QuillEditor;
