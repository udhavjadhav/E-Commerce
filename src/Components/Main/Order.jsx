import React from 'react';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Order = () => {
  return (
    <div className='container-fluid text-center'>
      {/* <CheckCircleIcon style={{height:'10vh', width:'10vh'}}/> */}
      <img style={{height:'70vh',maxWidth:'90%'}} src="./src/assets/order.jpg" alt="loading" />
      <h1 style={{color: 'green', fontWeight: 'bolder'}} >Order Successful !!</h1>
      <h5>Thanks for Shopping :) </h5>
     <Link to='/'>
      <Button variant='contained' startIcon={<ArrowBackIcon/>} sx={{mt:3}}>Back to Home</Button>
     </Link>
    </div>
  )
}

export default Order
