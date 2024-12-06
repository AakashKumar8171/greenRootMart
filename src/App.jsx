import { useState } from 'react'//remove this import
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import BrowseProduct from './pages/BrowseProduct'
import AboutUs from './pages/AboutUs'
import Logout from './Logout'
import Reset from './pages/Reset'
import CartPage from './pages/CartPage'


function App() {

  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/login" element={<LoginPage/>} ></Route>
      <Route path="/register" element={<RegisterPage/>} ></Route>
      <Route path="/browseProducts" element={<BrowseProduct/>} ></Route>
      <Route path="/aboutUs" element={<AboutUs/>} ></Route>
      <Route path="/" element={<HomePage/>} ></Route>
      <Route path="/home" element={<HomePage/>} ></Route>
      <Route path="/logout" element={<Logout/>} ></Route>
      <Route path="/reset" element={<Reset/>} ></Route>
      <Route path="/cart" element={<CartPage/>} ></Route>
    </Routes>
   
    <Footer/>
      
    </>
  )
}

export default App
