import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ProductToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="ALL">ALL</ToggleButton>
      <ToggleButton value="APPAREL">APPAREL</ToggleButton>
      <ToggleButton value="ELECTRONICS">ELECTRONICS</ToggleButton>
      <ToggleButton value="PERSONAL CARE">PERSONAL CARE</ToggleButton>
    </ToggleButtonGroup>
  );
}