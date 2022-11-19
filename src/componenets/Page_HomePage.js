import PrimarySearchAppBar from "./NavigationBar";
import UserCard from "./UserCard";
import ToggleButton from "./ToggleButton"
import { Typography } from "@mui/material";
import React, { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from "@mui/system";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

function Page_HomePage() {

    const sortBy = useSelector((state) => state.sortBy);
    const dispatch = useDispatch()
    const state = useSelector((state) => state);
    var products = useSelector((state) => state.productArray);

    const handleChange = (event) => {

        dispatch({ type: "changeSort", payload: event.target.value });
    };

    const fetchProduct = async (state) => {

        const response = await axios.get(`/products?catagory=${state.catagory}&name=${state.searchValue}&SortBy=${state.sortBy}`);
        dispatch({ type: "ChangeProduct", payload: response.data });

        try {
            const Userstatus = await axios.get("/auth");
            if (Userstatus.data.success) {
                dispatch({ type: Userstatus.data.data.role });
                dispatch({ type: "loginStatus", payload: true });
            }
        } catch (err) {
            console.log("Please login to use website");
        }
    }

    useEffect(() => {

        fetchProduct(state);

    }, [state.catagory, state.searchValue, state.sortBy]);


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
                    value={sortBy}
                    label="Sort By"
                    onChange={handleChange}
                    sx={{ width: 300 }}
                >
                    <MenuItem value="Default">Default</MenuItem>
                    <MenuItem value="PriceDesending">Price: High to Low</MenuItem>
                    <MenuItem value="PriceAscending">Price: Low to High</MenuItem>
                    <MenuItem value="Newest">Newest</MenuItem>
                </Select>
                <br />
            </FormControl>
            <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                {
                    products.map((product, index) => {
                        return <UserCard key={index} id={product._id} inmage_url={product.inmage_url} name={product.name} price={product.price.$numberDecimal} description={product.description} />
                    })
                }
            </Stack>
        </>
    )
}

export default Page_HomePage