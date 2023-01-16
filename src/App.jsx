import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApiFetch from './Components/ApiFetch';
import Summary from './Components/Summary';
import Checkout from './Components/Checkout';
import Order from './Components/Main/Order';
import Empty from './Components/Main/Empty';
import ProductDetails from './Components/ProductDetails';
function App() {
  // const [cartArray , setCartArray] = useState([])
  const cartArray = []
  var demo = (item)=>{
    const ls = window.localStorage;
    // setCartArray(item)
    item.Quantity = 1;
    item.totalPrice = item.price;
    cartArray.push(item);
    ls.setItem('wish-list', JSON.stringify(cartArray));
    console.log(JSON.parse(ls.getItem('wish-list')));
    // console.log(item);
  }

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<ApiFetch demo = {demo} cartArray ={cartArray} />}/>
        <Route path='/summary' element={<Summary cartArray ={cartArray} />}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/empty' element={<Empty/>}/>
        <Route path='/ProductDetails/:id' element={<ProductDetails/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
