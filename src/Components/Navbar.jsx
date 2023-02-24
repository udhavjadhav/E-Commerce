import React, {useState} from 'react';
import { ShoppingCart } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';

const Navbar=({stateLift, cartArray}) => {
    const [text, setText] = useState("");
    const Navigate = useNavigate()
    const handleClick = ()=>{
        if(cartArray.length < 1){
            Navigate('/empty')
        }
        else{
            Navigate("/summary")
        }
    }

stateLift(text)
    return (
        <div className="container-fluid p-2 shadow">
        <nav style={{ background: '#05386B' }} className="navbar navbar-expand-lg navbar-light p-2">
            <a style={{ fontSize: '3vh', color: 'white' }} className="navbar-brand fw-bold p-2 mx-2 font-weight-bolder" href="/"><span style={{ color: 'orange' }}>Shop</span>ify</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a style={{color:'white', fontWeight: 'bolder'}} className="nav-link" href="/">Home </a>
                    </li>
                    <li className="nav-item">
                        <a style={{color:'white', fontWeight: 'bolder'}} className="nav-link" href="/about">About</a>
                    </li>
                </ul>
                <form  className="form-inline d-flex mx-auto">
                    <input id='search' className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
                    onChange={(e)=>{
                        setText(e.target.value)
                    }} />
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit"  >Search</button>
                </form>
                <div className="m-2">
                    <Badge color="primary" badgeContent={cartArray.length}>
                    <ShoppingCart style={{cursor: 'pointer', color: 'orange'}} fontSize='large' onClick = {handleClick} />
                    </Badge>
                </div>
            </div>
        </nav>
    </div>
    )
}
export default Navbar;


