import React, { useState } from 'react'
import axios from 'axios'
import rfbg from '../mini-images/cloud.gif'
import '../house-payments/Rentform.css'
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';

import hsrentimg4 from '../mini-images/lh-4.jpg';

function Rentform4() {


  const [book, setBook] = useState({
		name: "2BHK House at Madurai",
		author: "John Green",
		img: "https://c1.wallpaperflare.com/preview/38/442/499/luxury-home-upscale-architecture-design-thumbnail.jpg",
		price: 40000,
	});

	const initPayment = (data) => {
		const options = {
			key: "rzp_test_ZxGQM7v4bgryb4",
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
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
			const { data } = await axios.post(orderUrl, { amount: book.price });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

    const [nameform,setNameform]=useState('');
    const [nameph,setNameph]=useState('');
    const [namemail,setNamemail]=useState('');
    const [fradform,setFradform]=useState('');
    const [toadform,setToadform]=useState('');
    const [timeform,setTimeform]=useState('');
    const [dmyform,setDmyform]=useState('');
  
    const handleRentForms = (e) => {
      e.preventDefault()
      axios.post('https://capstone-project-17.onrender.com/register',{nameform,namemail,nameph,fradform,toadform,timeform,dmyform})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }

  return (
 <div className='rentbgbody'>
 <div className='rentbg' src={rfbg}>

 <form className='rentForm' action="https://formspree.io/f/mgvwqrae" method="POST" >

<h1 className='rentTitle'>Booking Details</h1>

<input type="text" value={nameform} className='namerTitle' placeholder="Your Name" name="Name" onChange={(e)=> setNameform(e.target.value)} required/>
<input type="number" value={nameph} className='phrTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e)=> setNameph(e.target.value)} required/>
<input type="email" value={namemail} className='mailrTitle' placeholder="Your Mail" name="Mail" onChange={(e)=> setNamemail(e.target.value)} required/>
<img className="rentimg1" src={hsrentimg4}  alt="" /> <br />  
<input type="text" value={timeform} className='jourrTime' placeholder="Months to Stay" name="Months to Stay" onChange={(e)=> setTimeform(e.target.value)} required/>
<input type="text" value={dmyform} className='jourrDmy' placeholder="From D/M/Y" name="From D/M/Y" onChange={(e)=> setDmyform(e.target.value)} required/>
<button type="submit" onClick={handlePayment} className='bookDoner1'>Pay</button>
<button type="submit" className='bookDoner2'>Submit</button>

</form>
<br />
<p className='midr'>Note: Submit the details and do the payment</p>

<button type="button" className='rentback'><Link to = "/housedetails" className='rentbacksub' >Back</Link></button>

 </div>
 
 </div>
  )
}

export default Rentform4

