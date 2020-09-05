import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  selectComponent: {
    fontSize: 14,
    width: '100%',
    color: '#347af0',
  },
  labelName: {
    color: '#66788a',
    fontSize: 14,
    marginBottom: 8,
  },
}));

const DropDown = ({
  handleChange = () => null,
  options = [],
  selectedValue = '',
  label = '',
  id = '',
}) => {
  const classes = useStyles();

  return (
    <>
      <InputLabel id='demo-simple-select-label' className={classes.labelName}>
        {label}
      </InputLabel>
      <Select
        labelId='select-label'
        id={id}
        value={selectedValue}
        className={classes.selectComponent}
        onChange={handleChange}
      >
        {options.map(({ name, value }) => (
          <MenuItem value={value}>{name}</MenuItem>
        ))}
      </Select>
    </>
  );
};

export default DropDown;
