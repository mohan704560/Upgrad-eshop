import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Container, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function AddressDetail() {

    var address = useSelector((state) => state.addressDetail);
    const dispatch = useDispatch();
    console.log(address);

    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    const isaddress = (address) => {
        if (!address.city) {
            return <MenuItem value={address}>No Saved address</MenuItem>
        } else {
            return <MenuItem value={address}>{`${address.city} ${address.landmark} ${address.street} ${address.state} ${address.zipcode}`}</MenuItem>
        }
    }

    const formhandler = async (event) => {

        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const formData = {
            city: data.get("city"),
            landmark: data.get("landmark"),
            phone: data.get("phone"),
            state: data.get("state"),
            street: data.get("street"),
            zipcode: data.get("zipcode"),
        }

        try {
            const res = await axios.post("/addresses", formData);
            dispatch({ type: "Addaddress", payload: res.data.Response });
        }
        catch (error) {
            alert(error.response.data.Response);
        }

    }

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <FormControl>
                <InputLabel id="demo-simple-select-label" >Select Address</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={address}
                    label="Select Address"
                    // onChange={handleChange}
                    sx={{ width: 600 }}
                >
                {isaddress(address)}
                </Select>
                <br />
                <Typography sx={{ textAlign: 'center' }}>-OR-</Typography>
                <br />
                <Typography variant='h5' sx={{ textAlign: 'center' }}>Add Address</Typography>
                <br />
            </FormControl>
            <Box component="form" onSubmit={formhandler} >
                <FormControl>
                    <TextField
                        required
                        id="outlined-required"
                        label="Contact Number"
                        sx={{ width: 400 }}
                        name="phone"
                        type="number"
                    />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Street"
                        name="street"
                    />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="City"
                        name="city"
                    />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="State"
                        name="state"
                    />
                    <br />
                    <TextField
                        id="outlined-required"
                        label="Landmark"
                        name="landmark"
                    />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Zip Code"
                        name="zipcode"
                        type="number"
                    />
                    <br />
                    <Button variant="contained" type="submit">Save Address</Button>
                </FormControl>
            </Box>
        </Container>
    )
}

export default AddressDetail;