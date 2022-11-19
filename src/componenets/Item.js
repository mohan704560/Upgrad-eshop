import { Grid, TextField, Toolbar } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import { useSelector } from 'react-redux';

const ProducDetail = () => {

    const product = useSelector((state)=>state.productDetail);
    const quantity = useSelector((state)=>state.quantity);

    return (
        <>
            <Grid container>
                <Grid item xs={6} container justifyContent="flex-end">
                    <img src={product.inmage_url} alt={product.name} height={500} width={500} />
                </Grid>
                <Grid item container xs={6}>
                    <Stack>
                        <CardContent>
                            <Typography sx={{ fontSize: 30 }} >
                            {product.name}
                            </Typography>
                            <br/>
                            <Stack direction="row">
                                <Typography variant="subtitle1">
                                    Quantity:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    {quantity}
                                </Typography>
                                </Stack>
                                <br/>
                                <Stack direction="row">
                                <Typography variant="subtitle1">
                                    Catagory:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    {product.catagory}
                                </Typography>
                            </Stack>
                            <br />
                            <Typography variant='subtitle1'>
                                {product.description}
                            </Typography>
                            <br />
                            <Typography variant="h5" color="error">
                               Total Price : ₹ {quantity*product.price.$numberDecimal}
                            </Typography>
                            <br />
                        </CardContent>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default ProducDetail