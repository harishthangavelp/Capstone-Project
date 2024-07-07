import React from 'react'
import './About.css'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; 
import Navigation from '../Navigation';
import {Link} from 'react-router-dom'

import finalabimg1 from '../images/luxurious_life-1.jpg';
import finalabimg2 from '../images/luxurious_life-2.jpeg';
import finalabimg3 from '../images/luxurious_life-3.jpg';
import notifyab from '../images/not.jpg'
import finalabaudio1 from '../mini-images/havel.mp3';

function About(props) {
  function display(){
  alert("Welcome to haVel.com"); 
  }

  return (
    <div className='bgabout'>

<audio src={finalabaudio1} autoplay="autoplay" loop="loop"></audio>

<div class="centPad">
<div class="topnav1">
<button type="button" class="flex-box btn btn-dark"><Link to = "/register" className='topbut' >Register</Link></button>
      <button type="button" class="flex-box btn btn-dark" ><Link to = "/login" className='topbut'>Login</Link></button>
      <button type="button" class="flex-box btn btn-dark"><Link to = "/contact" className='topbut'>Contact</Link></button>
      <button type="button" class="flex-box btn btn-dark"><Link to = "/service" className='topbut'>Service</Link></button>
      <button type="button" class="flex-box btn btn-dark"><Link to = "/about" className='topbut'>About</Link></button>
      <button type="button" class="flex-box btn btn-dark" ><Link to = "/" className='topbut'>Home</Link></button>
</div>




<div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" >
    <div class="modal-content abpopbg" >
      <div class="modal-header" style={{border:'none'}}> 
        <p class="modal-title fs-5 popup1 popmoveab" id="exampleModalLabel">www.havel.com wants to</p>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
   

      <img src={notifyab} className='pop-img' width={'20px'} height={'25px'} />

      <p class="modal-title fs-5" className='pop-txt' id="exampleModalLabel">Show notifications </p>
 
      <div class="modal-footer" style={{border:'none'}}>
        
        <button type="button" class=" btn btn-secondary bubocol" data-bs-dismiss="modal">Allow</button>
        <button type="button" class=" btn btn-secondary bubocol" data-bs-dismiss="modal">Block</button>
      
      </div>
    </div>
  </div>
</div>


<button className='top'><h3 class="logo-move" data-bs-toggle="modal" data-bs-target="#exampleModal">haVel.com</h3></button>
</div>


<div class="card-container">
<div class="aboutcard">
<img src={finalabimg1} style={{objectFit:'cover',width:'100%'}} width="384px" height="240px" alt="" />
<div class="card-content">
<p>Own rental houses based on your comfortability</p>
<i><q class="desc">True luxury is being able to own your time – to be able to take a walk, sit on your porch, read the paper, not take the call, not be compelled by obligation</q></i>
<br /><br />
<div class="center-button">
<a href="" class="card-button"><Link to = "/housedetails" className='topbut'>Click to view</Link></a>

</div>
</div>
</div>

<div class="aboutcard">
<img src={finalabimg2} style={{objectFit:'cover',width:'100%'}} width="384px" height="240px" alt="" />
<div class="card-content">
<p>Own luxurious cars available with brand new models</p>
<i><q class="desc">Driving a luxury car that is the pinnacle of a successful lifestyle," "living the good life in my luxury car</q></i>
<br /><br /><br />
<div class="center-button">
<a href="" class="card-button"><Link to = "/cardetails" className='topbut'>Click to view</Link></a>

</div>
</div>
</div>

<div class="aboutcard">
<img src={finalabimg3} style={{objectFit:'cover',width:'100%'}} width="384px" height="240px" alt="" />
<div class="card-content">
<p>Own fashionable jewels with latest brand new collections</p>
<i><q class="desc">Don’t find you need to wear jewelry for others but for your own pleasure. It feels wonderful</q></i>
<br /><br /><br />
<div class="center-button">
<a href="" class="card-button"><Link to = "/jeweldetails" className='topbut'>Click to view</Link></a>
</div>
</div>
</div>
</div>
<br /><br /><br />


<h1 className='abt'> About Us </h1>

<p className='abtdesc'> 
  <q>A place to make your life comfortable</q><br />

  havel.com provides you a luxurious life by making you own houses, cars and jewels <br />

  Our products are worthy, valuable and cheap
</p>

<p className='abtdesc'> 
  <q>Man can live without chrome, but can't live without a house</q><br />
  <q>Man can live without bar, but can't live without a car</q><br />
  <q>Man can live without fuel, but can't live without a jewel</q>
</p>

<div class="footer-last">
<p>Copyright © 2024 haVel.com. All Rights Reserved</p>
</div>

{/* <div>
<button className='top'><h3 class="logo-move">Copyright © 2024 haVel.com. All Rights Reserved</h3></button>
</div> */}

    </div>
  )
}

export default About