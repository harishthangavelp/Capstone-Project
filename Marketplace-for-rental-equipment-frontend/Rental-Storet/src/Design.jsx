import React from 'react'
// import "@fontsource/poppins"; // Defaults to weight 400
// import "@fontsource/poppins/400.css"; // Specify weight
// import "@fontsource/poppins/400-italic.css"; 
import { useState } from 'react'
import{
  BrowserRouter as Router,Routes,Route,
  Link,
  BrowserRouter
  } from 'react-router-dom'
  import Navigation from './Navigation'
  import Home from '../src/components/Home'
  import Service from './components/Service'
  import Contact from './components/Contact'
  import Login from './components/Login'
  import Register from './components/Register'
  import MSC from './mini-components/MSC'
  import WHR from './mini-components/WHR'

  import Rentform1 from './msc-payments/Rentform1'
  import Rentform2 from './msc-payments/Rentform2'
  import Rentform3 from './msc-payments/Rentform3'
  import Rentform4 from './msc-payments/Rentform4'
  import Rentform5 from './msc-payments/Rentform5'

  import Rentform6 from './whr-payments/Rentform6'
  import Rentform7 from './whr-payments/Rentform7'
  import Rentform8 from './whr-payments/Rentform8'
  import Rentform9 from './whr-payments/Rentform9'
  import Rentform10 from './whr-payments/Rentform10'

  
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap.min.js';

function Design() {
  return (
    <>


<Router>
        
         <Navigation/>
         
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/malls-supermarkets" element={<MSC/>}></Route>
          <Route path="/warehouse-retailers" element={<WHR/>}></Route>


          <Route path="/bookingdetails1" element={<Rentform1/>}></Route>
          <Route path="/bookingdetails2" element={<Rentform2/>}></Route>
          <Route path="/bookingdetails3" element={<Rentform3/>}></Route>
          <Route path="/bookingdetails4" element={<Rentform4/>}></Route>
          <Route path="/bookingdetails5" element={<Rentform5/>}></Route>

          <Route path="/bookingdetails6" element={<Rentform6/>}></Route>
          <Route path="/bookingdetails7" element={<Rentform7/>}></Route>
          <Route path="/bookingdetails8" element={<Rentform8/>}></Route>
          <Route path="/bookingdetails9" element={<Rentform9/>}></Route>
          <Route path="/bookingdetails10" element={<Rentform10/>}></Route>



         </Routes>
         
       
    </Router>


    </>
  )
}

export default Design