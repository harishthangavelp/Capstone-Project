
import React from 'react'
import axios from 'axios';
import Navigation from '../Navigation';
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react';
import '../mini-components/BDS.css'

import hsimg111 from '../new-images/bds1.jpg';
import hsimg222 from '../new-images/bds2.webp';
import hsimg333 from '../new-images/bds3.jpg';
import hsimg444 from '../new-images/bds4.jpg';
import hsimg555 from '../new-images/bds5.jpg';


function BDS() {

  const [data, setData] = useState([]); // State for storing data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get('https://mocki.io/v1/0861b44f-7472-4bf5-8917-d4a59d410579');
        
        // Filter duplicates by unique 'id' property
        const uniqueData = response.data.filter((item, index, self) =>
          index === self.findIndex((t) => t.id < 2 === item.id < 5)
        );
        
        setData(uniqueData); // Set the data state with unique entries
      } catch (err) {
        setError(err.message); // Capture error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []); // Runs once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
<div className='bdsg'>  

<h1 className='bdshead'>Department Stores</h1>

  <option value="vol" className='bdsadd1'> No.11,Saanthi Street,Lake side road,Chennai</option>
  <option value="vol" className='bdsadd2'> No.12,Vairasamy Street,Ushman Road,Chennai</option>
  <option value="vol" className='bdsadd3'> No.13,Mansi Street,Long Road,Kovai</option>
  <option value="vol" className='bdsadd4'> No.14,Ashok Street,Tollgate Road,Madurai</option>
  <option value="vol" className='bdsadd5'> No.15,Havel Street,Coolis Road,Tenkasi</option>



 <img className='bdshmg-1' src={hsimg111} width={'600px'} height={'300px'} alt="" />   
 <img className='bdshmg-2' src={hsimg222} width={'600px'} height={'300px'} alt="" />   
 <img className='bdshmg-3' src={hsimg333} width={'600px'} height={'300px'} alt="" />   
 <img className='bdshmg-4' src={hsimg444} width={'600px'} height={'300px'} alt="" />   
 <img className='bdshmg-5' src={hsimg555} width={'600px'} height={'300px'} alt="" />   


 <button type='submit' className='bdsbuths1'><Link to = "/bookingdetails11" className='bdsbuthadd'>Book</Link></button>
 <button type='submit' className='bdsbuths1'><Link to = "/bookingdetails12" className='bdsbuthadd1'>Book</Link></button>
 <button type='submit' className='bdsbuths1'><Link to = "/bookingdetails13" className='bdsbuthadd2'>Book</Link></button>
 <button type='submit' className='bdsbuths1'><Link to = "/bookingdetails14" className='bdsbuthadd3'>Book</Link></button>
 <button type='submit' className='bdsbuths1'><Link to = "/bookingdetails15" className='bdsbuthadd4'>Book</Link></button>

{/* <audio src={skymusic} autoplay="autoplay" loop="loop"></audio> */}


<div className='bdscardhouse1'>
{data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Saimon Stores"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1000"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹45000/₹3800"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
</div>

<div className='bdscardhouse2'>
{data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Murugan Stores"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1000"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹150000/₹55000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
</div>

<div className='bdscardhouse3'>
{data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Dubai Stores"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1000"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹27000/₹13000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
</div>

<div className='bdscardhouse4'>
{data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Havelis Stores"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1000"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹200000/₹58000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
</div>

<div className='bdscardhouse5'>
{data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Bogan Stores"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1000"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹500000/₹75000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
</div>

<button type="button" className='bdsbackhp'><Link to = "/" className='bdsbacksubhp' >Back to Home Page</Link></button>

</div>
  )
}

export default BDS