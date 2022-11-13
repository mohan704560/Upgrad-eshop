import React from 'react'
import FormControl from '@mui/material/FormControl';
import { Button, Container, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AddProduct = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Container sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Typography variant='h5' sx={{ textAlign: 'center' }}>Add Product</Typography>
                <br />
                <FormControl>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        sx={{ width: 400 }}
                    />
                    <br />
                    {/* <InputLabel id="demo-simple-select-label" >Catagory</InputLabel> */}
                    <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value={10}>Apparel</MenuItem>
                        <MenuItem value={20}>Electronics</MenuItem>
                        <MenuItem value={30}>Personal Care</MenuItem>
                    </Select>
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Manufacturer"
                    />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Available Items"
                        type='number'
                    />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Price"
                        type="Number"
                    />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Image URL"
                    />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Product Description"
                    />
                    <br />
                    <Button variant="contained">Save Product</Button>
                </FormControl>
            </Container>
        </>
    )
}

export default AddProduct