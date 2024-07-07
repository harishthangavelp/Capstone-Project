import React from 'react'
import './Service.css'

function Service() {
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
    <img src="../src/images/luxurious_life-1.jpg" className='cure rounded' alt="..."/>
    <h3 className='h1t bg-success'>Luxurious House</h3>
    </div>
    <div className="carousel-item">
      <img src="../src/images/luxurious_life-2.jpeg" className='cure rounded' alt="..."/>
      <h3 className='h1t bg-success'>Luxurious Cars</h3>
    </div>
    <div className="carousel-item">
      <img src="../src/images/luxurious_life-3.jpg" className='cure rounded' alt="..."/>
      <h3 className='h1t bg-success'>Luxurious Jewels</h3>
    </div>
  </div>
</div>
   </div>
   
   </div>
  )
}

export default Service