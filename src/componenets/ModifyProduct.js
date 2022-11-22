import React from 'react'
import FormControl from '@mui/material/FormControl';
import { Button, Container, TextField, Typography } from '@mui/material';
import PrimarySearchAppBar from "./NavigationBar";
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router';

const ModifyProduct = () => {
    const id=useSelector((state)=>state.editProductID);
    const initialDetail={
        name:"",
        catagory:"",
        manufacturer:"",
        available_items:"",
        price:{$numberDecimal:""},
        inmage_url:"",
        description:"",
    }
    const [product,setProduct]=React.useState(initialDetail);
    const navigate=useNavigate();

    const getProduct=async ()=>{
        const res=await axios.get(`/products/${id}`);
        setProduct(res.data.Response);
    }

    const newProduct=()=>{

        const newProductDetail={
            name:document.getElementById("name").value,
            catagory:document.getElementById("Category").value,
            manufacturer:document.getElementById("Manufacturer").value,
            available_items:document.getElementById("Available_Items").value,
            price:{$numberDecimal:document.getElementById("Price").value},
            inmage_url:document.getElementById("Image_URL").value,
            description:document.getElementById("Product_Description").value,
        }
        setProduct(newProductDetail);
    }

    const formHandler=async(event)=>{

        event.preventDefault();
        const res= await axios.put(`/products/${id}`,product);
        alert("Product modified successfully");
        navigate("/");

    }

    useEffect(() => {
    
        getProduct(id);

    },[]);

    return (
        <>
        <PrimarySearchAppBar/>
            <Container sx={{ mt:5, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    <Typography variant='h5' sx={{ textAlign: 'center' }}>Modify Product</Typography>
                    <br/>
                <Box component="form" onSubmit={formHandler}>
                <FormControl>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        sx={{width:400}}
                        value={product.name}
                        onChange={newProduct}
                    />
                    <br/>
                     <TextField
                        required
                        id="Category"
                        name="Category"
                        label="Category"
                        value={product.catagory}
                        onChange={newProduct}
                    />
                    <br/>
                     <TextField
                        required
                        id="Manufacturer"
                        name="Manufacturer"
                        label="Manufacturer"
                        value={product.manufacturer}
                        onChange={newProduct}
                    />
                    <br/>
                     <TextField
                        required
                        id="Available_Items"
                        name="Available_Items"
                        label="Available_Items"
                        type='number'
                        value={product.available_items}
                        onChange={newProduct}
                    />
                    <br/>
                     <TextField 
                     required
                        id="Price"
                        label="Price"
                        name="Price"
                        value={product.price.$numberDecimal}
                        onChange={newProduct}
                    />
                    <br/>
                     <TextField
                        required
                        id="Image_URL"
                        name="Image_URL"
                        label="Image URL"
                        value={product.inmage_url}
                        onChange={newProduct}
                    />
                    <br/>
                    <TextField
                        required
                        id="Product_Description"
                        name="Product_Description"
                        label="Product Description"
                        value={product.description}
                        onChange={newProduct}
                    />
                    <br/>
                    <Button variant="contained" type="submit">Mofify Product</Button>
                </FormControl>
                </Box>
            </Container>
        </>
    )
}

export default ModifyProduct