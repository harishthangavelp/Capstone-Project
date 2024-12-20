import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../bds-payments/Rentform3.css';
import Navigation from '../Navigation';
import { Link, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import '../Payments-Msg/Success';
import '../Payments-Msg/Cancel';
import '../Payments-Msg/SuccessPage';
import { Modal } from 'react-bootstrap'; // Import Modal for popup
import hsrbdsimg14 from '../new-images/bds4.jpg';

function Rentform14() {
    const [nameform, setNameform] = useState('');
    const [nameph, setNameph] = useState('');
    const [namemail, setNamemail] = useState('');
    const [fradform, setFradform] = useState('');
    const [toadform, setToadform] = useState('');
    const [timeform, setTimeform] = useState('');
    const [dmyform, setDmyform] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State for login popup
    const [showConfirmPopup, setShowConfirmPopup] = useState(false); // State for confirmation popup
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Check if user is logged in
    const [username, setUsername] = useState(''); // State for username
    const stripePromise = loadStripe('pk_test_51QAvR5FxddvTxBZJLQj17mka67uhpZecO86ZteNw6cNAK9hD0vyLuF0ZafyN2h89okXr3PNqHcgTVc13lefq8hA8005uGxtimW');

    const navigate = useNavigate();

    // Check if user is logged in and has a username
    useEffect(() => {
        const storedUsername = localStorage.getItem('username'); // Assuming username is stored in localStorage
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    // Handle checkout process
    const handleCheckout = async (priceId) => {
        if (!isLoggedIn) {
            setShowPopup(true); // Show login popup if not logged in
            return;
        }
        setShowConfirmPopup(true); // Show confirmation popup to confirm payment
    };

    // Proceed to Stripe Checkout after confirmation
    const proceedToStripe = async (priceId) => {
        setShowConfirmPopup(false); // Close confirmation popup
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
            navigate('/success');
        }
    };

    // Handle form submission
    const handleRentForms = (e) => {
        e.preventDefault();
        axios.post('https://capstone-project-17.onrender.com/register', { nameform, namemail, nameph, fradform, toadform, timeform, dmyform })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    };

    const handleClosePopup = () => setShowPopup(false); // Close login popup
    const handleCloseConfirmPopup = () => setShowConfirmPopup(false); // Close confirmation popup

    return (
        <div className='bdsbgbody'>
            <div className='bdsbg'>

                <form className='bdsForm' action="https://formspree.io/f/mgvwqrae" method="POST">

                    <h1 className='bdsTitle'>Booking Details</h1>

                    <input type="text" value={nameform} className='namebdsTitle' placeholder="Your Name" name="Name" onChange={(e) => setNameform(e.target.value)} required />
                    <input type="number" value={nameph} className='phbdsTitle' placeholder="Your Phone Number" name="Phone Number" onChange={(e) => setNameph(e.target.value)} required />
                    <input type="email" value={namemail} className='mailbdsTitle' placeholder="Your Mail" name="Mail" onChange={(e) => setNamemail(e.target.value)} required />
                    <img className="rentbdsimg1" src={hsrbdsimg14} alt="" /><br />
                    <input type="text" value={timeform} className='jourbdsTime' placeholder="Duration in Months" name="Duration in Months" onChange={(e) => setTimeform(e.target.value)} required />
                    <input type="text" value={dmyform} className='jourbdsDmy' placeholder="From D/M/Y" name="From D/M/Y" onChange={(e) => setDmyform(e.target.value)} required />
                    <button type="button" onClick={() => handleCheckout('price_1QFVn3FxddvTxBZJh2mw7w37')} className='bookDonebds1'>Pay</button>
                    <button type="submit" className='bookDonebds2'>Submit</button>

                </form>
                <br />
                <p className='midbds'>Note: Submit the details and do the payment</p>

                <button type="button" className='rentbackbds'><Link to="/department-stores" className='rentbacksubbds'>Back</Link></button>

                {/* Login Popup */}
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

                {/* Confirmation Popup */}
                <Modal show={showConfirmPopup} onHide={handleCloseConfirmPopup}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Do you want to proceed with the payment?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={() => proceedToStripe('price_1QFVn3FxddvTxBZJh2mw7w37')}>Yes</button>
                        <button className="btn btn-success" onClick={handleCloseConfirmPopup}>No</button>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    );
}

export default Rentform14;
