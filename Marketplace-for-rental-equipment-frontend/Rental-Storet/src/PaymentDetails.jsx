import React, { useEffect, useState } from 'react';

const PaymentDetails = ({ paymentId }) => {
  const [payment, setPayment] = useState(null);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        
        const response = await fetch(`http://localhost:3000/payment/${paymentId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch payment');
        }

        const data = await response.json();
        setPayment(data.payment);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPayment();
  }, [paymentId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!payment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Payment Details</h2>
      <p>Amount: {payment.amount}</p>
      <p>Currency: {payment.currency}</p>
      <p>Stripe Charge ID: {payment.stripeChargeId}</p>
      <p>Customer Email: {payment.customerEmail}</p>
    </div>
  );
};

export default PaymentDetails;
