// Cancel.js
import React, { useEffect } from 'react';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import '../Payments-Msg/Payments.css'

function Cancel() {
  useEffect(() => {
    document.title = 'Payment Canceled';
  }, []);

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
    <div className='strbox'>
      <h1>Payment Canceled</h1>
      <p>Your payment has been canceled</p>
      </div>
    </div>

    <button type="button" className='rentback'><Link to = "/malls-supermarkets" className='strcss' >Back</Link></button>
    </>
  );
}

export default Cancel;
