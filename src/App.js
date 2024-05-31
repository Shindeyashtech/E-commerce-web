 
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
 import Shop from './Pages/Shop';
import CatogeryShop from './Pages/CatogeryShop';
import Product from './Pages/product';
import Cart from './Pages/cart';
import LogSign from './Pages/logSign';
import Footer from './Components/footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div >
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/> } /> 
      <Route path='/mens' element={ <CatogeryShop banner={men_banner} category="men" />} /> 
      <Route path='/women' element={ <CatogeryShop banner={women_banner} category="women" />} /> 
      <Route path='/kids' element={ <CatogeryShop banner={kid_banner} category="kid" />} />  
      <Route path='/product' element={ <Product />} />  
      <Route path='/:productID' element={ <Product />} />  
      <Route path='/cart' element={<Cart/> } /> 
      <Route path='/login' element={<LogSign/> } /> 

          </Routes>
<Footer></Footer>
      </BrowserRouter>
           </div>
  );
}

export default App;
