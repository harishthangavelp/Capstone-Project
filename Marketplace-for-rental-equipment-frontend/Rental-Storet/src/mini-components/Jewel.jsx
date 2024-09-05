import React from 'react'
import '../mini-components/Jewel.css'
import axios from 'axios'
import { useState } from 'react'

import jewelsbgimg from '../mini-images/jew-5.jpg'
import jewelimgs1 from '../mini-images/jew-1.jpg'
import jewelimgs2 from '../mini-images/jew-2.png'
import jewelimgs3 from '../mini-images/jew-3.jpg'
import jewelimgs4 from '../mini-images/jew-4.jpg'
import jewelimgs5 from '../mini-images/jew-7.jpg'
import jewelmusic from '../mini-images/jewel.mp3'

function Jewel() {

  const [house, setHouse] = useState({
    id:"1",
    bedroom:"4",
    tenant:"family",
    parking:"bike/car",
    type:"independent house",
    amount: 2000,
    });

    const initPayment = (data) => {
        const options = {
            key: "rzp_test_5mjZFfAYX2kumz",
                 id: house.id,
                 bedroom: house.bedroom,
                 tenant: house.tenant,
                 parking: house.parking,
                 type: house.type,
                 amount: house.amount,
            handler: async (response) => {
                try {
                    const verifyUrl = "http://localhost:8080/api/payment/verify";
                    const { data } = await axios.post(verifyUrl, response);
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const handlePayment = async () => {
        try {
            const orderUrl = "http://localhost:8080/api/payment/orders";
            const { data } = await axios.post(orderUrl, { amount: house.amount });
            console.log(data);
            initPayment(data.data);
        } catch (error) {
            console.log(error);
        }
    };




  return (
    <div className='jewelbg' src={jewelsbgimg}>
    
    {/* <audio src={jewelmusic} autoplay="autoplay" loop="loop"></audio> */}


    <div className='templatejewel'>
	<label className='temjewel'>Search</label>
	<input id='searchInput' className='tumtum3' type="text"  />
</div>

    <img src={jewelimgs1} className='jewel-1' width={'450px'} height={'450px'}/>
    <img src={jewelimgs2} className='jewel-2' width={'450px'} height={'450px'}/>
    <img src={jewelimgs3} className='jewel-3' width={'450px'} height={'450px'}/>
    <img src={jewelimgs4} className='jewel-4' width={'450px'} height={'450px'}/>
    <img src={jewelimgs5} className='jewel-5' width={'450px'} height={'450px'}/>


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

<button className='jewon-1' onClick={handlePayment}>Buy</button>
<button className='jewon-2' onClick={handlePayment}>Buy</button>
<button className='jewon-3' onClick={handlePayment}>Buy</button>
<button className='jewon-4' onClick={handlePayment}>Buy</button>
<button className='jewon-5' onClick={handlePayment}>Buy</button>

    </div>
  )
}

export default Jewel