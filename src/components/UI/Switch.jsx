import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const SwitchButton = ({
  checked = false,
  handleChange = () => null,
  color,
}) => (
  <FormControlLabel
    control={
      <Switch
        checked={checked}
        onChange={handleChange}
        color='black'
        inputProps={{ 'aria-label': 'primary checkbox' }}
        name='darkMode'
        labelPlacement='top'
      />
    }
    label={checked ? 'On' : 'Off'}
    // color={color}
  />
);

export default SwitchButton;
