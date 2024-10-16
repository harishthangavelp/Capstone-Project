import React, { useState } from 'react'
import axios from 'axios'
import '../msc-payments/Rentform.css'
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';

import hsrentimg2 from '../new-images/msc2.jpg';

function Rentform2() {


  const [book, setBook] = useState({
		name: "800 sqft Sunrise Mall",
		author: "John Green",
		img: "https://cdn.pixabay.com/photo/2014/05/17/18/09/shopping-mall-346434_1280.jpg",
		price: 55000,
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
			const orderUrl = "https://capstone-project-25.onrender.com/api/payment/orders";
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

	const handlePayForms = (e) => {
		e.preventDefault()
		axios.get('https://capstone-project-25.onrender.com/api/payment/orders',{amount,amount_due,amount_paid,attempts,created_at,
			currency,entity,id,notes,offer_id,receipt,status})
		.then(result => console.log(result))
		.catch(err => console.log(err))
	  }

  return (
 <div className='rentbgbody'>
 <div className='rentbg' >

 <form className='rentForm' action="https://formspree.io/f/mgvwqrae" method="POST" >

<h1 className='rentTitle'>Booking Details</h1>

<input type="text" value={nameform} className='namerTitle' placeholder="Your Name" name="Name" onChange={(e)=> setNameform(e.target.value)} required/>
<input type="number" value={nameph} className='phrTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e)=> setNameph(e.target.value)} required/>
<input type="email" value={namemail} className='mailrTitle' placeholder="Your Mail" name="Mail" onChange={(e)=> setNamemail(e.target.value)} required/>
<img className="rentimg1" src={hsrentimg2}  alt="" /> <br />  
<input type="text" value={timeform} className='jourrTime' placeholder="Months to Stay" name="Months to Stay" onChange={(e)=> setTimeform(e.target.value)} required/>
<input type="text" value={dmyform} className='jourrDmy' placeholder="From D/M/Y" name="From D/M/Y" onChange={(e)=> setDmyform(e.target.value)} required/>
<button type="submit" onClick={handlePayment} className='bookDoner1'>Pay</button>
<button type="submit" className='bookDoner2'>Submit</button>

</form>
<br />
<p className='midr'>Note: Submit the details and do the payment</p>

{/* <audio src={skymusicform} autoplay="autoplay" loop="loop"></audio> */}

<button type="button" value={(amount,amount_due,amount_paid,attempts,created_at,
			currency,entity,id,notes,offer_id,receipt,status)} onClick={handlePayment} 
			onChange={((e)=> setAmount(e.target.value),(e)=> setAmount_due(e.target.value),(e)=> setAmount_paid(e.target.value),
				(e)=> setAttempts(e.target.value),(e)=> setCreated_at(e.target.value),(e)=> setCurrency(e.target.value),
				(e)=> setEntity(e.target.value),(e)=> setId(e.target.value),(e)=> setNotes(e.target.value),
				(e)=> setOffer_id(e.target.value),(e)=> setReceipt(e.target.value),(e)=> setStatus(e.target.value))} className='rentback'><Link to = "/malls-supermarkets" className='rentbacksub' >Back</Link></button>

 </div>
 
 </div>
  )
}

export default Rentform2
