import React from 'react'
import axios from 'axios';
import Navigation from '../Navigation';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import '../mini-components/WHR.css'

import hsimg11 from '../new-images/whb1.jpg';
import hsimg22 from '../new-images/whb2.jpg';
import hsimg33 from '../new-images/whb3.jpg';
import hsimg44 from '../new-images/whb4.jpg';
import hsimg55 from '../new-images/whb5.jpg';


function WHR() {



  return (
<div className='whbg'>  

<h1 className='whrhead'>Warehouse Retailers</h1>

  <option value="vol" className='whradd1'> No.6,Saanthi Street,Lake side road,Chennai</option>
  <option value="vol" className='whradd2'> No.7,Vairasamy Street,Ushman Road,Chennai</option>
  <option value="vol" className='whradd3'> No.8,Mansi Street,Long Road,Kovai</option>
  <option value="vol" className='whradd4'> No.9,Ashok Street,Tollgate Road,Madurai</option>
  <option value="vol" className='whradd5'> No.10,Havel Street,Coolis Road,Tenkasi</option>



 <img className='whrhmg-1' src={hsimg11} width={'600px'} height={'300px'} alt="" />   
 <img className='whrhmg-2' src={hsimg22} width={'600px'} height={'300px'} alt="" />   
 <img className='whrhmg-3' src={hsimg33} width={'600px'} height={'300px'} alt="" />   
 <img className='whrhmg-4' src={hsimg44} width={'600px'} height={'300px'} alt="" />   
 <img className='whrhmg-5' src={hsimg55} width={'600px'} height={'300px'} alt="" />   


 <button type='submit' className='whrbuths1'><Link to = "/bookingdetails6" className='whrbuthadd'>Book</Link></button>
 <button type='submit' className='whrbuths1'><Link to = "/bookingdetails7" className='whrbuthadd1'>Book</Link></button>
 <button type='submit' className='whrbuths1'><Link to = "/bookingdetails8" className='whrbuthadd2'>Book</Link></button>
 <button type='submit' className='whrbuths1'><Link to = "/bookingdetails9" className='whrbuthadd3'>Book</Link></button>
 <button type='submit' className='whrbuths1'><Link to = "/bookingdetails10" className='whrbuthadd4'>Book</Link></button>

{/* <audio src={skymusic} autoplay="autoplay" loop="loop"></audio> */}


<div className='whrcardhouse1'>
    <h3>Description: </h3><p>Youvariz Warehouse</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>1000</p>
    <h3>Advance/Monthly: </h3><p>₹50000/₹20000</p>
</div>

<div className='whrcardhouse2'>
<h3>Description: </h3><p>Storingly Warehouse</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>800</p>
    <h3>Advance/Monthly: </h3><p>₹55000/₹25000</p>
</div>

<div className='whrcardhouse3'>
<h3>Description: </h3><p>Rolex Warehouse</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>1500</p>
    <h3>Advance/Monthly: </h3><p>₹300000/₹10000</p>
</div>

<div className='whrcardhouse4'>
<h3>Description: </h3><p>Cargofy Warehouse</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>1550</p>
    <h3>Advance/Monthly: </h3><p>₹105000/₹55000</p>
</div>

<div className='whrcardhouse5'>
<h3>Description: </h3><p>Chipkot Warehouse</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>25000</p>
    <h3>Advance/Monthly: </h3><p>₹500000/₹50000</p>
</div>

<button type="button" className='whrbackhp'><Link to = "/" className='whrbacksubhp' >Back to Home Page</Link></button>

</div>
  )
}

export default WHR