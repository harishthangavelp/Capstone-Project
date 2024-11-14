import React, { useState, useEffect } from 'react';
import './Service.css';
import Hasc from '../Hasc';

import servimg1 from '../new-images/msc1.jpg';
import servimg2 from '../new-images/bds1.jpg';
import servimg3 from '../new-images/whb5.jpg';

function Service() {
  // State to track the current slide index
  const [activeSlide, setActiveSlide] = useState(0);

  // Array of descriptions
  const descriptions = [
    "These are large commercial establishments offering a wide variety of retail stores, entertainment options, and dining experiences all under one roof, making them a popular destination for shoppers and families.",
    "These are retail outlets offering a broad range of products categorized into sections such as clothing, electronics, home goods, and beauty products, providing a one-stop shopping experience for customers.",
    "These stores focus on selling goods in bulk at discounted prices, typically catering to businesses and large families. They often operate in large warehouse-like facilities."
  ];

  // Automatically update activeSlide based on the carousel's interval
  useEffect(() => {
    const carousel = document.querySelector('#carouselExampleInterval');
    const updateSlide = () => {
      const activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).findIndex(item =>
        item.classList.contains('active')
      );
      setActiveSlide(activeIndex);
    };

    carousel.addEventListener('slid.bs.carousel', updateSlide);

    return () => {
      carousel.removeEventListener('slid.bs.carousel', updateSlide);
    };
  }, []);

  return (
    <>
      <Hasc />
      <div className="bg">
        {/* Heading Section */}
        <div className="tophead">
          <h1>Our Services</h1>
        </div>

        {/* Quote Section */}
        <div className="topheadq">
          <q>We focus on making each and every man live a luxurious life</q>
        </div>

        {/* Carousel Section */}
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={servimg1} className="cure" alt="Malls and Shopping Centres" />
              <h3 className="h1t" style={{whiteSpace:'nowrap'}}>Malls and Shopping Centres</h3>
            </div>
            <div className="carousel-item">
              <img src={servimg2} className="cure" alt="Department Stores" />
              <h3 className="h2t">Department Stores</h3>
            </div>
            <div className="carousel-item">
              <img src={servimg3} className="cure" alt="Warehouse Retailers" />
              <h3 className="h3t">Warehouse Retailers</h3>
            </div>
          </div>

          {/* Controls */}
 
        </div>

        {/* Description Section */}
        <div className="description">
          <p>{descriptions[activeSlide]}</p>
        </div>
      </div>
    </>
  );
}

export default Service;
