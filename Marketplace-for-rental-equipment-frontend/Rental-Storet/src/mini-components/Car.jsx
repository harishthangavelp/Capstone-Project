import React from 'react'
import axios from "axios";
import { useState } from "react";
import '../mini-components/Car.css'

import carimgshow1 from '../mini-images/hyundai-creta-removebg-preview.png';
import carimgshow2 from '../mini-images/honda-city-removebg-preview.png';
import carimgshow3 from '../mini-images/landrover-defender-removebg-preview.png';
import carimgshow4 from '../mini-images/bmw.png';
import carimgshow5 from '../mini-images/rollsroyce-removebg-preview.png';
import carbgnd from '../mini-images/carbg.png';
import carmusic from '../mini-images/chasing_cars.mp3';

function Car() {

	const [searchTerm, setSearchTerm] = useState("");

  const initPayment = (data) => {
		const options = {
			key: "rzp_test_5mjZFfAYX2kumz",

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
			const { data } = await axios.post(orderUrl, { });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

  return (
<div className='carbg' src={carbgnd}>  


<audio src={carmusic} autoplay="autoplay" loop="loop"></audio>

<div className='templateContainer'>
	<label className='temp'>Search</label>
	<input id='searchInput' className='tumtum2' type="text"  />
</div>


<div className='car-1'>
<form action="" className='form1'>
<h1>Hyundai Creta</h1>
<h3>Model: </h3><p>Hyundai Creta</p>
<h3>Engine: </h3><p>1482 cc, 1493 cc & 1497 cc</p>
<h3>Transmission: </h3><p>
Manual & Automatic</p>
<h3>Seating Capacity: </h3><p>
5 Seater</p>
<h3>Price: </h3><p>Rs. 11.00 Lakh</p>
<button type='button' className='submit bts11' onClick={handlePayment} data-bs-toggle="modal" data-bs-target="#exampleModal" value='Login'>Buy</button>
</form>
</div>

<div className='imgs-1'>
 <img src={carimgshow1}  alt="" />   
 </div>
 

 <div className='car-2'>
<form action="" className='form1'>
<h1>Honda City</h1>
<h3>Model: </h3><p>Honda City</p>
<h3>Engine: </h3><p>1498 cc</p>
<h3>Transmission: </h3><p>
Manual & Automatic</p>
<h3>Seating Capacity: </h3><p>
5 Seater</p>
<h3>Price: </h3><p>Rs. 11.82 - 16.35 Lakh</p>
<button type='button' className='submit bts22'  >Buy</button>
</form>
</div>

<div className='imgs-2'>
 <img src={carimgshow2} alt="" />   
 </div>



 <div className='car-3'>
<form action="" className='form1'>
<h1>Land Rover</h1>
<h3>Model: </h3><p>Land Rover Defender</p>
<h3>Engine: </h3><p>
1997 cc, 2996 cc, 2997 cc</p>
<h3>Transmission: </h3><p>
Manual & Automatic</p>
<h3>Seating Capacity: </h3><p>
5 Seater</p>
<h3>Price: </h3><p>Rs. 93.55 Lakh - 2.30 Crore</p>
<button type='button' className='submit bts33' >Buy</button>
</form>
</div>

<div className='imgs-3'>
 <img src={carimgshow3} alt="" />   
 </div>


 
 <div className='car-4'>
<form action="" className='form1'>
<h1>BMW</h1>
<h3>Model: </h3><p>BMW 2 Series Gran Coupe</p>
<h3>Engine: </h3><p>
1995 cc & 1998 cc</p>
<h3>Transmission: </h3><p>
Manual & Automatic</p>
<h3>Seating Capacity: </h3><p>
5 Seater</p>
<h3>Price: </h3><p>Rs. 43.90 - 46.90 Lakh</p>
<button type='button' className='submit bts44' >Buy</button>
</form>
</div>

<div className='imgs-4'>
 <img src={carimgshow4} alt="" />   
 </div>


 
 <div className='car-5'>
<form action="" className='form1'>
<h1>Rolls-Royce</h1>
<h3>Model: </h3><p>Rolls-Royce Phantom</p>
<h3>Engine: </h3><p>
6749 cc</p>
<h3>Transmission: </h3><p>
Manual & Automatic</p>
<h3>Seating Capacity: </h3><p>
5 Seater</p>
<h3>Price: </h3><p>Rs. 9.50 Crore</p>
<button type='button' className='submit bts55' >Buy</button>
</form>
</div>

<div className='imgs-5'>
 <img src={carimgshow5} alt="" />   
 </div>





</div>
  )
}

export default Car