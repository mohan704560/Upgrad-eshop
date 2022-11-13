import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Toolbar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';

export default function AdminCard() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

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
        <Grid container>
        <Grid item xs={6}>
        <Button variant="contained" size="small" color="primary">
          Buy
        </Button>
        </Grid>
        <Grid item container justifyContent="flex-end" xs={6}>
        <EditIcon sx={{mr:3}}/>
        <DeleteIcon onClick={handleOpen}/>
        </Grid>
        </Grid>
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirm Deletion of product!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="subtitle1">
            Are you sure you want to delete the product?
          </Typography>
          <br/>
          <Stack direction="row" justifyContent="flex-end">
            <Button variant='contained' sx={{mr:2}}>OK</Button>
            <Button variant='outlined' >Cancel</Button>
          </Stack>
        </Box>
      </Modal>
    </Card>
    
  );
}

// import * as React from 'react';

// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';




// export default function BasicModal() {


//   return (
//     <div>
//       <Button >Open modal</Button>

//     </div>
//   );
// }