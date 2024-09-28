import React, { useState } from 'react'
import axios from 'axios'
import '../whr-payments/Rentform2.css'
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';

import hsrwhrimg9 from '../new-images/whb4.jpg';

function Rentform9() {


  const [book, setBook] = useState({
		name: "1550 sqft Cargofy Warehouse",
		author: "John Green",
		img: "https://www.braemarbuildings.com/assets/components/phpthumbof/cache/warehouse_gallery_5.0370064712155cfdbaac371a5458f290.jpg",
		price: 105000,
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
  
    const handleWhrForms = (e) => {
      e.preventDefault()
      axios.post('https://capstone-project-17.onrender.com/register',{nameform,namemail,nameph,fradform,toadform,timeform,dmyform})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }

  return (
 <div className='whbgbody'>
 <div className='whrfbg' >

 <form className='whForm' action="https://formspree.io/f/mgvwqrae" method="POST" >

<h1 className='whTitle'>Booking Details</h1>

<input type="text" value={nameform} className='namewhTitle' placeholder="Your Name" name="Name" onChange={(e)=> setNameform(e.target.value)} required/>
<input type="number" value={nameph} className='phwhTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e)=> setNameph(e.target.value)} required/>
<input type="email" value={namemail} className='mailwhTitle' placeholder="Your Mail" name="Mail" onChange={(e)=> setNamemail(e.target.value)} required/>
<img className="rentwhimg1" src={hsrwhrimg9}  alt="" /> <br />  
<input type="text" value={timeform} className='jourwhTime' placeholder="Duration in Months" name="Duration in Months" onChange={(e)=> setTimeform(e.target.value)} required/>
<input type="text" value={dmyform} className='jourwhDmy' placeholder="From D/M/Y" name="From D/M/Y" onChange={(e)=> setDmyform(e.target.value)} required/>
<button type="submit" onClick={handlePayment} className='bookDonewh1'>Pay</button>
<button type="submit" className='bookDonewh2'>Submit</button>

</form>
<br />
<p className='midwh'>Note: Submit the details and do the payment</p>

{/* <audio src={skymusicform} autoplay="autoplay" loop="loop"></audio> */}

<button type="button" className='rentbackwh'><Link to = "/warehouse-retailers" className='rentbacksubwh' >Back</Link></button>

 </div>
 
 </div>
  )
}

export default Rentform9
