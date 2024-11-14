import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../msc-payments/Rentform.css';
import Navigation from '../Navigation';
import { Link, useNavigate } from 'react-router-dom'; 
import { loadStripe } from '@stripe/stripe-js';
import hsrentimg1 from '../new-images/msc1.jpg';
import { Modal } from 'react-bootstrap'; // Import Modal for popup

function Rentform1() {
    const [nameform, setNameform] = useState('');
    const [nameph, setNameph] = useState('');
    const [namemail, setNamemail] = useState('');
    const [timeform, setTimeform] = useState('');
    const [dmyform, setDmyform] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State for the popup
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Check if user is logged in
    const [username, setUsername] = useState(''); // State for username
    const [showConfirmModal, setShowConfirmModal] = useState(false); // Show confirmation modal
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

    // Handle checkout logic when the Pay button is clicked
    const handleCheckout = async (priceId) => {
        if (!isLoggedIn) {
            setShowPopup(true); // Show the login required popup if user is not logged in
            return;
        }

        setShowConfirmModal(true); // Show confirmation modal
    };

    const handleConfirmPayment = async () => {
        // Proceed with payment if user confirms
        const priceId = 'price_1QF90OFxddvTxBZJMoxIE54L'; // Your price ID

        const quantity = 1;
        try {
            const response = await fetch('https://capstone-project-140.onrender.com/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ quantity, priceId }),
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
                navigate('/success');
            }
        } catch (error) {
            console.error('Error in handleCheckout:', error);
            alert('An error occurred while processing your payment.');
        }

        setShowConfirmModal(false); // Close the confirmation modal after payment
    };

    const handleClosePopup = () => setShowPopup(false); // Close login required popup
    const handleCloseConfirmModal = () => setShowConfirmModal(false); // Close confirmation modal

    return (
        <div className='rentbgbody'>
            <div className='rentbg'>
                <form className='rentForm' action="https://formspree.io/f/mgvwqrae" method="POST">
                    <h1 className='rentTitle'>Booking Details</h1>
                    <input type="text" value={nameform} className='namerTitle' placeholder="Your Name" name="Name" onChange={(e) => setNameform(e.target.value)} required />
                    <input type="number" value={nameph} className='phrTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e) => setNameph(e.target.value)} required />
                    <input type="email" value={namemail} className='mailrTitle' placeholder="Your Mail" name="Mail" onChange={(e) => setNamemail(e.target.value)} required />
                    <img className="rentimg1" src={hsrentimg1} alt="" /><br />
                    <input type="text" value={timeform} className='jourrTime' placeholder="Duration in Months" name="Duration in Months" onChange={(e) => setTimeform(e.target.value)} required />
                    <input type="text" value={dmyform} className='jourrDmy' placeholder="From D/M/Y" name="From D/M/Y" onChange={(e) => setDmyform(e.target.value)} required />
                    <button onClick={() => handleCheckout('price_1QF90OFxddvTxBZJMoxIE54L')} type="button" className='bookDoner1'>Pay</button>
                    <button type="submit" className='bookDoner2'>Submit</button>
                </form>
           
                <p className='midr'>Note: Submit the details and do the payment</p>
                <button type="button" className='rentback'><Link to="/malls-supermarkets" className='rentbacksub'>Back</Link></button>

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

                {/* Confirmation Modal (Are You Sure?) */}
                <Modal show={showConfirmModal} onHide={handleCloseConfirmModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Do you want to proceed with the payment?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={handleConfirmPayment}>Yes</button>
                        <button className="btn btn-success" onClick={handleCloseConfirmModal}>No</button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default Rentform1;
