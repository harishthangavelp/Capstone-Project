import React from 'react'
import '../mini-components/House.css'
import hsgif from '../mini-images/cloud.gif'
import axios from 'axios';
import { useState } from 'react';

import hsimg1 from '../mini-images/lh-1.jpg';
import hsimg2 from '../mini-images/lh-2.jpg';
import hsimg3 from '../mini-images/lh-3.jpg';
import hsimg4 from '../mini-images/lh-4.jpg';
import hsimg5 from '../mini-images/lh-5.jpg';
import skymusic from '../mini-images/sky.mp3';


function House() {

    const [house, setHouse] = useState({
        id:"1",
        bedroom:"4",
        tenant:"family",
        parking:"bike/car",
        type:"independent house",
        amount: 2000,
        });

        const initPayment = (data) => {
            const options = {
                key: "rzp_test_5mjZFfAYX2kumz",
                     id: house.id,
                     bedroom: house.bedroom,
                     tenant: house.tenant,
                     parking: house.parking,
                     type: house.type,
                     amount: house.amount,
                handler: async (response) => {
                    try {
                        const verifyUrl = "http://localhost:8080/api/payment/verify";
                        const { data } = await axios.post(verifyUrl, response);
                        console.log(data);
                    } catch (error) {
                        console.log(error);
                    }
                },
                theme: {
                    color: "#3399cc",
                },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        };
    
        const handlePayment = async () => {
            try {
                const orderUrl = "http://localhost:8080/api/payment/orders";
                const { data } = await axios.post(orderUrl, { amount: house.amount });
                console.log(data);
                initPayment(data.data);
            } catch (error) {
                console.log(error);
            }
        };



  return (
<div className='housebg' src={hsgif}>  

<embed name="sky-music" src="./src/mini-images/sky.mp3" loop="false" hidden="true" autostart="true"></embed>


 <img className='hmg-1' src={hsimg1} width={'600px'} height={'300px'} alt="" />   
<button className='buths1' onClick={handlePayment}>Buy</button>
 <img className='hmg-2' src={hsimg2} width={'600px'} height={'300px'} alt="" />   
 <button className='buths2' onClick={handlePayment}>Buy</button>
 <img className='hmg-3' src={hsimg3} width={'600px'} height={'300px'} alt="" />   
 <button className='buths3' onClick={handlePayment}>Buy</button>
 <img className='hmg-4' src={hsimg4} width={'600px'} height={'300px'} alt="" />   
 <button className='buths4' onClick={handlePayment}>Buy</button>
 <img className='hmg-5' src={hsimg5} width={'600px'} height={'300px'} alt="" />   
 <button className='buths5' onClick={handlePayment}>Buy</button>

<audio src={skymusic} autoplay="autoplay" loop="loop"></audio>

<div className='templatehouse'>
	<label className='temhouse'>Search</label>
	<input id='searchInput' className='tumtum1' type="text"  />
</div>

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