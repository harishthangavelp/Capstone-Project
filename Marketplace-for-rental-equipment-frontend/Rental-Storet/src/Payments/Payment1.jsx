import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const Payment1 = () => {
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [paymentHistory, setPaymentHistory] = useState([]);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;
    
        const cardElement = elements.getElement(CardElement);
        const { error: cardError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });
    
        if (cardError) {
            setError(cardError.message);
            return;
        }
    
        setError('');
        setSuccess('');
    
        // Validate amount before sending
        if (amount <= 0) {
            setError('Please enter a valid amount.');
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:5000/create-payment-intent', {
                amount: amount, // amount in cents
                currency: 'usd',
            });
    
            if (response.data) {
                setSuccess('Payment Successful!');
                setAmount(0);
            }
        } catch (err) {
            setError(err.response ? err.response.data.error : 'Something went wrong.');
        }
    };
    

    // Function to fetch payment history
    const fetchPaymentHistory = async () => {
        try {
            const response = await axios.get('http://localhost:5000/payment-history');
            setPaymentHistory(response.data); // Assuming data is in 'data' key
        } catch (err) {
            setError(err.response.data.error);
        }
    };

    useEffect(() => {
        fetchPaymentHistory(); // Fetch payment history on component mount
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                />
                <button type="submit" disabled={!stripe}>Pay</button>
                {error && <div>{error}</div>}
                {success && <div>{success}</div>}
            </form>

            <h2>Payment History</h2>
            <button onClick={fetchPaymentHistory}>Refresh Payment History</button>
          
            <ul>
                {paymentHistory.map((payment) => (
                    <li key={payment.id}>
                        {`ID: ${payment.id}, Amount: ${payment.amount / 100} ${payment.currency}, Status: ${payment.status}`}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Payment1;
