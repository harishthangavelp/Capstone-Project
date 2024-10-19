// App.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SCheckoutForm from '../Frontend/SCheckoutForm';

// Load your publishable key
const stripePromise = loadStripe('pk_test_51QAvR5FxddvTxBZJLQj17mka67uhpZecO86ZteNw6cNAK9hD0vyLuF0ZafyN2h89okXr3PNqHcgTVc13lefq8hA8005uGxtimW');

const StripeApp = () => {
    return (
        <Elements stripe={stripePromise}>
            <SCheckoutForm />
        </Elements>
    );
};

export default StripeApp;
