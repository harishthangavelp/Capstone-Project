import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../bds-payments/Rentform3.css';
import Navigation from '../Navigation';
import { Link, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Modal } from 'react-bootstrap'; // Import Modal for popup
import hsrbdsimg13 from '../new-images/bds3.jpg';

function Rentform13() {
    const [nameform, setNameform] = useState('');
    const [nameph, setNameph] = useState('');
    const [namemail, setNamemail] = useState('');
    const [fradform, setFradform] = useState('');
    const [toadform, setToadform] = useState('');
    const [timeform, setTimeform] = useState('');
    const [dmyform, setDmyform] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State for login popup
    const [showConfirm, setShowConfirm] = useState(false); // State for confirmation popup
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Check if user is logged in
    const stripePromise = loadStripe('pk_test_51QAvR5FxddvTxBZJLQj17mka67uhpZecO86ZteNw6cNAK9hD0vyLuF0ZafyN2h89okXr3PNqHcgTVc13lefq8hA8005uGxtimW');

    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username'); // Check login status
        if (storedUsername) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleCheckout = async () => {
        if (!isLoggedIn) {
            setShowPopup(true); // Show login popup if user is not logged in
            return;
        }

        const priceId = 'price_1QFVllFxddvTxBZJN7B8vTne';
        const quantity = 1;
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
    };

    const handleRentForms = (e) => {
        e.preventDefault();
        axios
            .post('https://capstone-project-17.onrender.com/register', {
                nameform,
                namemail,
                nameph,
                fradform,
                toadform,
                timeform,
                dmyform,
            })
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
    };

    return (
        <div className='bdsbgbody'>
            <div className='bdsbg'>
                <form className='bdsForm' action="https://formspree.io/f/mgvwqrae" method="POST">
                    <h1 className='bdsTitle'>Booking Details</h1>
                    <input
                        type="text"
                        value={nameform}
                        className='namebdsTitle'
                        placeholder="Your Name"
                        name="Name"
                        onChange={(e) => setNameform(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        value={nameph}
                        className='phbdsTitle'
                        placeholder="Your Phone Number"
                        name="Phone Number"
                        onChange={(e) => setNameph(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        value={namemail}
                        className='mailbdsTitle'
                        placeholder="Your Mail"
                        name="Mail"
                        onChange={(e) => setNamemail(e.target.value)}
                        required
                    />
                    <img className="rentbdsimg1" src={hsrbdsimg13} alt="" />
                    <br />
                    <input
                        type="text"
                        value={timeform}
                        className='jourbdsTime'
                        placeholder="Duration in Months"
                        name="Duration in Months"
                        onChange={(e) => setTimeform(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        value={dmyform}
                        className='jourbdsDmy'
                        placeholder="From D/M/Y"
                        name="From D/M/Y"
                        onChange={(e) => setDmyform(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirm(true)} // Show confirmation popup
                        className='bookDonebds1'
                    >
                        Pay
                    </button>
                    <button type="submit" className='bookDonebds2'>
                        Submit
                    </button>
                </form>
                <br />
                <p className='midbds'>Note: Submit the details and do the payment</p>
                <button type="button" className='rentbackbds'>
                    <Link to="/department-stores" className='rentbacksubbds'>
                        Back
                    </Link>
                </button>
                {/* Login Popup Modal */}
                <Modal show={showPopup} onHide={() => setShowPopup(false)}>
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
                        <button className="btn btn-secondary" onClick={() => setShowPopup(false)}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
                {/* Confirmation Popup Modal */}
                <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to proceed with the payment?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-danger" onClick={handleCheckout}>
                            Yes
                        </button>
                        <button className="btn btn-success" onClick={() => setShowConfirm(false)}>
                            No
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default Rentform13;
