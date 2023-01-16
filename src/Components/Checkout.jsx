import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



const Checkout = () =>{
    return(
        <>
       {/* <Navbar/> */}
      <div className="container">
        <div style={{background: 'lightblue'}} className="border p-4 m-4 shadow">
        <h1 className="m-3 text-center">Proceed to checkout</h1>
            <h4 className="mb-3">Billing address</h4>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName" required/>
                        <div className="invalid-feedback"> Valid first name is required. </div>
                    </div>

                   <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastName"required/>
                        <div className="invalid-feedback"> Valid last name is required. </div>
                    </div>
                </div>
                
                 <div className="mb-3">
                    <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                    <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                    <div className="invalid-feedback"> Please enter your shipping address. </div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                </div>
                
                <hr className="mb-4"/>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="same-address"/>
                    <label className="custom-control-label m-1" htmlFor="same-address">Shipping address is the same as my billing address</label>
                </div>
               
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="save-info"/>
                    <label className="custom-control-label m-1" htmlFor="save-info">Save this information for next time</label>
                </div>
                <hr className="mb-4"/>
                <h4 className="mb-3">Payment</h4>
                <div className="d-block my-3">
                    <div className="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
                        <label className="custom-control-label m-1" htmlFor="credit"> Credit card</label>
                    </div>
                   
                    <div className="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
                        <label className="custom-control-label m-1" htmlFor="debit"> Debit card</label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required=""/>
                        <label className="custom-control-label m-1" htmlFor="paypal"> PayPal</label>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cc-name">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="invalid-feedback"> Name on card is required </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cc-number">Card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
                        <div className="invalid-feedback"> Credit card number is required </div>
                    </div>
                </div>
                  
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label htmlFor="cc-expiration">Expiry Date</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
                        <div className="invalid-feedback"> Expiration date required </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="cc-cvv">CVV</label>
                        <input type="password" className="form-control" id="cc-cvv" placeholder="" required=""/>
                        <div className="invalid-feedback"> Security code required </div>
                    </div>
                </div>
                <hr className="mb-4"/>
                <Link to='/order'>
                <Button variant="contained" sx={{ width: '100%'}} endIcon={<ArrowRightAltIcon />}>Proceed to payment</Button>
                </Link>
        </div>
       
    </div> 
        </> 
    )
}
export default Checkout;