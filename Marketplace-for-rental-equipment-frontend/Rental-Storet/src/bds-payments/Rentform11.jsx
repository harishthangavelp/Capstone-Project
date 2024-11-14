import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../bds-payments/Rentform3.css';
import { Link, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Modal } from 'react-bootstrap';
import hsrbdsimg11 from '../new-images/bds1.jpg';

function Rentform11() {
  const [nameform, setNameform] = useState('');
  const [nameph, setNameph] = useState('');
  const [namemail, setNamemail] = useState('');
  const [fradform, setFradform] = useState('');
  const [toadform, setToadform] = useState('');
  const [timeform, setTimeform] = useState('');
  const [dmyform, setDmyform] = useState('');
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const stripePromise = loadStripe('pk_test_51QAvR5FxddvTxBZJLQj17mka67uhpZecO86ZteNw6cNAK9hD0vyLuF0ZafyN2h89okXr3PNqHcgTVc13lefq8hA8005uGxtimW');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleCheckout = async (priceId) => {
    const response = await fetch('https://capstone-project-140.onrender.com/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: 1, priceId }),
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

  const handlePayClick = () => {
    if (!isLoggedIn) {
      setShowLoginPopup(true);
    } else {
      setShowConfirmPopup(true);
    }
  };

  const confirmPayment = () => {
    setShowConfirmPopup(false);
    handleCheckout('price_1QFVj8FxddvTxBZJN1sxpUaV');
  };

  return (
    <div className="bdsbgbody">
      <div className="bdsbg">
        <form className="bdsForm">
          <h1 className="bdsTitle">Booking Details</h1>
          <input
            type="text"
            value={nameform}
            className="namebdsTitle"
            placeholder="Your Name"
            name="Name"
            onChange={(e) => setNameform(e.target.value)}
            required
          />
          <input
            type="number"
            value={nameph}
            className="phbdsTitle"
            placeholder="Your Phone Number"
            name="Phone Number"
            onChange={(e) => setNameph(e.target.value)}
            required
          />
          <input
            type="email"
            value={namemail}
            className="mailbdsTitle"
            placeholder="Your Mail"
            name="Mail"
            onChange={(e) => setNamemail(e.target.value)}
            required
          />
          <img className="rentbdsimg1" src={hsrbdsimg11} alt="" /> <br />
          <input
            type="text"
            value={timeform}
            className="jourbdsTime"
            placeholder="Duration in Months"
            name="Duration in Months"
            onChange={(e) => setTimeform(e.target.value)}
            required
          />
          <input
            type="text"
            value={dmyform}
            className="jourbdsDmy"
            placeholder="From D/M/Y"
            name="From D/M/Y"
            onChange={(e) => setDmyform(e.target.value)}
            required
          />
          <button type="button" onClick={handlePayClick} className="bookDonebds1">
            Pay
          </button>
          <button type="submit" className="bookDonebds2">
            Submit
          </button>
        </form>
        <p className="midbds">Note: Submit the details and do the payment</p>

        <Modal show={showLoginPopup} onHide={() => setShowLoginPopup(false)}>
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
            <button className="btn btn-secondary" onClick={() => setShowLoginPopup(false)}>
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <Modal show={showConfirmPopup} onHide={() => setShowConfirmPopup(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to proceed with the payment?</p>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger" onClick={confirmPayment}>
              Yes
            </button>
            <button className="btn btn-success" onClick={() => setShowConfirmPopup(false)}>
              No
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Rentform11;
