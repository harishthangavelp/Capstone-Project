// PaymentForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(1000); // Example amount in cents ($10.00)
  const [currency, setCurrency] = useState('usd');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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
          customerEmail: 'customer@example.com', // Example email
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
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
    </form>
</>

















  );
};

export default PaymentForm;
