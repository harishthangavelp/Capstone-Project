import React from 'react'
import '../mini-components/House.css'
import hsgif from '../mini-images/cloud.gif'
import axios from 'axios';
import Navigation from '../Navigation';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import '../mini-components/House.css'

import hsimg1 from '../mini-images/lh-1.jpg';
import hsimg2 from '../mini-images/lh-2.jpg';
import hsimg3 from '../mini-images/lh-3.jpg';
import hsimg4 from '../mini-images/lh-4.jpg';
import hsimg5 from '../mini-images/lh-5.jpg';
import skymusic from '../mini-images/sky.mp3';


function House() {



  return (
<div className='housebg' src={hsgif}>  

<embed name="sky-music" src="./src/mini-images/sky.mp3" loop="false" hidden="true" autostart="true"></embed>

  <option value="vol" className='houseadd1'>Plot No.1,Saanthi Street,Lake side road,Chennai</option>
  <option value="vol" className='houseadd2'>Plot No.2,Vairasamy Street,Ushman Road,Chennai</option>
  <option value="vol" className='houseadd3'>Plot No.3,Mansi Street,Long Road,Kovai</option>
  <option value="vol" className='houseadd4'>Plot No.4,Ashok Street,Tollgate Road,Madurai</option>
  <option value="vol" className='houseadd5'>Plot No.5,Havel Street,Coolis Road,Tenkasi</option>



 <img className='hmg-1' src={hsimg1} width={'600px'} height={'300px'} alt="" />   
 <img className='hmg-2' src={hsimg2} width={'600px'} height={'300px'} alt="" />   
 <img className='hmg-3' src={hsimg3} width={'600px'} height={'300px'} alt="" />   
 <img className='hmg-4' src={hsimg4} width={'600px'} height={'300px'} alt="" />   
 <img className='hmg-5' src={hsimg5} width={'600px'} height={'300px'} alt="" />   


 <button type='submit' className='buths1'><Link to = "/bookingdetails6" className='buthadd'>Book</Link></button>
 <button type='submit' className='buths1'><Link to = "/bookingdetails7" className='buthadd1'>Book</Link></button>
 <button type='submit' className='buths1'><Link to = "/bookingdetails8" className='buthadd2'>Book</Link></button>
 <button type='submit' className='buths1'><Link to = "/bookingdetails9" className='buthadd3'>Book</Link></button>
 <button type='submit' className='buths1'><Link to = "/bookingdetails10" className='buthadd4'>Book</Link></button>

<audio src={skymusic} autoplay="autoplay" loop="loop"></audio>


<div className='cardhouse1'>
    <h3>Bedroom: </h3><p>4</p>
    <h3>Tenant: </h3><p>Family</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Type: </h3><p>Independent House</p>
    <h3>Advance/Monthly: </h3><p>₹50000/₹20000</p>
</div>

<div className='cardhouse2'>
    <h3>Bedroom: </h3><p>4</p>
    <h3>Tenant: </h3><p>Family</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Type: </h3><p>Independent House</p>
    <h3>Advance/Monthly: </h3><p>₹60000/₹25000</p>
</div>

<div className='cardhouse3'>
    <h3>Bedroom: </h3><p>5</p>
    <h3>Tenant: </h3><p>Family</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Type: </h3><p>Independent House</p>
    <h3>Advance/Monthly: </h3><p>₹100000/₹50000</p>
</div>

<div className='cardhouse4'>
    <h3>Bedroom: </h3><p>2</p>
    <h3>Tenant: </h3><p>Family</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Type: </h3><p>Independent House</p>
    <h3>Advance/Monthly: </h3><p>₹40000/₹10000</p>
</div>

<div className='cardhouse5'>
    <h3>Bedroom: </h3><p>4</p>
    <h3>Tenant: </h3><p>Bachelors</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Type: </h3><p>Independent House</p>
    <h3>Advance/Monthly: </h3><p>₹40000/₹15000</p>
</div>

<button type="button" className='rentbackhp'><Link to = "/" className='rentbacksubhp' >Back to Home Page</Link></button>

</div>
  )
}

export default House