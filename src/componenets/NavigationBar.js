import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '200%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {

  const LoginStatus = useSelector((state) => state.isLogged);
  const UserType = useSelector((state) => state.userType);
  const searchValue = useSelector((state) => state.searchValue);
  const dispatch = useDispatch();

  const searchhander = (event) => {

    dispatch({ type: "SearchChange", payload: event.target.value })

  }

  const logoutHandler = async () => {

    const response = await axios.get("/logout");
    dispatch({type:"loginStatus", payload:false});
  
  }

  const userType = (LoginStatus, UserType) => {

    if (LoginStatus) {
  
      if (UserType === "Admin") {
        return <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to="/"><Button sx={{ textDecorationLine: "underline", textTransform: 'none' , color: "white"}}>Home</Button></Link>
          <Button href="#text-buttons" color='inherit' sx={{ textDecorationLine: "underline", textTransform: 'capitalize' }}>Add Product</Button>
          <Button variant="contained" color='error' onClick={logoutHandler}>Logout</Button>
        </Box>
      }
      else {
        return <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to="/"><Button sx={{ textDecorationLine: "underline", textTransform: 'none', color: "white" }}>Home</Button></Link>
          <Button variant="contained" color='error' onClick={logoutHandler}>Logout</Button>
        </Box>
      }
  
    }
    else {
  
      return <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Link to="/"><Button sx={{ textDecorationLine: "underline", textTransform: 'none', color: "white" }}>Home</Button></Link>
        <Link to="/Sign_In"><Button sx={{ textDecorationLine: "underline", textTransform: 'capitalize', color: "white" }}>Sign In</Button></Link>
        <Link to="/Sign_up"><Button sx={{ textDecorationLine: "underline", textTransform: 'capitalize', color: "white" }}>Sign Up</Button></Link>
      </Box>
  
    }
  
  }

  return (
    <AppBar position="static" fullwidth >
      <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }} fullwidth >
        <Toolbar component='div' sx={{ ml: 0 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            upGrad E-Shop
          </Typography>
        </Toolbar>
        <Box component='div' sx={{ width: 400 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={searchhander}
            />
          </Search>
        </Box>
        {userType(LoginStatus, UserType)}
      </Toolbar>
    </AppBar>
  );
}