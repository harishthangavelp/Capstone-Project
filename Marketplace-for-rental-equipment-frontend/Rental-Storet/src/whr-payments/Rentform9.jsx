import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../whr-payments/Rentform2.css';
import Navigation from '../Navigation';
import { Link, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import '../Payments-Msg/Success';
import '../Payments-Msg/Cancel';
import '../Payments-Msg/SuccessPage';
import { Modal } from 'react-bootstrap';
import hsrwhrimg9 from '../new-images/whb4.jpg';

function Rentform9() {
  const [nameform, setNameform] = useState('');
  const [nameph, setNameph] = useState('');
  const [namemail, setNamemail] = useState('');
  const [fradform, setFradform] = useState('');
  const [toadform, setToadform] = useState('');
  const [timeform, setTimeform] = useState('');
  const [dmyform, setDmyform] = useState('');
  const [showPopup, setShowPopup] = useState(false); // Popup for login check
  const [showConfirmation, setShowConfirmation] = useState(false); // Confirmation popup
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Check if user is logged in
  const [username, setUsername] = useState('');
  const stripePromise = loadStripe('pk_test_51QAvR5FxddvTxBZJLQj17mka67uhpZecO86ZteNw6cNAK9hD0vyLuF0ZafyN2h89okXr3PNqHcgTVc13lefq8hA8005uGxtimW');
  const navigate = useNavigate();

  // Check if user is logged in and has a username (this could be fetched from localStorage or context)
  useEffect(() => {
    const storedUsername = localStorage.getItem('username'); // Assuming username is stored in localStorage
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  // Handle the payment checkout
  const handleCheckout = async (priceId) => {
    if (!isLoggedIn) {
      setShowPopup(true); // Show the popup if the user is not logged in
      return;
    }
    setShowConfirmation(true); // Show confirmation modal
  };

  // Confirm payment action
  const handleConfirmPayment = async (priceId) => {
    const quantity = 1; 
    const response = await fetch('https://capstone-project-140.onrender.com/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quantity, priceId }) 
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      alert(`Error: ${errorMessage}`);
      return;
    }

    const session = await response.json();
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      alert(result.error.message);
    } else {
      navigate('/success'); // Navigate to success page after payment
    }
  };

  // Handle form submission
  const handleWhrForms = (e) => {
    e.preventDefault();
    axios.post('https://capstone-project-17.onrender.com/register', { nameform, namemail, nameph, fradform, toadform, timeform, dmyform })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  // Close popup modal
  const handleClosePopup = () => setShowPopup(false);

  // Close confirmation modal
  const handleCloseConfirmation = () => setShowConfirmation(false);

  return (
    <div className='whbgbody'>
      <div className='whrfbg'>
        <form className='whForm' action="https://formspree.io/f/mgvwqrae" method="POST">
          <h1 className='whTitle'>Booking Details</h1>

          <input type="text" value={nameform} className='namewhTitle' placeholder="Your Name" name="Name" onChange={(e)=> setNameform(e.target.value)} required/>
          <input type="number" value={nameph} className='phwhTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e)=> setNameph(e.target.value)} required/>
          <input type="email" value={namemail} className='mailwhTitle' placeholder="Your Mail" name="Mail" onChange={(e)=> setNamemail(e.target.value)} required/>
          <img className="rentwhimg1" src={hsrwhrimg9}  alt="" /><br />  
          <input type="text" value={timeform} className='jourwhTime' placeholder="Duration in Months" name="Duration in Months" onChange={(e)=> setTimeform(e.target.value)} required/>
          <input type="text" value={dmyform} className='jourwhDmy' placeholder="From D/M/Y" name="From D/M/Y" onChange={(e)=> setDmyform(e.target.value)} required/>
          
          <button type="button" onClick={() => handleCheckout('price_1QFValFxddvTxBZJG2suH5l4')} className='bookDonewh1'>Pay</button>
          <button type="submit" className='bookDonewh2'>Submit</button>
        </form>

        <p className='midwh'>Note: Submit the details and do the payment</p>

        <button type="button" className='rentbackwh'><Link to="/warehouse-retailers" className='rentbacksubwh'>Back</Link></button>

        {/* Popup Modal (Login Required) */}
        <Modal show={showPopup} onHide={handleClosePopup}>
          <Modal.Header closeButton>
            <Modal.Title>Login Required</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>You need to be logged in to proceed with the payment. Please log in to continue.</p>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/login">
              <button className="btn btn-primary">Go to Login</button>
            </Link>
            <button className="btn btn-secondary" onClick={handleClosePopup}>Close</button>
          </Modal.Footer>
        </Modal>

        {/* Confirmation Modal */}
        <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to proceed with the payment?</p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={() => handleConfirmPayment('price_1QFValFxddvTxBZJG2suH5l4')}>Yes</button>
            <button className="btn btn-success" onClick={handleCloseConfirmation}>No</button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Rentform9;
