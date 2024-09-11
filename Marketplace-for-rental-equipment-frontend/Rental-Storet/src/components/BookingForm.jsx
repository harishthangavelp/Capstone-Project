import React, { useState } from 'react'
import '../components/BookingForm.css'
import axios from 'axios'
import formbg from '../mini-images/carbg.png';

function BookingForm() {

  const [nameform,setNameform]=useState('');
  const [nameph,setNameph]=useState('');
  const [namemail,setNamemail]=useState('');
  const [fradform,setFradform]=useState('');
  const [toadform,setToadform]=useState('');
  const [timeform,setTimeform]=useState('');
  const [dmyform,setDmyform]=useState('');

  const handleBookForms = (e) => {
    e.preventDefault()
    axios.post('https://capstone-project-17.onrender.com/register',{nameform,namemail,nameph,fradform,toadform,timeform,dmyform})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  
  return (
   <>
<div className='bfbg' src={formbg}>

{/* onSubmit={handleBookForms} */}
<form className='bookForm' action="https://formspree.io/f/mgvwqrae" method="POST" >

<h1 className='formTitle'>Booking Details</h1>

<input type="text" value={nameform} className='nameTitle' placeholder="Your Name" name="Name" onChange={(e)=> setNameform(e.target.value)} required/>
<input type="number" value={nameph} className='phTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e)=> setNameph(e.target.value)} required/>
<input type="email" value={namemail} className='mailTitle' placeholder="Your Mail" name="Mail" onChange={(e)=> setNamemail(e.target.value)} required/>
<textarea value={fradform} className='fromTitle' placeholder="From Address" name="From Address" rows="4" cols="35" onChange={(e)=> setFradform(e.target.value)} required/>
<textarea value={toadform} className='toTitle' placeholder="To Address" name="To Address" rows="4" cols="35" onChange={(e)=> setToadform(e.target.value)} required/>
<input type="text" value={timeform} className='jourTime' placeholder="Pickup Time" name="Pickup Time" onChange={(e)=> setTimeform(e.target.value)} required/>
<input type="text" value={dmyform} className='jourDmy' placeholder="Pickup D/M/Y" name="Pickup D/M/Y" onChange={(e)=> setDmyform(e.target.value)} required/>
<button type="submit" className='bookDone'>Submit</button>

</form>

</div>
   </>
  )
}

export default BookingForm