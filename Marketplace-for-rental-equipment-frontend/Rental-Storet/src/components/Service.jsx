import React from 'react'
import './Service.css'

import servimg1 from '../images/luxurious_life-1.jpg';
import servimg2 from '../images/luxurious_life-1.jpg';
import servimg3 from '../images/luxurious_life-1.jpg';

function Service(props) {
  return (
   <div className='bg'>


   <div className='tophead'>
   <h1>Our Services</h1>
   </div>

<div className='topheadq'>
<q> We focus on making each and every man live a luxurious life </q>
</div>

   <div>
   <div id="carouselExampleSlidesOnly" className="carousel slide care" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={servimg1} className='cure rounded' alt="..."/>
    <h3 className='h1t bg-success'>Luxurious House</h3>
    </div>
    <div className="carousel-item">
      <img src={servimg2} className='cure rounded' alt="..."/>
      <h3 className='h1t bg-success'>Luxurious Cars</h3>
    </div>
    <div className="carousel-item">
      <img src={servimg3} className='cure rounded' alt="..."/>
      <h3 className='h1t bg-success'>Luxurious Jewels</h3>
    </div>
  </div>
</div>
   </div>
   
   </div>
  )
}

export default Service