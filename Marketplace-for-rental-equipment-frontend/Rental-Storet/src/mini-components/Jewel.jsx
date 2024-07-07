import React from 'react'
import '../mini-components/Jewel.css'

function Jewel() {
  return (
    <div className='jewelbg'>
    
    <audio src="./src/mini-images/jewel.mp3" autoplay="autoplay" loop="loop"></audio>

    <img src="./src/mini-images/jew-1.jpg" className='jewel-1' width={'450px'} height={'450px'}/>
    <img src="./src/mini-images/jew-2.png" className='jewel-2' width={'450px'} height={'450px'}/>
    <img src="./src/mini-images/jew-3.jpg" className='jewel-3' width={'450px'} height={'450px'}/>
    <img src="./src/mini-images/jew-4.jpg" className='jewel-4' width={'450px'} height={'450px'}/>
    <img src="./src/mini-images/jew-7.jpg" className='jewel-5' width={'450px'} height={'450px'}/>


<div className='goldimg-1'>
<h1>Product Code </h1><p>752C135213</p>
<h1>Size <p></p>18</h1>
<h1>Purity </h1><p>91.6</p>
<h1>Weight </h1><p>12.22g</p>
<h1>Price </h1><p>₹5555</p>
</div>

<div className='goldimg-2'>
<h1>Product Code </h1><p>749A135203</p>
<h1>Size <p></p>16</h1>
<h1>Purity </h1><p>91.6</p>
<h1>Weight </h1><p>8g</p>
<h1>Price </h1><p>₹15200</p>
</div>

<div className='goldimg-3'>
<h1>Product Code </h1><p>752A139513</p>
<h1>Size <p></p>22</h1>
<h1>Purity </h1><p>91.6</p>
<h1>Weight </h1><p>16g</p>
<h1>Price </h1><p>₹5555</p>
</div>

<div className='goldimg-4'>
<h1>Product Code </h1><p>752A225213</p>
<h1>Size <p></p>15</h1>
<h1>Purity </h1><p>91.6</p>
<h1>Weight </h1><p>20g</p>
<h1>Price </h1><p>₹22,000</p>
</div>

<div className='goldimg-5'>
<h1>Product Code </h1><p>752B138533</p>
<h1>Size <p></p>20</h1>
<h1>Purity </h1><p>91.6</p>
<h1>Weight </h1><p>8g</p>
<h1>Price </h1><p>₹34,673</p>
</div>

<button className='jewon-1'>Buy</button>
<button className='jewon-2'>Buy</button>
<button className='jewon-3'>Buy</button>
<button className='jewon-4'>Buy</button>
<button className='jewon-5'>Buy</button>

    </div>
  )
}

export default Jewel