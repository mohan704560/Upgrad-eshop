import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Toolbar } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

export default function UserCard({id,inmage_url,name,price,description}) {

  const navigate=useNavigate();
  const dispatch = useDispatch();

  const buyhandler=async()=>{

     const res= await axios.get(`/products/${id}`);
     navigate('/productDetail');
     dispatch({type:"Updateproduct",payload:res.data.Response});

  }

  return (
    <Card sx={{ width: 345, ml:2 ,mr:2,mb:3 , display:"flex", flexDirection:'column', justifyContent:'space-between' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={inmage_url}
          alt="green iguana"
        />
        <CardContent>
            <Grid container >
            <Grid item xs={6}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          </Grid>
          <Grid item container xs={6} justifyContent="flex-end">
          <Typography gutterBottom variant="h5" component="div">
           {`₹ ${price}`}
          </Typography>
          </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary" onClick={buyhandler} sx={{}}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}