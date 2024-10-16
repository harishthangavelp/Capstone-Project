// PaymentForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(1000); // Example amount in cents ($10.00)
  const [currency, setCurrency] = useState('usd');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [source,setSource] = useState('');
  const [customerEmail,setCustomerEmail] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    if (!stripe || !elements) {
      return; // Ensure Stripe and Elements are loaded
    }

    const cardElement = elements.getElement(CardElement);

    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      setErrorMessage(`Payment failed: ${error.message}`);
      setLoading(false);
      return;
    }

    // Send the token to your server
    try {
      const response = await fetch('http://localhost:3000/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          currency,
          source: token.id, // Send the token as source
          customerEmail, // Example email
        }),
      });




      const data = await response.json();

      if (data.success) {

        setSuccessMessage('Payment succeeded! Thank you for your purchase.');
      } else {
        setErrorMessage(`Payment failed: ${data.error}`);
      }
    } catch (error) {
      setErrorMessage(`Payment error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };













  const paydata = (e) => {
    e.preventDefault()
    axios.get('https://capstone-project-26.onrender.com/payment/:id',{amount, currency, source, customerEmail})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }











  return (
    <>
    <form onSubmit={handleSubmit}>
    <h1>Payment Information</h1>
      <CardElement />
      
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount in cents"
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
      </select>
      <input
        type="email"
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
        placeholder="customer mail"
      />
      <button type="submit"  disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      <button onClick={paydata}>Update</button>
    </form>
</>

















  );
};

export default PaymentForm;
