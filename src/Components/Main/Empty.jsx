import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import LocalMallIcon from '@mui/icons-material/LocalMall';

const Empty = () => {
    return (
        <>
        {/* <Navbar/> */}
            <div style={{ alignItems: 'center', textAlign: 'center'}} className='m-5'>
                {/* <LocalMallIcon style={{height:'20vh', width:'20vh'}}/> */}
                <img style={{maxWidth:'90%'}} src="./src/assets/empty.webp" alt="loading" />
                <h3 className='m-3'>Your Cart is empty!</h3>
                <Link to='/'>
                    <Button variant="contained" endIcon={<ArrowRightAltIcon/>} sx={{ mt: 3 }} >Continue Shopping</Button>
                </Link>
            </div>

        </>
    )   
}

export default Empty
