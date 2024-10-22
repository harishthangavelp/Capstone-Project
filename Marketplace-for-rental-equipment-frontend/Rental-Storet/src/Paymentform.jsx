import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(''); // Example amount in cents ($10.00)
  const [currency, setCurrency] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [paymentIntentId, setPaymentIntentId] = useState(''); // To store paymentIntentId
  const [fetchLoading, setFetchLoading] = useState(false); // Loading state for fetching data
  const [paymentIntentData, setPaymentIntentData] = useState(''); // State to store payment intent details

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const cardElement = elements.getElement(CardElement);

    try {
      const response = await fetch('https://capstone-project-26.onrender.com/api/create-payment-intent/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: customerEmail, amount, currency: currency }),
      });

      if (!response.ok) {
        throw new Error(`Server Error: ${response.statusText}`);
      }

      const data = await response.json();

      const { paymentIntent, error } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: { email: customerEmail },
        },
      });

      if (error) {
        setErrorMessage(error.message || 'Payment failed. Please try again.');
      } else if (paymentIntent) {
        setSuccessMessage('Payment successful!');
        setPaymentIntentId(paymentIntent.id); // Store paymentIntentId for later use
        console.log('Payment successful:', paymentIntent);
      }
    } catch (err) {
      console.error('Error:', err);
      setErrorMessage('Unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Function to get payment data (fetch payment info from your backend)
  const paydata = async () => {
    if (!paymentIntentId) {
      console.error('No payment intent ID available');
      return;
    }

    setFetchLoading(true); // Set loading state to true

    try {
      const response = await fetch(`https://capstone-project-26.onrender.com/api/payment-intent/${paymentIntentId}`);
      const data = await response.json();

      // Check if paymentIntent exists in the response
      if (data.paymentIntent) {
        setPaymentIntentData(data.paymentIntent); // Save the fetched payment intent data
        console.log('Payment Intent:', data.paymentIntent);
      } else {
        setErrorMessage('No payment intent found');
      }
    } catch (error) {
      console.error('Error fetching payment intent:', error);
      setErrorMessage('Failed to fetch payment intent');
    } finally {
      setFetchLoading(false); // Reset loading state
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

        <input
          type="email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          placeholder="Enter customer email"
        />
        <button type="submit" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Pay'}
        </button>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      </form>

      {/* The "Fetch Payment Info" button */}
      <button onClick={paydata} >
        {fetchLoading ? 'Fetching...' : 'Fetch Payment Info'}
      </button>

      {/* Display fetched payment intent details if available */}
      {paymentIntentData && (
        <div>
          <h2>Payment Intent Details:</h2>
          <p>ID: {paymentIntentData.id}</p>
          <p>Status: {paymentIntentData.status}</p>
          <p>Amount: {paymentIntentData.amount}</p>
          <p>Currency: {paymentIntentData.currency}</p>
          <p>Receipt Email: {paymentIntentData.receipt_email}</p>
          <p>Created At: {new Date(paymentIntentData.created * 1000).toLocaleString()}</p>
        </div>
      )}
    </>
  );
};

export default PaymentForm;