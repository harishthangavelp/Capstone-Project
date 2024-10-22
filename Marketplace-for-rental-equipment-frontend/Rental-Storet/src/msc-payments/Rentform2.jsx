import React, { useState } from 'react'
import axios from 'axios'
import '../msc-payments/Rentform.css'
import Navigation from '../Navigation';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';
import Payment1 from '../Payments/Payment1';
import hsrentimg2 from '../new-images/msc2.jpg';


function Rentform2() {

  const stripePromise = loadStripe('pk_test_51QAvR5FxddvTxBZJLQj17mka67uhpZecO86ZteNw6cNAK9hD0vyLuF0ZafyN2h89okXr3PNqHcgTVc13lefq8hA8005uGxtimW');
  

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
 <div className='rentbg' >

 <form className='rentForm' action="https://formspree.io/f/mgvwqrae" method="POST" >

<h1 className='rentTitle'>Booking Details</h1>

<input type="text" value={nameform} className='namerTitle' placeholder="Your Name" name="Name" onChange={(e)=> setNameform(e.target.value)} required/>
<input type="number" value={nameph} className='phrTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e)=> setNameph(e.target.value)} required/>
<input type="email" value={namemail} className='mailrTitle' placeholder="Your Mail" name="Mail" onChange={(e)=> setNamemail(e.target.value)} required/>
<img className="rentimg1" src={hsrentimg2}  alt="" /> <br />  
<input type="text" value={timeform} className='jourrTime' placeholder="Months to Stay" name="Months to Stay" onChange={(e)=> setTimeform(e.target.value)} required/>
<input type="text" value={dmyform} className='jourrDmy' placeholder="From D/M/Y" name="From D/M/Y" onChange={(e)=> setDmyform(e.target.value)} required/>
<button type="submit" className='bookDoner1'>Pay</button>
<button type="submit" className='bookDoner2'>Submit</button>
</form>
<br />
<p className='midr'>Note: Submit the details and do the payment</p>

{/* <audio src={skymusicform} autoplay="autoplay" loop="loop"></audio> */}

<button type="button"  className='rentback'><Link to = "/malls-supermarkets" className='rentbacksub' >Back</Link></button>

 </div>
 
 <Elements stripe={stripePromise}>
  <Payment1/>
  </Elements>

 </div>
  )
}

export default Rentform2
