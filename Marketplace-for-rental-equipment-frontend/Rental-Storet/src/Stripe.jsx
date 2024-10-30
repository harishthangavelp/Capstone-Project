import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import StripeCheckout from './Stripecheckout';
import { loadStripe } from '@stripe/stripe-js';

// Load your publishable key
const stripePromise = loadStripe('pk_test_51QAvR5FxddvTxBZJLQj17mka67uhpZecO86ZteNw6cNAK9hD0vyLuF0ZafyN2h89okXr3PNqHcgTVc13lefq8hA8005uGxtimW');

const Stripe = () => {
    return (
        <Elements stripe={stripePromise}>
            <StripeCheckout />
        </Elements>
    );
};

export default Stripe;
