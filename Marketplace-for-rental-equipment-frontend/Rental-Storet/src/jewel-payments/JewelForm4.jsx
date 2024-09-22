import React, { useState } from 'react'
import axios from 'axios'
import jewelformbg from '../mini-images/jew-5.jpg';
import '../jewel-payments/JewelForm.css'
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import jewelmusicform from '../mini-images/gold.mp3';

function JewelForm4() {

	// const input = document.getElementsByClassName("jourTime");
	// const inputValue = input.value;
	// console.log(inputValue);

  const [book, setBook] = useState({
		name: "20 gram Gold Bangles",
		author: "John Green",
		img: "https://static.theprint.in/wp-content/uploads/2020/08/gold-bangles-696x392.jpg?compress=true&quality=80&w=800&dpr=1",
		price: 22000,
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

  const handleBookForms = (e) => {
    e.preventDefault()
    axios.post('https://capstone-project-17.onrender.com/register',{nameform,namemail,nameph,fradform,toadform,timeform,dmyform})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  
  return (
   <>
<div className='jewfbg' src={jewelformbg}>

{/* onSubmit={handleBookForms} */}
<form className='bookForm' action="https://formspree.io/f/mgvwqrae" method="POST" >

<h1 className='formjewTitle'>Booking Details</h1>

<input type="text" value={nameform} className='namejewTitle' placeholder="Your Name" name="Name" onChange={(e)=> setNameform(e.target.value)} required/>
<input type="number" value={nameph} className='phjewTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e)=> setNameph(e.target.value)} required/>
<input type="email" value={namemail} className='mailjewTitle' placeholder="Your Mail" name="Mail" onChange={(e)=> setNamemail(e.target.value)} required/>
<textarea value={fradform} className='fromjewTitle' placeholder="Address" name="Address" rows="4" cols="35" onChange={(e)=> setFradform(e.target.value)} required/>
<textarea value={toadform} className='tojewTitle' placeholder="Quantity" name="Quantity" rows="4" cols="35" onChange={(e)=> setToadform(e.target.value)} required/>
<input type="text" value={timeform} className='jourjewTime' placeholder="How many days" name="Pickup Time" onChange={(e)=> setTimeform(e.target.value)} required/>
<input type="text" value={dmyform} className='jourjewDmy' placeholder="Mention D/M/Y" name="Pickup D/M/Y" onChange={(e)=> setDmyform(e.target.value)} required/>
<button type="submit" onClick={handlePayment} className='bookjewDone1'>Pay</button>
<button type="submit" className='bookjewDone2'>Submit</button>

</form>
<br />
<p className='midjew'>Note: Submit the details and do the payment</p>

<audio src={jewelmusicform} autoplay="autoplay" loop="loop"></audio>

<button type="button" className='bookbackjew'><Link to = "/jeweldetails" className='bookbacksubjew' >Back</Link></button>

{/* <div className="App">
			<div className="book_container">
				<img src={book.img} alt="book_img" className="book_img" />
				<p className="book_name">{book.name}</p>
				<p className="book_author">By {book.author}</p>
				<p className="book_price">
					Price : <span>&#x20B9; {book.price}</span>
				</p>
				<button onClick={handlePayment} className="buy_btn">
					buy now
				</button>
			</div>
		</div> */}

</div>
   </>
  )
}

export default JewelForm4