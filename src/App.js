 
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
 import Shop from './Pages/Shop';
import CatogeryShop from './Pages/CatogeryShop';
import Product from './Pages/product';
import Cart from './Pages/cart';
import LogSign from './Pages/logSign';
function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/> } /> 
      <Route path='/mens' element={ <CatogeryShop Category="mens" />} /> 
      <Route path='/women' element={ <CatogeryShop Category="women" />} /> 
      <Route path='/kids' element={ <CatogeryShop Category="kids" />} />  
      <Route path='/product' element={ <Product />} />  
      <Route path='/:productID' element={ <Product />} />  
      <Route path='/cart' element={<Cart/> } /> 
      <Route path='/login' element={<LogSign/> } /> 

          </Routes>

      </BrowserRouter>
           </div>
  );
}

export default App;
