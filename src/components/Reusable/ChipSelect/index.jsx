import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function index({
  name,
  value,
  onChange,
  label,
  options,
  required,
}) {
  return (
    <FormControl fullWidth margin="normal" variant="standard">
      <InputLabel>{label}</InputLabel>
      <Select
        fullWidth
        multiple={false}
        value={value}
        name={name}
        onChange={onChange}
        MenuProps={MenuProps}
        required={required}
        renderValue={(selected) => (
          <div>
            <Chip label={new String(selected).toUpperCase()} />
          </div>
        )}
      >
        {options.map((name) => (
          <MenuItem key={name} value={name}>
            {new String(name).toLocaleUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
