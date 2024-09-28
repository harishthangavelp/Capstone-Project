import React, { useState } from 'react'
import axios from 'axios'
import '../bds-payments/Rentform3.css'
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';

import hsrbdsimg15 from '../new-images/bds5.jpg';

function Rentform15() {


  const [book, setBook] = useState({
		name: "3500 sqft Bogan Stores",
		author: "John Green",
		img: "https://www.britain-visitor.com/images/content_images/harrods2018.jpg",
		price: 400000,
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
  
    const handleBdsForms = (e) => {
      e.preventDefault()
      axios.post('https://capstone-project-17.onrender.com/register',{nameform,namemail,nameph,fradform,toadform,timeform,dmyform})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }

  return (
 <div className='bdsbgbody'>
 <div className='bdsbg' >

 <form className='bdsForm' action="https://formspree.io/f/mgvwqrae" method="POST" >

<h1 className='bdsTitle'>Booking Details</h1>

<input type="text" value={nameform} className='namebdsTitle' placeholder="Your Name" name="Name" onChange={(e)=> setNameform(e.target.value)} required/>
<input type="number" value={nameph} className='phbdsTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e)=> setNameph(e.target.value)} required/>
<input type="email" value={namemail} className='mailbdsTitle' placeholder="Your Mail" name="Mail" onChange={(e)=> setNamemail(e.target.value)} required/>
<img className="rentbdsimg1" src={hsrbdsimg15}  alt="" /> <br />  
<input type="text" value={timeform} className='jourbdsTime' placeholder="Duration in Months" name="Duration in Months" onChange={(e)=> setTimeform(e.target.value)} required/>
<input type="text" value={dmyform} className='jourbdsDmy' placeholder="From D/M/Y" name="From D/M/Y" onChange={(e)=> setDmyform(e.target.value)} required/>
<button type="submit" onClick={handlePayment} className='bookDonebds1'>Pay</button>
<button type="submit" className='bookDonebds2'>Submit</button>

</form>
<br />
<p className='midbds'>Note: Submit the details and do the payment</p>

{/* <audio src={skymusicform} autoplay="autoplay" loop="loop"></audio> */}

<button type="button" className='rentbackbds'><Link to = "/department-stores" className='rentbacksubbds' >Back</Link></button>

 </div>
 
 </div>
  )
}

export default Rentform15
