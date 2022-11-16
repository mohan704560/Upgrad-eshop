import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box } from '@mui/material';
import { Container, flexbox } from '@mui/system';

export default function ProductToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Container fullwidth sx={{display:"flex" , justifyContent:"center", mt:2 ,mb:2}}>
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
    </Container>
  );
}