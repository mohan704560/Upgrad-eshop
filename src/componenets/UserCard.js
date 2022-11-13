import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Toolbar } from '@mui/material';

export default function UserCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
            <Grid container >
            <Grid item xs={6}>
          <Typography gutterBottom variant="h5" component="div">
            Shoes
          </Typography>
          </Grid>
          <Grid item container xs={6} justifyContent="flex-end">
          <Typography gutterBottom variant="h5" component="div">
           ₹ 1000
          </Typography>
          </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            wndr-13 sports shoes for men | Latest Stylish Casual sport shoes for men |
            running shoes for boys | Lace up Lightweight grey stores for running, walking,
            gym, trekking, hiking & party
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}