import React, { useState,useEffect } from "react";
import './Home.css'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";  
import Navigation from '../Navigation';
import { Link, useLocation } from 'react-router-dom';
import { Modal } from 'react-bootstrap'; 
import { Fragment,PureComponent } from "react";
import { NavLink } from "react-router-dom";

import finalimg1 from '../new-images/msc1.jpg';
import finalimg2 from '../new-images/whb5.jpg';
import finalimg3 from '../new-images/bds1.jpg';
import notify from '../images/not.jpg'
import userProf from '../images/user.webp'

function Home(props) {

  const location = useLocation();
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [username, setUsername] = useState(''); // State to hold the username

  useEffect(() => {
    // Check for username and expiration time in local storage
    const storedUsername = localStorage.getItem('username');
    const expirationTime = localStorage.getItem('expirationTime');

    if (storedUsername && expirationTime) {
        const currentTime = new Date().getTime();
        if (currentTime < expirationTime) {
            setUsername(storedUsername); // User is logged in
        } else {
            // Clear expired login
            localStorage.removeItem('username');
            localStorage.removeItem('expirationTime');
        }
    }

    if (location.state && location.state.welcomeMessage) {
        setWelcomeMessage(location.state.welcomeMessage);
        setShowWelcomeModal(true);
    }
}, [location]);


  const handleCloseWelcomeModal = () => setShowWelcomeModal(false);

  function display(){
    alert("Welcome to haVel.com"); 
    }

  
  return (
    <div className='bghome'>

{/* <audio src={finalaudio1} autoplay="autoplay" loop="loop"></audio> */}






    <div class="centPad">
    
    <div class="topnav1">
      {/* <button type="button" class="flex-box btn btn-dark"><Link to = "/register" className='topbut' >Register</Link></button> */}
      {/* <button type="button" class="flex-box btn btn-dark" ><Link to = "/login" className='topbut'>Login</Link></button> */}
      <button type="button" class="flex-box btn btn-dark"><Link to = "/contact" className='topbut'>Contact</Link></button>
      <button type="button" class="flex-box btn btn-dark"><Link to = "/service" className='topbut'>Service</Link></button>
      <button type="button" class="flex-box btn btn-dark"><Link to = "/" className='topbut'>About</Link></button>
      <button type="button" class="flex-box btn btn-dark" ><Link to = "/" className='topbut'>Home</Link></button>
    </div>
    
    <p id='entry'></p>

    <div>
    <NavLink to = "/register&login" className='topbut'><img src={userProf} className='usprof' width={'45px'} height={'45px'} /></NavLink>
    </div>

    <div className="hide"></div>
    
    <div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog"  >
        <div class="modal-content homepopbgc" style={{backgroundColor:'beige'}} >
          <div class="modal-header" style={{border:'none'}}> 
            <p class="modal-title fs-5 pophom popdirhome">www.havel.com wants to</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
       
    
          <img src={notify} className='pophome-img' width={'20px'} height={'25px'} />
    
          <p class="modal-title fs-5" className='hpop-txt' id="exampleModalLabel">Show notifications </p>
     
          <div class="modal-footer" style={{border:'none'}}>
            <button type="button" class=" btn btn-secondary bu1ho" data-bs-dismiss="modal">Allow</button>
            <button type="button" class=" btn btn-secondary bu1ho" data-bs-dismiss="modal">Block</button>
          </div>
        </div>
      </div>
    </div>
    





    <button className='hometoptop'><h3 class="homelogove" data-bs-toggle="modal" data-bs-target="#exampleModal">haVel.com</h3></button>
    </div>
    
   

    <div class="card-container">
    <div class="homecard">
   <p className="hometitle">Malls and Supermarkets</p>
    <img src={finalimg1} style={{objectFit:'cover',width:'100%'}} width="384px" height="240px" alt="" />
    <br /><br />
    <p ><Link to = "/malls-supermarkets" className='hb1'>Click to view</Link></p>
    </div>
    
    
    <div class="homecard">
    <p className="hometitle">Warehouse Retailers</p>
    <img src={finalimg2} style={{objectFit:'cover',width:'100%'}} width="384px" height="240px" alt="" />
    <br /><br />
    <p ><Link to = "/warehouse-retailers" className='hb2'>Click to view</Link></p>
    </div>
    
    <div class="homecard">
    <p className="hometitle">Department Stores</p>
    <img src={finalimg3} style={{objectFit:'cover',width:'100%'}} width="384px" height="240px" alt="" />
    <br /><br />
    <p ><Link to = "/department-stores" className='hb3'>Click to view</Link></p>
    </div>
    

    </div>
    <br /><br /><br />
    
    
    <h1 className='abt'> About Us </h1>
    
    <p className='abtdesc'> 
      <q>A place to make your life comfortable</q><br />
    
      havel.com provides you a luxurious life by making you own stores like malls & shopping centres, department stores, warehouse retailers <br />
    
      Our stores are worthy, valuable and cheap
    </p>
    
    <p className='abtdesc'> 
      <q>The key to success is to make a store and attract people and provide their needs </q><br />
    </p>
    
    <div class="footer-last">
    <p>Copyright © 2024 haVel.com. All Rights Reserved</p>
    </div>

    <div className="logscreen">
    {username && <h2>Hi {username}</h2>}
    </div>

        </div>
        
  )
}

export default Home

