import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'
import Button from '@mui/material/Button';
import { ShoppingCart } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


function ProductDetails({ }) {
    const [prod, setProd] = useState({});
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(2); //Rating

    // const [data, setData] = useState(0);

    //Get Parameter from URL - useParam();
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProd(json))
        console.log(prod);
    }, [])

    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 1200)
    }, [])

    const Navigate = useNavigate();
    const Back = () => {
        Navigate('/')
    }
    return (
        <>
            {
                loading ? <div style={{
                    display: 'inline-block',
                    marginLeft: '50vh',
                    marginTop: '7vh',
                    transition: 'transform .2s',
                    position: 'relative',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    height: '70vh',
                    width: '80vh',
                    maxWidth: '90%',
                    zIndex: '0',


                }}>
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                        <p>
                            <Skeleton height={'80vh'} duration={2} />
                        </p>
                    </SkeletonTheme> </div>
                    :
                    <div className="container-fluid mt-5 p-5 card mb-3" style={{ maxWidth: '1000px', height: 'auto', width: '90vh' }}>
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <img style={{ width: '50vh', height: '50vh' }} src={prod.image} className="img-fluid rounded-start mt-3" alt="loading" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h3 className="card-title font-weight-bold">{prod.title}</h3>
                                    <p className="card-text">{prod.description}</p>
                                    <h4 className='font-weight-bolder'>${prod.price}</h4>

                                    <Box
                                        sx={{
                                            '& > legend': { mt: 2 },
                                        }}
                                    >
                                        <Typography component="legend">Customer Review</Typography>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </Box>

                                    <Button sx={{ m: 4 }} variant="contained" startIcon={<ShoppingCart />} >Buy Now</Button>
                                    <Button onClick={Back} variant="contained" startIcon={<ArrowBackIcon />} >Back</Button>

                                </div>
                            </div>
                        </div>
                    </div>
            }



        </>
    )
}

export default ProductDetails
