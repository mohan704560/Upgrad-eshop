import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Typography } from '@mui/material';
import { Container, flexbox } from '@mui/system';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import  store from './Store/Store'

export default function ProductToggleButton() {

  var catagory = useSelector(state=>state.catagory);
  const dispatch = useDispatch();


  const handleChange = (event) => {
   dispatch({type:"setCatagory",payload:event.target.value});
  };

  // React.useEffect(()=>{
  //   console.log(catagory);
  // },[catagory]);

  return (
    <Container fullwidth sx={{display:"flex" , justifyContent:"center", mt:2 ,mb:2}}>
    <ToggleButtonGroup
      color="primary"
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="ALL">ALL</ToggleButton>
      <ToggleButton value="Apparel">APPAREL</ToggleButton>
      <ToggleButton value="Electronic">ELECTRONICS</ToggleButton>
      <ToggleButton value="Personal Care">PERSONAL CARE</ToggleButton>
    </ToggleButtonGroup>
    </Container>
  );
}