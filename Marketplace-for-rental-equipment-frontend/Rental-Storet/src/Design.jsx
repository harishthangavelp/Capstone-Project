import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import './Design.css'

function Design() {
  return (
    <>
<p className="center-heading">
Welcome to haVel.com
</p>

<div className="center-para">
<i><q>A place to make your life comfortable</q></i>
</div>

<div class="card-container">
<div class="card">
<img src="../src/images/luxurious_life-1.jpg" width="384px" height="240px" alt="" />
<div class="card-content">
<p>Own rental houses based on your comfortability</p>
<div class="center-button">
<a href="" class="card-button">View</a>
</div>
</div>
</div>

<div class="card">
<img src="../src/images/luxurious_life-2.jpeg" width="384px" height="240px" alt="" />
<div class="card-content">
<i><q>A place to make your life comfortable</q></i>
<div class="center-button">
<a href="" class="card-button">View</a>
</div>
</div>
</div>

<div class="card">
<img src="../src/images/luxurious_life-3.jpg" width="384px" height="240px" alt="" />
<div class="card-content">
<i><q>A place to make your life comfortable</q></i>
<div class="center-button">
<a href="" class="card-button">View</a>
</div>
</div>
</div>
    </div>
    </>
  )
}

export default Design