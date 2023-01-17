import React, { useState, useEffect } from 'react'
import './HomePage.css';
import { ShoppingCart } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton'


const HomePage = ({ prod, demo }) => {
    const [value, setValue] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 1500)
    }, [])

    const handelClick = () => {
        setValue(value + 1)
        demo(prod, value)
    }
    const Navigate = useNavigate();
    const viewDetails = () => {
        Navigate(`/ProductDetails/${prod.id}`)
    }
    return (
        <>
            {
                loading
                    ?
                    <div className='card'>
                        
                        <SkeletonTheme baseColor="#202020" highlightColor="#444">
                            <p>
                                <Skeleton height={'54vh'} duration={2} />
                            </p>
                        </SkeletonTheme> </div>
                    :

                    <div className='d-flex align-items-center'>
                        <div className="card text-center">
                            <img style={{ height: '25vh', width: '25vh', margin: '3vh', marginLeft: '10vh' }} className="card-img-top" src={prod.image} alt="Card image cap" />
                            <div className="card-body">
                                <p className='text-center '>{prod.title}</p>
                                <h6 className="card-title text-center font-weight-bold">${prod.price} </h6>
                                <div className='text-center'>
                                    <Button variant="contained" startIcon={<ShoppingCart />} disabled={value == 1 ? false : true} onClick={handelClick}  >Add to Cart</Button>
                                    <Button variant="contained" sx={{ m: 2 }} color='error' onClick={viewDetails} >View Details</Button>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default HomePage;
