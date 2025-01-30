import './App.css'
import Navbar from './Navigation/Navbar'
import Searchbar from './Searchbar/Searchbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Electronica from './Pages/Electronica/Electronica'
import Hogar from './Pages/Hogar/Hogar'
import Ropa from './Pages/Ropa/Ropa'
import Deportes from './Pages/Deportes/Deportes'
import Login from './LogIn/Login'
import ProductDetail from './Products/ProductDetail/ProductDetail'
import ShoppingCard from './ShoppingCart/ShoppingCart'
import Footer from './Footer/Footer'

function App() {

  return (
    <>
      <Searchbar/>
      
      
    
<Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/electronica' element={<Electronica/>}/>
        <Route path='/hogar' element={<Hogar/>}/>
        <Route path='/ropa' element={<Ropa/>}/>
        <Route path='/deportes' element={<Deportes/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/ShoppingCard' element={<ShoppingCard/>}/>
        <Route path='/home/productdetail' element={<ProductDetail/>}/>
    </Routes> 
    

    <Footer/>
    </>


  )
}

export default App
