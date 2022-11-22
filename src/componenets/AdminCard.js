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
import axios from 'axios';
import { useNavigate } from 'react-router';
import ModifyProduct from './ModifyProduct';
import { useDispatch } from 'react-redux';

export default function AdminCard({ id, inmage_url, name, price, description }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Navigate=useNavigate();
  const dispatch=useDispatch();

  const deleteHandler = async () => {

    try {
      const res = await axios.delete(`/products/${id}`);
      handleClose();
    } 
    catch (err) {
       console.log(err.response.data.Response);
    }

  }

  const editHandler=()=>{

    Navigate("/update");
    dispatch({type:"AddEditProductId",payload:id});

  }

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
    <Card sx={{ width: 345, ml: 2, mr: 2, mb: 3, display: "flex", flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={inmage_url}
          alt={name}
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
        <Grid container>
          <Grid item container justifyContent="flex-end" xs={12}>
            <EditIcon sx={{ mr: 3 }} onClick={editHandler}/>
            <DeleteIcon onClick={handleOpen} />
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
          <br />
          <Stack direction="row" justifyContent="flex-end">
            <Button variant='contained' sx={{ mr: 2 }} onClick={deleteHandler}>OK</Button>
            <Button variant='outlined' onClick={handleClose}>Cancel</Button>
          </Stack>
        </Box>
      </Modal>
    </Card>

  );
}