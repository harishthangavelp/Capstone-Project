import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const StripeCheckout = () => {
    // Load the Stripe publishable key
    const stripePromise = loadStripe('pk_test_51QAvR5FxddvTxBZJLQj17mka67uhpZecO86ZteNw6cNAK9hD0vyLuF0ZafyN2h89okXr3PNqHcgTVc13lefq8hA8005uGxtimW'); // Replace with your actual publishable key

    const handleCheckout = async (priceId) => {
        const quantity = 1; // Set the quantity as needed

        const response = await fetch('http://localhost:3000/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity, priceId }) // Include price ID in the request body
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            alert(`Error: ${errorMessage}`); // Alert the error message
            return;
        }

        const session = await response.json();
        const stripe = await stripePromise; // Ensure the Stripe instance is loaded
        const result = await stripe.redirectToCheckout({ sessionId: session.id });

        if (result.error) {
            // Inform the customer that there was an error
            alert(result.error.message);
        }
    };

    return (
        <div>
            <h1>Stripe Checkout Example</h1>
            {/* Product buttons */}
            <button onClick={() => handleCheckout('price_1QEVO5FxddvTxBZJV9BX1A0X')}>Product 1</button>
            <button onClick={() => handleCheckout('price_1QEYVpFxddvTxBZJd1J6LJUu')}>Product 2</button>
            <button onClick={() => handleCheckout('price_1QEVO5FxddvTxBZJV9BX1A0Y')}>Product 3</button>
            {/* Add more products as necessary */}
        </div>
    );
};

// Export the StripeCheckout component
export default StripeCheckout;
