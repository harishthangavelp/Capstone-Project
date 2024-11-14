import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../msc-payments/Rentform.css';
import Navigation from '../Navigation';
import { Link, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Modal } from 'react-bootstrap'; // Import Modal for popup
import hsrentimg5 from '../new-images/msc5.jpg';

function Rentform5() {
    const [nameform, setNameform] = useState('');
    const [nameph, setNameph] = useState('');
    const [namemail, setNamemail] = useState('');
    const [timeform, setTimeform] = useState('');
    const [dmyform, setDmyform] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State for showing the confirmation popup
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

        // Show confirmation popup for payment
        setShowPopup(true);
    };

    const handleConfirmPayment = async (priceId) => {
        // Proceed with Stripe checkout if user confirms
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

        setShowPopup(false); // Close the popup after the payment is processed
    };

    const handleRentForms = (e) => {
        e.preventDefault();
        axios.post('https://capstone-project-17.onrender.com/register', { nameform, namemail, nameph, timeform, dmyform })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };

    const handleClosePopup = () => setShowPopup(false); // Close popup

    return (
        <div className='rentbgbody'>
            <div className='rentbg'>
                <form className='rentForm' action="https://formspree.io/f/mgvwqrae" method="POST" >
                    <h1 className='rentTitle'>Booking Details</h1>

                    <input type="text" value={nameform} className='namerTitle' placeholder="Your Name" name="Name" onChange={(e) => setNameform(e.target.value)} required />
                    <input type="number" value={nameph} className='phrTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e) => setNameph(e.target.value)} required />
                    <input type="email" value={namemail} className='mailrTitle' placeholder="Your Mail" name="Mail" onChange={(e) => setNamemail(e.target.value)} required />
                    <img className="rentimg1" src={hsrentimg5} alt="" />
                    <br />
                    <input type="text" value={timeform} className='jourrTime' placeholder="Months to Stay" name="Months to Stay" onChange={(e) => setTimeform(e.target.value)} required />
                    <input type="text" value={dmyform} className='jourrDmy' placeholder="From D/M/Y" name="From D/M/Y" onChange={(e) => setDmyform(e.target.value)} required />
                    <button type="button" onClick={() => handleCheckout('price_1QFVNAFxddvTxBZJU9fgWMXQ')} className='bookDoner1'>Pay</button>
                    <button type="submit" className='bookDoner2'>Submit</button>
                </form>
                <br />
                <p className='midr'>Note: Submit the details and do the payment</p>

                <button type="button" className='rentback'>
                    <Link to="/malls-supermarkets" className='rentbacksub' >Back</Link>
                </button>

                {/* Confirmation Popup */}
                <Modal show={showPopup} onHide={handleClosePopup}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to proceed with the payment?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={() => handleConfirmPayment('price_1QFVNAFxddvTxBZJU9fgWMXQ')}>Yes</button>
                        <button className="btn btn-success" onClick={handleClosePopup}>No</button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default Rentform5;
