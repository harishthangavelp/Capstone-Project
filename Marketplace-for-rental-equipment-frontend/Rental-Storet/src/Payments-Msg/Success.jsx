// Success.js
import React from 'react';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import '../Payments-Msg/Payments.css'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import '../Payments-Msg/SuccessPage'

function Success() {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
     <div className='strbox'>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase</p>
     
      </div>
    </div>

    <button type="button" className='rentback'><Link to = "/malls-supermarkets" className='strcss' >Back</Link></button>
    </>
  );
}

export default Success;
