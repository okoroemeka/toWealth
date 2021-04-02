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
  createCategory,
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
        renderValue={(selected) => {
          let label;
          if (typeof selected === "number") {
            const opt = options.find((el) => el.id === selected);
            label = opt.name;
          } else {
            label = selected;
          }
          return (
            <div>
              <Chip label={label.toUpperCase()} />
            </div>
          );
        }}
      >
        {options.map((opt, i) => (
          <MenuItem key={i} value={opt.id}>
            {opt.name.toLocaleUpperCase()}
          </MenuItem>
        ))}
        {createCategory && (
          <MenuItem onClick={() => createCategory()}>Add Category</MenuItem>
        )}
      </Select>
    </FormControl>
  );
}
