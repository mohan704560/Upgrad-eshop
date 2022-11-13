import React from 'react'
import FormControl from '@mui/material/FormControl';
import { Button, Container, TextField, Typography } from '@mui/material';

const ModifyProduct = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Container sx={{ mt:5, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    <Typography variant='h5' sx={{ textAlign: 'center' }}>Modify Product</Typography>
                    <br/>
                <FormControl>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        sx={{width:400}}
                    />
                    <br/>
                     <TextField
                        required
                        id="outlined-required"
                        label="Category"
                    />
                    <br/>
                     <TextField
                        required
                        id="outlined-required"
                        label="Manufacturer"
                    />
                    <br/>
                     <TextField
                        required
                        id="outlined-required"
                        label="Available Items"
                        type='number'
                    />
                    <br/>
                     <TextField
                     required
                        id="outlined-required"
                        label="Price"
                        type="Number"
                    />
                    <br/>
                     <TextField
                        required
                        id="outlined-required"
                        label="Image URL"
                    />
                    <br/>
                    <TextField
                        required
                        id="outlined-required"
                        label="Product Description"
                    />
                    <br/>
                    <Button variant="contained">Mofify Product</Button>
                </FormControl>
            </Container>
        </>
    )
}

export default ModifyProduct