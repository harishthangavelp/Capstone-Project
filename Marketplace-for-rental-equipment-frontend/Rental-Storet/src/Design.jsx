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
  import About from '../src/components/About'
  import Service from './components/Service'
  import Contact from './components/Contact'
  import Login from './components/Login'
  import Register from './components/Register'
  import House from './mini-components/House'
  import Car from './mini-components/Car'
  import Jewel from './mini-components/Jewel'

  import BookingForm1 from './car-payments/BookingForm1'
  import BookingForm2 from './car-payments/BookingForm2'
  import BookingForm3 from './car-payments/BookingForm3'
  import BookingForm4 from './car-payments/BookingForm4'
  import BookingForm5 from './car-payments/BookingForm5'
  
  import Rentform1 from './house-payments/Rentform1'
  import Rentform2 from './house-payments/Rentform2'
  import Rentform3 from './house-payments/Rentform3'
  import Rentform4 from './house-payments/Rentform4'
  import Rentform5 from './house-payments/Rentform5'

  import JewelForm1 from './jewel-payments/JewelForm1'
  import JewelForm2 from './jewel-payments/JewelForm2'
  import JewelForm3 from './jewel-payments/JewelForm3'
  import JewelForm4 from './jewel-payments/JewelForm4'
  import JewelForm5 from './jewel-payments/JewelForm5'
  
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap/dist/js/bootstrap.min.js';

function Design() {
  return (
    <>


<Router>
        
         <Navigation/>
         
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/service" element={<Service/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/housedetails" element={<House/>}></Route>
          <Route path="/cardetails" element={<Car/>}></Route>
          <Route path="/jeweldetails" element={<Jewel/>}></Route>

          <Route path="/bookingdetails1" element={<BookingForm1/>}></Route>
          <Route path="/bookingdetails2" element={<BookingForm2/>}></Route>
          <Route path="/bookingdetails3" element={<BookingForm3/>}></Route>
          <Route path="/bookingdetails4" element={<BookingForm4/>}></Route>
          <Route path="/bookingdetails5" element={<BookingForm5/>}></Route>

          <Route path="/bookingdetails6" element={<Rentform1/>}></Route>
          <Route path="/bookingdetails7" element={<Rentform2/>}></Route>
          <Route path="/bookingdetails8" element={<Rentform3/>}></Route>
          <Route path="/bookingdetails9" element={<Rentform4/>}></Route>
          <Route path="/bookingdetails10" element={<Rentform5/>}></Route>

          <Route path="/bookingdetails11" element={<JewelForm1/>}></Route>
          <Route path="/bookingdetails12" element={<JewelForm2/>}></Route>
          <Route path="/bookingdetails13" element={<JewelForm3/>}></Route>
          <Route path="/bookingdetails14" element={<JewelForm4/>}></Route>
          <Route path="/bookingdetails15" element={<JewelForm5/>}></Route>



         </Routes>
         
       
    </Router>


    </>
  )
}

export default Design