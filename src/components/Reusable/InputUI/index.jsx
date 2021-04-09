import { TextField } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

export default function index({
  label,
  name,
  required,
  value,
  onChange,
  type,
}) {
  return (
    <>
      <TextField
        label={label}
        variant="standard"
        required={required}
        value={value}
        onChange={onChange}
        name={name}
        fullWidth
        type={type || "text"}
        margin="normal"
      />
    </>
  );
}

index.propTypes = {
  required: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};
