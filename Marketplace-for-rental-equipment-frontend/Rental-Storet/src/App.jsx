import React from 'react'
import './edit.css'
import 'bootstrap/dist/css/bootstrap.css';
// import img1 from '../src/images/luxurious_life-1.jpg';
// import img2 from '../src/images/luxurious_life-2.jpeg';
// import img3 from '../src/images/luxurious_life-3.jpg';

function App() {

  return (
    <>
    <div className="App">
      <h1 className='title'> Welcome to haVel.com </h1>

      <div className='center'>
      <div className="container">
      <img src='../src/images/luxurious_life-1.jpg' className="image" alt="Luxurious House" width="500px" height="370px"/>
      <img src='../src/images/luxurious_life-2.jpeg' className="image" alt="Luxurious Car"  width="500px" height="370px"/>
      <img src='../src/images/luxurious_life-3.jpg' className="image" alt="Luxurious Jewel" width="500px" height="370px"/>
      </div>
      </div>
    
    <section id='packages' class='pt-5'>
      <h2 class='text-center my-5'>haVel.com</h2>

    <div class='row'>
      <div class='col-lg'>
      <div class="card" style="width: 18rem;">
  <img src="../src/images/luxurious_life-1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
</div>
</div>
</div>

      <div class='col-lg'>
      <div class="card" style="width: 18rem;">
  <img src="../src/images/luxurious_life-2.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
</div>
</div>
</div>


<div class='col-lg'>
      <div class="card" style="width: 18rem;">
  <img src="../src/images/luxurious_life-3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
</div>
</div>
</div>
      
    </div>
    </section>

    {/* <div className="card" style="width: 18rem;">
  <img src="../src/images/luxurious_life-1.jpg" className="card-img-top" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}

</div>
    </>
  )
}

export default App
