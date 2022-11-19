import { Grid, TextField, Toolbar } from '@mui/material'
import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const ProducDetail = () => {

    const product= useSelector((state)=>{return state.productDetail});
    const isLogged = useSelector((state)=>state.isLogged);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const submitHandler=()=>{

    if(isLogged){

        const quantity = document.getElementById("quantity").value ;
        dispatch({type:"updateQuantity",payload:quantity});
        navigate("/order");

    }else{

        alert("Please SignIn to place order");

    }
    }

    return (
        <>
            <Grid container sx={{mt:15}}>
                <Grid item xs={6} container justifyContent="flex-end">
                    <img src={product.inmage_url} alt={product.name} height={500} width={500} />
                </Grid>
                <Grid item container xs={6}>
                    <Stack>
                        <CardContent>
                            <Stack  direction="row" spacing={2}>
                            <Typography sx={{ fontSize: 30 }} >
                            {product.name}
                            </Typography>
                            <Button variant="contained" disableElevation sx={{borderRadius:50}}>
                               Available Quantity : {product.available_items}
                            </Button>
                            </Stack>
                            <Stack  direction="row">
                            <Typography variant="subtitle1">
                                Catagory:
                            </Typography>
                            <Typography variant="subtitle1" sx={{fontWeight:'bold'}}>
                                {product.catagory}
                            </Typography>
                            </Stack>
                            <br/>
                            <Typography variant='subtitle1'>
                                {product.description}
                            </Typography>
                            <br/>
                            <Typography variant="h5" color="error">
                            ₹ {product.price.$numberDecimal} 
                            </Typography>
                            <br/>
                        </CardContent>
                        <Stack>
                            <TextField variant='outlined' id="quantity" label="Enter Quantity" name="Enter Quantity" required sx={{width:300}}/>
                            <br/>
                            <Button variant="contained" type="submit" sx={{width:150}} onClick={submitHandler}>Place Order</Button>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default ProducDetail