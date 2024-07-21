import React from 'react'
// import "@fontsource/poppins"; // Defaults to weight 400
// import "@fontsource/poppins/400.css"; // Specify weight
// import "@fontsource/poppins/400-italic.css"; 

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
         </Routes>
         
       
    </Router>


    </>
  )
}

export default Design