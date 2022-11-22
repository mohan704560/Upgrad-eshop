import React from 'react'
import FormControl from '@mui/material/FormControl';
import { Button, Container, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PrimarySearchAppBar from "./NavigationBar";
import { Box } from '@mui/system';
import axios from 'axios';

const AddProduct = () => {

    const [catagory, setCatagory] = React.useState('');

    const handleChange = (event) => {
        setCatagory(event.target.value);
    };

    const formhandler = async (event) => {

        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const formData = {
            name: data.get("name"),
            manufacturer: data.get("manufacturer"),
            available_items: data.get("available_items"),
            price: data.get("price"),
            inmage_url: data.get("inmage_url"),
            description: data.get("description"),
            catagory: catagory,
        }
        try {
            const res = await axios.post("/products", formData);
            alert(res.data.Response);
        } catch (err) {
            alert(err.response.data.Response);
        }

    }

    return (
        <>
            <PrimarySearchAppBar />
            <Container sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Typography variant='h5' sx={{ textAlign: 'center' }}>Add Product</Typography>
                <br />
                <Box component="form" onSubmit={formhandler}>
                    <FormControl>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            name="name"
                            sx={{ width: 400 }}
                        />
                        <br />
                        {/* <InputLabel id="demo-simple-select-label" >Catagory</InputLabel> */}
                        <Select
                            value={catagory}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={"Apparel"}>Apparel</MenuItem>
                            <MenuItem value={"Electronic"}>Electronics</MenuItem>
                            <MenuItem value={"Personal Care"}>Personal Care</MenuItem>
                        </Select>
                        <br />
                        <TextField
                            required
                            id="outlined-required"
                            label="Manufacturer"
                            name="manufacturer"
                        />
                        <br />
                        <TextField
                            required
                            id="outlined-required"
                            label="Available Items"
                            type='number'
                            name='available_items'
                        />
                        <br />
                        <TextField
                            required
                            id="outlined-required"
                            label="Price"
                            type="Number"
                            name="price"
                        />
                        <br />
                        <TextField
                            required
                            id="outlined-required"
                            label="Image URL"
                            name="inmage_url"
                        />
                        <br />
                        <TextField
                            required
                            id="outlined-required"
                            label="Product Description"
                            name="description"
                        />
                        <br />
                        <Button variant="contained" type="submit">Save Product</Button>
                    </FormControl>
                </Box>
            </Container>
        </>
    )
}

export default AddProduct