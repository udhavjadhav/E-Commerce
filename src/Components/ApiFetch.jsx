import React, { useState, useEffect } from 'react';
import HomePage from './Homepage/HomePage';
import Navbar from './Navbar';
import Carousel from './Main/Carousel';

function ApiFetch({ demo, cartArray }) {
    const [text2, setText2] = useState("");
    let [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    const API = 'https://fakestoreapi.com/products';
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(prod => setData(prod))
    }, [])

    const demo2 = (item, value, text) => {
        demo(item)
        setTotal(value + 1)

    }

    const stateLift = (text) => {
        setText2(text)
    }
    
    
    return (
        <>
            <div>
                <Navbar cartArray={cartArray} stateLift={stateLift} demo={demo2} count={total} />
            </div>
            <div>
                <Carousel />
            </div>
           
            <div className="conatiner d-flex flex-wrap m-3">
                {
                    data.filter((prod) => {
                        if (text2 == "") {
                            return prod
                        } else if (prod.title.toLowerCase().includes(text2.toLowerCase())) {
                            return prod
                        }
                    }).map((prod, index) => {
                        return (
                            <HomePage key={index} prod={prod} demo={demo2} cartArray={cartArray} />
                        )
                    })
                }
            </div>
            {/* <div style={{height:'10vh', width:'auto', background:"#05386B"}} className='container-fluid mt-5'>
            <h5 style={{color:'white', textAlign:'center'}}>©Copyright 2022 Senwell. All Rights Reserved</h5>
            </div> */}
        </>

    );
}

export default ApiFetch;

