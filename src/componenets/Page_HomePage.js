import PrimarySearchAppBar from "./NavigationBar";
import UserCard from "./UserCard";
import ToggleButton from "./ToggleButton"
import { Typography } from "@mui/material";
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from "@mui/system";

const ProductArray = [1, 2, 3, 4, 5, 6, 7, 8]

function Page_HomePage() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <PrimarySearchAppBar />
            <ToggleButton />
            <Typography variant="subtitle1">Sort By</Typography>
            <FormControl >
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Sort By"
                    onChange={handleChange}
                    sx={{width:300}}
                >
                    <MenuItem value={10}>Default</MenuItem>
                    <MenuItem value={20}>Price: High to Low</MenuItem>
                    <MenuItem value={30}>Price: Low to High</MenuItem>
                    <MenuItem value={10}>Newest</MenuItem>
                </Select>
                <br/>
            </FormControl>
            <Stack direction="row" sx={{flexWrap:"wrap"}}>
            {
                ProductArray.map((product) => {
                    return <UserCard />
                })
            }
            </Stack>
        </>
    )
}

export default Page_HomePage