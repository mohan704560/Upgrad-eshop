import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Item from './Item'
import { Stack } from '@mui/system';
import AddressDetail from './AddressDetail';
import ConfirmOrder from './ConfirmOrder';
import PrimarySearchAppBar from "./NavigationBar";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';

const steps = ['Items', 'Select Address', 'Confirm Order'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const address = useSelector((state) => state.addressDetail);
  const productDetail=useSelector((state)=>state.productDetail);
  const quantity = useSelector((state)=>state.quantity);
  const navigate = useNavigate();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = async() => {
    let newSkipped = skipped;

    if(activeStep===steps.length-1){

      const orderDetail = {
        shipping_address_id:address._id,
        product_product_id:productDetail._id,
        quatity:quantity
      }
     
      try{
        const res = await axios.post("/orders",orderDetail) ;
        alert(res.data.Response);

      }
      catch(err){

        alert(err.response.data.Response);
      }
      navigate("/");
    }
    if (activeStep === 1 && !address.city) {
      alert("Please select address!");
    } else {

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);

    }

  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const OrderBody = () => {
    switch (activeStep) {
      case 0: return <Item />;
      case 1: return <AddressDetail />;
      case 2: return <ConfirmOrder />;
    }
  }

  return (
    <>
      <PrimarySearchAppBar />
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} sx={{ mt: 8, mb: 5, mr: 10, ml: 10 }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
          <React.Fragment>
            {OrderBody()}
            <Stack direction='row' sapcing={1} justifyContent='center' sx={{ mt: 5 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button onClick={handleNext} variant="contained">
                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
              </Button>
            </Stack>
          </React.Fragment>
      </Box>
    </>
  );
}