import React from 'react'
import axios from 'axios';
import Navigation from '../Navigation';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import '../mini-components/MSC.css'

import hsimg1 from '../new-images/msc1.jpg';
import hsimg2 from '../new-images/msc2.jpg';
import hsimg3 from '../new-images/msc3.jpg';
import hsimg4 from '../new-images/msc4.jpg';
import hsimg5 from '../new-images/msc5.jpg';


function MSC() {



  return (
<div className='housebg'>  

<h1 className='msmhead'>Malls and Shopping Centres</h1>

  <option value="vol" className='houseadd1'> No.1,Saanthi Street,Lake side road,Chennai</option>
  <option value="vol" className='houseadd2'> No.2,Vairasamy Street,Ushman Road,Chennai</option>
  <option value="vol" className='houseadd3'> No.3,Mansi Street,Long Road,Kovai</option>
  <option value="vol" className='houseadd4'> No.4,Ashok Street,Tollgate Road,Madurai</option>
  <option value="vol" className='houseadd5'> No.5,Havel Street,Coolis Road,Tenkasi</option>



 <img className='hmg-1' src={hsimg1} width={'600px'} height={'300px'} alt="" />   
 <img className='hmg-2' src={hsimg2} width={'600px'} height={'300px'} alt="" />   
 <img className='hmg-3' src={hsimg3} width={'600px'} height={'300px'} alt="" />   
 <img className='hmg-4' src={hsimg4} width={'600px'} height={'300px'} alt="" />   
 <img className='hmg-5' src={hsimg5} width={'600px'} height={'300px'} alt="" />   


 <button type='submit' className='buths1'><Link to = "/bookingdetails1" className='buthadd'>Book</Link></button>
 <button type='submit' className='buths1'><Link to = "/bookingdetails2" className='buthadd1'>Book</Link></button>
 <button type='submit' className='buths1'><Link to = "/bookingdetails3" className='buthadd2'>Book</Link></button>
 <button type='submit' className='buths1'><Link to = "/bookingdetails4" className='buthadd3'>Book</Link></button>
 <button type='submit' className='buths1'><Link to = "/bookingdetails5" className='buthadd4'>Book</Link></button>

{/* <audio src={skymusic} autoplay="autoplay" loop="loop"></audio> */}


<div className='cardhouse1'>
    <h3>Description: </h3><p>East Coast Mall</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>1000</p>
    <h3>Advance/Monthly: </h3><p>₹50000/₹20000</p>
</div>

<div className='cardhouse2'>
<h3>Description: </h3><p>Sunrise Mall</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>800</p>
    <h3>Advance/Monthly: </h3><p>₹55000/₹25000</p>
</div>

<div className='cardhouse3'>
<h3>Description: </h3><p>SKS Shopping Centre</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>1500</p>
    <h3>Advance/Monthly: </h3><p>₹300000/₹10000</p>
</div>

<div className='cardhouse4'>
<h3>Description: </h3><p>Rianas Shopping Centre</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>1550</p>
    <h3>Advance/Monthly: </h3><p>₹105000/₹55000</p>
</div>

<div className='cardhouse5'>
<h3>Description: </h3><p>Leosandy Mall</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>25000</p>
    <h3>Advance/Monthly: </h3><p>₹500000/₹50000</p>
</div>

<button type="button" className='rentbackhp'><Link to = "/" className='rentbacksubhp' >Back to Home Page</Link></button>

</div>
  )
}

export default MSC