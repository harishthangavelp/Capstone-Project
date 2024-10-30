import React, { useState } from 'react'
import axios from 'axios'
import '../bds-payments/Rentform3.css'
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import '../Payments-Msg/Success'
import '../Payments-Msg/Cancel'
import '../Payments-Msg/SuccessPage'

import hsrbdsimg11 from '../new-images/bds1.jpg';

function Rentform11() {


    const [nameform,setNameform]=useState('');
    const [nameph,setNameph]=useState('');
    const [namemail,setNamemail]=useState('');
    const [fradform,setFradform]=useState('');
    const [toadform,setToadform]=useState('');
    const [timeform,setTimeform]=useState('');
    const [dmyform,setDmyform]=useState('');

		
	const stripePromise = loadStripe('pk_test_51QAvR5FxddvTxBZJLQj17mka67uhpZecO86ZteNw6cNAK9hD0vyLuF0ZafyN2h89okXr3PNqHcgTVc13lefq8hA8005uGxtimW'); // Replace with your actual publishable key

    const handleCheckout = async (priceId) => {
        const quantity = 1; // Set the quantity as needed

        const response = await fetch('https://capstone-project-140.onrender.com/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity, priceId }) // Include price ID in the request body
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            alert(`Error: ${errorMessage}`); // Alert the error message
            return;
        }

        const session = await response.json();
        const stripe = await stripePromise; // Ensure the Stripe instance is loaded
        const result = await stripe.redirectToCheckout({ sessionId: session.id });

        if (result.error) {
            // Inform the customer that there was an error
            alert(result.error.message);
        }
    };
  
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
<img className="rentbdsimg1" src={hsrbdsimg11}  alt="" /> <br />  
<input type="text" value={timeform} className='jourbdsTime' placeholder="Duration in Months" name="Duration in Months" onChange={(e)=> setTimeform(e.target.value)} required/>
<input type="text" value={dmyform} className='jourbdsDmy' placeholder="From D/M/Y" name="From D/M/Y" onChange={(e)=> setDmyform(e.target.value)} required/>
<button type="submit" onClick={() => handleCheckout('price_1QFVj8FxddvTxBZJN1sxpUaV')} className='bookDonebds1'>Pay</button>
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

export default Rentform11
