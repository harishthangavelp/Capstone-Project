// Fetch client secret from backend in SCheckoutForm.js
import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SCheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [isPaymentLoading, setPaymentLoading] = useState(false);

    useEffect(() => {
        // Fetch the PaymentIntent client secret from your backend
        fetch('/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 2000 }), // Amount in cents
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || !clientSecret) {
            return;
        }

        setPaymentLoading(true);

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (error) {
            setErrorMessage(error.message);
            setPaymentLoading(false);
        } else if (paymentIntent.status === 'succeeded') {
            alert('Payment successful!');
            setPaymentLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button disabled={isPaymentLoading || !stripe}>
                {isPaymentLoading ? 'Processing...' : 'Pay'}
            </button>
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

export default SCheckoutForm;
