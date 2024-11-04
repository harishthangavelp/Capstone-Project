import React, { useState,useEffect } from 'react'
import axios from 'axios'
import '../msc-payments/Rentform.css'
import Navigation from '../Navigation';
import { Link,useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import '../Payments-Msg/Success'
import '../Payments-Msg/Cancel'
import '../Payments-Msg/SuccessPage'
import { Modal } from 'react-bootstrap'; // Import Modal for popup
import hsrentimg4 from '../new-images/msc4.jpg';

function Rentform4() {


    const [nameform,setNameform]=useState('');
    const [nameph,setNameph]=useState('');
    const [namemail,setNamemail]=useState('');
    const [fradform,setFradform]=useState('');
    const [toadform,setToadform]=useState('');
    const [timeform,setTimeform]=useState('');
    const [dmyform,setDmyform]=useState('');
    const [showPopup, setShowPopup] = useState(false); // State for popup
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Check if user is logged in
    const [username, setUsername] = useState(''); // State for username
	const stripePromise = loadStripe('pk_test_51QAvR5FxddvTxBZJLQj17mka67uhpZecO86ZteNw6cNAK9hD0vyLuF0ZafyN2h89okXr3PNqHcgTVc13lefq8hA8005uGxtimW'); // Replace with your actual publishable key

    const navigate = useNavigate();

    // Check if user is logged in and has a username (this could be fetched from localStorage or context)
    useEffect(() => {
        const storedUsername = localStorage.getItem('username'); // Assuming username is stored in localStorage
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    const handleCheckout = async (priceId) => {
        if (!isLoggedIn) {
            setShowPopup(true); // Show the popup if the user is not logged in
            return;
        }
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
  
    const handleRentForms = (e) => {
      e.preventDefault()
      axios.post('https://capstone-project-17.onrender.com/register',{nameform,namemail,nameph,fradform,toadform,timeform,dmyform})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }

    const handleClosePopup = () => setShowPopup(false); // Close popup

  return (
 <div className='rentbgbody'>
 <div className='rentbg' >

 <form className='rentForm' action="https://formspree.io/f/mgvwqrae" method="POST" >

<h1 className='rentTitle'>Booking Details</h1>

<input type="text" value={nameform} className='namerTitle' placeholder="Your Name" name="Name" onChange={(e)=> setNameform(e.target.value)} required/>
<input type="number" value={nameph} className='phrTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e)=> setNameph(e.target.value)} required/>
<input type="email" value={namemail} className='mailrTitle' placeholder="Your Mail" name="Mail" onChange={(e)=> setNamemail(e.target.value)} required/>
<img className="rentimg1" src={hsrentimg4}  alt="" /> <br />  
<input type="text" value={timeform} className='jourrTime' placeholder="Months to Stay" name="Months to Stay" onChange={(e)=> setTimeform(e.target.value)} required/>
<input type="text" value={dmyform} className='jourrDmy' placeholder="From D/M/Y" name="From D/M/Y" onChange={(e)=> setDmyform(e.target.value)} required/>
<button onClick={() => handleCheckout('price_1QFVGMFxddvTxBZJPPcfjmu4')} type="submit"  className='bookDoner1'>Pay</button>
<button type="submit" className='bookDoner2'>Submit</button>

</form>
<br />
<p className='midr'>Note: Submit the details and do the payment</p>

{/* <audio src={skymusicform} autoplay="autoplay" loop="loop"></audio> */}

<button type="button" className='rentback'><Link to = "/malls-supermarkets" className='rentbacksub' >Back</Link></button>
<Modal show={showPopup} onHide={handleClosePopup}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login Required</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>You need to be logged in to proceed with the payment. Please log in to continue.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to="/register&login">
                            <button className="btn btn-primary">Go to Login</button>
                        </Link>
                        <button className="btn btn-secondary" onClick={handleClosePopup}>Close</button>
                    </Modal.Footer>
                </Modal>
 </div>
 
 </div>
  )
}

export default Rentform4

