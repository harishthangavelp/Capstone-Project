import React from 'react'
import './Service.css'
import {Link} from 'react-router-dom'
import Navigation from '../Navigation';

import servimg1 from '../new-images/msc1.jpg';
import servimg2 from '../new-images/bds1.jpg';
import servimg3 from '../new-images/whb5.jpg';

function Service(props) {
  return (
   <div className='bg'>


   <div className='tophead'>
   <h1>Our Services</h1>
   </div>

<div className='topheadq'>
<q> We focus on making each and every man live a luxurious life </q>
</div>




<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={servimg1} className='cure' alt="..."/>
      <h3 className='h1t bg-success'>Malls and Shopping Centres</h3>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={servimg2} className='cure' alt="..."/>
      <h3 className='h2t bg-success'>Department Stores</h3>
    </div>
    <div class="carousel-item">
      <img src={servimg3} className='cure' alt="..."/>
      <h3 className='h3t bg-success'>Warehouse Retailers</h3>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<button type="button" className="bbb btn btn-dark"><Link to="/" className='servbbb'>Back to Home Page</Link></button>

   
   </div>
  )
}

export default Service