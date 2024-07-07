import React from 'react'
import '../mini-components/House.css'
import hsgif from '../mini-images/cloud.gif'

import hsimg1 from '../mini-images/lh-1.jpg';
import hsimg2 from '../mini-images/lh-2.jpg';
import hsimg3 from '../mini-images/lh-3.jpg';
import hsimg4 from '../mini-images/lh-4.jpg';
import hsimg5 from '../mini-images/lh-5.jpg';
import skymusic from '../mini-images/sky.mp3';

function House() {
  return (
<div className='housebg' src={hsgif}>  

{/* <embed name="sky-music" src="./src/mini-images/sky.mp3" loop="false" hidden="true" autostart="true"></embed> */}


 <img className='hmg-1' src={hsimg1} width={'600px'} height={'300px'} alt="" />   
<button className='buths1'>Buy</button>
 <img className='hmg-2' src={hsimg2} width={'600px'} height={'300px'} alt="" />   
 <button className='buths2'>Buy</button>
 <img className='hmg-3' src={hsimg3} width={'600px'} height={'300px'} alt="" />   
 <button className='buths3'>Buy</button>
 <img className='hmg-4' src={hsimg4} width={'600px'} height={'300px'} alt="" />   
 <button className='buths4'>Buy</button>
 <img className='hmg-5' src={hsimg5} width={'600px'} height={'300px'} alt="" />   
 <button className='buths5'>Buy</button>

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





</div>
  )
}

export default House