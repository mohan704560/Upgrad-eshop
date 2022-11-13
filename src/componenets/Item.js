import { Grid, TextField, Toolbar } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';

const ProducDetail = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={6} container justifyContent="flex-end">
                    <img src="https://onecomm.bm/wp-content/uploads/2021/01/Screen-Shot-2021-01-29-at-11.23.16-AM.jpg" alt="iphone 12" height={500} width={500} />
                </Grid>
                <Grid item container xs={6}>
                    <Stack>
                        <CardContent>
                            <Typography sx={{ fontSize: 30 }} >
                                iPhone 12
                            </Typography>
                            <br/>
                            <Stack direction="row">
                                <Typography variant="subtitle1">
                                    Quantity:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    1
                                </Typography>
                                </Stack>
                                <br/>
                                <Stack direction="row">
                                <Typography variant="subtitle1">
                                    Catagory:
                                </Typography>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Electronics
                                </Typography>
                            </Stack>
                            <br />
                            <Typography variant='subtitle1'>
                                Detail description about product
                            </Typography>
                            <br />
                            <Typography variant="h5" color="error">
                               Total Price : ₹ 10000
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