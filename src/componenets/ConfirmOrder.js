import { Grid, Typography,Container, Card } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'

const ConfirmOrder = () => {

    const address=useSelector((state)=>state.addressDetail);
    const product = useSelector((state)=>state.productDetail);
    const quantity = useSelector((state)=>state.quantity);
    console.log(address,product);

  return (
    <Container>
        <Grid container>
            <Grid item xs={8}>
            <Card sx={{p:5,height:400}}>
            <Typography variant='h3'>{product.name}</Typography>
            <br/>
            <Stack direction="row">
            <Typography variant="h6">Quantity :</Typography>
            <Typography variant="h6" sx={{fontWeight:"bold"}}>{quantity}</Typography>
            </Stack>
            <br/>
            <Stack direction="row">
            <Typography variant="h6">Category:</Typography>
            <Typography variant="h6" sx={{fontWeight:"bold"}}>{product.catagory}</Typography>
            </Stack>
            <br/>
            <Typography>
                {product.description}
            </Typography>
            <br/>
            <Typography variant="h4" color="error">
                Total Price : ₹ {quantity * product.price.$numberDecimal}
            </Typography>
            </Card>
            </Grid>
            <Grid item xs={4}>
            <Card sx={{p:2,height:445}}>
            <Typography variant='h3'>Address Detail:</Typography>
            <Typography >
                {address.landmark}
                <br/>
                Conctact Number:{address.phone}
                <br/>
                {address.street}, {address.city}
                <br/>
               {address.state}
                <br/>
                {address.zipcode}
            </Typography>
            </Card>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ConfirmOrder