
import React from 'react'
import axios from 'axios';
import Navigation from '../Navigation';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import '../mini-components/BDS.css'

import hsimg111 from '../new-images/bds1.jpg';
import hsimg222 from '../new-images/bds2.webp';
import hsimg333 from '../new-images/bds3.jpg';
import hsimg444 from '../new-images/bds4.jpg';
import hsimg555 from '../new-images/bds5.jpg';


function BDS() {



  return (
<div className='bdsg'>  

<h1 className='bdshead'>Department Stores</h1>

  <option value="vol" className='bdsadd1'> No.11,Saanthi Street,Lake side road,Chennai</option>
  <option value="vol" className='bdsadd2'> No.12,Vairasamy Street,Ushman Road,Chennai</option>
  <option value="vol" className='bdsadd3'> No.13,Mansi Street,Long Road,Kovai</option>
  <option value="vol" className='bdsadd4'> No.14,Ashok Street,Tollgate Road,Madurai</option>
  <option value="vol" className='bdsadd5'> No.15,Havel Street,Coolis Road,Tenkasi</option>



 <img className='bdshmg-1' src={hsimg111} width={'600px'} height={'300px'} alt="" />   
 <img className='bdshmg-2' src={hsimg222} width={'600px'} height={'300px'} alt="" />   
 <img className='bdshmg-3' src={hsimg333} width={'600px'} height={'300px'} alt="" />   
 <img className='bdshmg-4' src={hsimg444} width={'600px'} height={'300px'} alt="" />   
 <img className='bdshmg-5' src={hsimg555} width={'600px'} height={'300px'} alt="" />   


 <button type='submit' className='bdsbuths1'><Link to = "/bookingdetails11" className='bdsbuthadd'>Book</Link></button>
 <button type='submit' className='bdsbuths1'><Link to = "/bookingdetails12" className='bdsbuthadd1'>Book</Link></button>
 <button type='submit' className='bdsbuths1'><Link to = "/bookingdetails13" className='bdsbuthadd2'>Book</Link></button>
 <button type='submit' className='bdsbuths1'><Link to = "/bookingdetails14" className='bdsbuthadd3'>Book</Link></button>
 <button type='submit' className='bdsbuths1'><Link to = "/bookingdetails15" className='bdsbuthadd4'>Book</Link></button>

{/* <audio src={skymusic} autoplay="autoplay" loop="loop"></audio> */}


<div className='bdscardhouse1'>
    <h3>Description: </h3><p>Saimon Stores</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>2000</p>
    <h3>Advance/Monthly: </h3><p>₹40000/₹15000</p>
</div>

<div className='bdscardhouse2'>
<h3>Description: </h3><p>Murugan Stores</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>5000</p>
    <h3>Advance/Monthly: </h3><p>₹500000/₹50000</p>
</div>

<div className='bdscardhouse3'>
<h3>Description: </h3><p>Dubai Stores</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>1000</p>
    <h3>Advance/Monthly: </h3><p>₹350000/₹10000</p>
</div>

<div className='bdscardhouse4'>
<h3>Description: </h3><p>Havelis Stores</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>1550</p>
    <h3>Advance/Monthly: </h3><p>₹150000/₹60000</p>
</div>

<div className='bdscardhouse5'>
<h3>Description: </h3><p>Bogan Stores</p>
    <h3>Furnishing: </h3><p>Furnished</p>
    <h3>Parking: </h3><p>Bike/Car</p>
    <h3>Sqft: </h3><p>3500</p>
    <h3>Advance/Monthly: </h3><p>₹400000/₹40000</p>
</div>

<button type="button" className='bdsbackhp'><Link to = "/" className='bdsbacksubhp' >Back to Home Page</Link></button>

</div>
  )
}

export default BDS