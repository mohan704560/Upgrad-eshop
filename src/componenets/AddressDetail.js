import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Container, TextField, Typography } from '@mui/material';

const AddressDetail = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <FormControl>
                    <InputLabel id="demo-simple-select-label" >Select Address</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Select Address"
                        onChange={handleChange}
                        sx={{ width: 600 }}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <br />
                    <Typography sx={{ textAlign: 'center' }}>-OR-</Typography>
                    <br />
                    <Typography variant='h5' sx={{ textAlign: 'center' }}>Add Address</Typography>
                    <br/>
                </FormControl>
                <FormControl>
                    <TextField
                        required
                        id="outlined-required"
                        label="Contact Number"
                        sx={{width:400}}
                    />
                    <br/>
                     <TextField
                        required
                        id="outlined-required"
                        label="Street"
                    />
                    <br/>
                     <TextField
                        required
                        id="outlined-required"
                        label="City"
                    />
                    <br/>
                     <TextField
                        required
                        id="outlined-required"
                        label="State"
                    />
                    <br/>
                     <TextField
                        id="outlined-required"
                        label="Landmark"
                    />
                    <br/>
                     <TextField
                        required
                        id="outlined-required"
                        label="Zip Code"
                    />
                    <br/>
                    <Button variant="contained">Save Address</Button>
                </FormControl>
            </Container>
        </>
    )
}

export default AddressDetail