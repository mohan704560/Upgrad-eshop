import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                upGrad
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Signup() {
    const handleSubmit = async(event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        if(data.get("password")!==data.get("Confirm_Password")){
               alert("The password entered are not match");
        }
        else{
            const formData={
                first_name: data.get("first_name"),
                last_name:data.get("last_name"),
                email:data.get("email"),
                password:data.get("password"),
                phone_number:data.get("phone_number")
            };
           
            const res = await axios.post("/users",formData); 

            if(res.data.success){
                window.location.href="/";
            }
            else{
                alert(res.data.Response);
            }
        }

    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="outlined"
                            label="First Name"
                            name="first_name"
                            type="text"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="outlined"
                            label="Last Name"
                            name="last_name"
                            type="text"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Confirm_Password"
                            label="Confirm Password"
                            type="password"
                            id="password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="phone_number"
                            label="Conctact Number"
                            type="number"
                            id="number"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            href=""
                        >
                            Sign up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/Sign_In" variant="body2">
                                    {"Already have an account? Sign in"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}