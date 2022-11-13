import { Grid, Typography,Container, Card } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const ConfirmOrder = () => {
  return (
    <Container>
        <Grid container>
            <Grid item xs={8}>
            <Card sx={{p:5,height:400}}>
            <Typography variant='h3'>Shoes</Typography>
            <br/>
            <Stack direction="row">
            <Typography variant="h6">Quantity :</Typography>
            <Typography variant="h6" sx={{fontWeight:"bold"}}>1</Typography>
            </Stack>
            <br/>
            <Stack direction="row">
            <Typography variant="h6">Category:</Typography>
            <Typography variant="h6" sx={{fontWeight:"bold"}}>Footwear</Typography>
            </Stack>
            <br/>
            <Typography>
                Detail Description of the product
            </Typography>
            <br/>
            <Typography variant="h4" color="error">
                Total Price : ₹ 1000
            </Typography>
            </Card>
            </Grid>
            <Grid item xs={4}>
            <Card sx={{p:2,height:445}}>
            <Typography variant='h3'>Address Detail:</Typography>
            <Typography >
                Lucknow Home
                <br/>
                Conctact Number:79037103446
                <br/>
                Police Line,Lucknow
                <br/>
                Uttar Pradesh
                <br/>
                723990
            </Typography>
            </Card>
            </Grid>
        </Grid>
    </Container>
  )
}

export default ConfirmOrder