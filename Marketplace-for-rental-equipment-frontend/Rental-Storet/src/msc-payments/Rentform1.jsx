import React, { useState } from 'react'
import axios from 'axios'
import '../msc-payments/Rentform.css'
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';

import hsrentimg1 from '../new-images/msc1.jpg';

function Rentform1() {


  const [book, setBook] = useState({
		name: "1000 sqft East Coast Mall",
		author: "John Green",
		img: "https://cdn.pixabay.com/photo/2014/10/22/18/24/central-embassy-498560_1280.jpg",
		price: 50000,
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
				
					const verifyUrl = "https://capstone-project-26.onrender.com/api/payment/verify"
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
			// const orderUrl = "http://localhost:8080/api/payment/orders";
			const orderUrl = "https://capstone-project-26.onrender.com/api/payment/orders"		
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

	const [amount,setAmount] = useState('');
	const [amount_due,setAmount_due] = useState('');
	const [amount_paid,setAmount_paid] = useState('');
	const [attempts,setAttempts] = useState('');
	const [created_at,setCreated_at] = useState('');
	const [currency,setCurrency] = useState('');
	const [entity,setEntity] = useState('');
	const [id,setId] = useState('');
	const [notes,setNotes] = useState('');
	const [offer_id,setOffer_id] = useState('');
	const [receipt,setReceipt] = useState('');
	const [status,setStatus] = useState('');
  
	
    const handleRentForms = (e) => {
      e.preventDefault()
      axios.post('https://capstone-project-17.onrender.com/register',{nameform,namemail,nameph,fradform,toadform,timeform,dmyform})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }

    const handlePayForms = (e) => {
		e.preventDefault()
		axios.get('https://capstone-project-26.onrender.com/api/payment/orders',{amount,amount_due,amount_paid,attempts,created_at,
			currency,entity,id,notes,offer_id,receipt,status})
		.then(result => console.log(result))
		.catch(err => console.log(err))
	  }

  return (
 <div className='rentbgbody'>
 <div className='rentbg' >

 <form className='rentForm' onSubmit={handlePayForms} action="https://formspree.io/f/mgvwqrae" method="POST" >

<h1 className='rentTitle'>Booking Details</h1>

<input type="text" value={nameform} className='namerTitle' placeholder="Your Name" name="Name" onChange={(e)=> setNameform(e.target.value)} required/>
<input type="number" value={nameph} className='phrTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e)=> setNameph(e.target.value)} required/>
<input type="email" value={namemail} className='mailrTitle' placeholder="Your Mail" name="Mail" onChange={(e)=> setNamemail(e.target.value)} required/>
<img className="rentimg1" src={hsrentimg1}  alt="" /> <br />  
<input type="text" value={timeform} className='jourrTime' placeholder="Duration in Months" name="Duration in Months" onChange={(e)=> setTimeform(e.target.value)} required/>
<input type="text" value={dmyform} className='jourrDmy' placeholder="From D/M/Y" name="From D/M/Y" onChange={(e)=> setDmyform(e.target.value)} required/>
<button type="submit" value={(amount,amount_due,amount_paid,attempts,created_at,
			currency,entity,id,notes,offer_id,receipt,status)} onClick={(handlePayment,handlePayForms)} 
			onChange={((e)=> setAmount(e.target.value),(e)=> setAmount_due(e.target.value),(e)=> setAmount_paid(e.target.value),
				(e)=> setAttempts(e.target.value),(e)=> setCreated_at(e.target.value),(e)=> setCurrency(e.target.value),
				(e)=> setEntity(e.target.value),(e)=> setId(e.target.value),(e)=> setNotes(e.target.value),
				(e)=> setOffer_id(e.target.value),(e)=> setReceipt(e.target.value),(e)=> setStatus(e.target.value))}
			className='bookDoner1'>Pay</button>
			
<button type="submit" className='bookDoner2'>Submit</button>

</form>
<br />
<p className='midr'>Note: Submit the details and do the payment</p>

{/* <audio src={skymusicform} autoplay="autoplay" loop="loop"></audio> */}

<button type="button" className='rentback'><Link to = "/malls-supermarkets" className='rentbacksub' >Back</Link></button>

 </div>
 
 </div>
  )
}

export default Rentform1
