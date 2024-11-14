import React from 'react';
import '../components/About.css';
import Hasc from '../Hasc';

function About() {
  return (
    <>
    <Hasc/>
    
    <div className="about-container">
      <h1 className="abt">About Us</h1>
      <p className="abtdesc">
        <q>A place to make your life comfortable</q>
        <br />
        havel.com provides you a luxurious life by making you own stores like malls & shopping centres, department stores, and warehouse retailers.
        <br />
        Our stores are worthy, valuable, and cheap.
      </p>
      <p className="abtdesc">
        <q>The key to success is to make a store, attract people, and provide their needs.</q>
        <br />
      </p>
    </div>
    </>
  );
}

export default About;
