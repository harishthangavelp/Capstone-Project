import React from 'react'
import axios from 'axios';
import Navigation from '../Navigation';
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react';
import '../mini-components/WHR.css'

import hsimg11 from '../new-images/whb1.jpg';
import hsimg22 from '../new-images/whb2.jpg';
import hsimg33 from '../new-images/whb3.jpg';
import hsimg44 from '../new-images/whb4.jpg';
import hsimg55 from '../new-images/whb5.jpg';


function WHR() {

  const [data, setData] = useState([]); // State for storing data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get('https://mocki.io/v1/61148282-df82-4f6c-92b2-a52a19ad344d');
        
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
<div className='whbg'>  

<h1 className='whrhead'>Warehouse Retailers</h1>

  <option value="vol" className='whradd1'> No.6,Saanthi Street,Lake side road,Chennai</option>
  <option value="vol" className='whradd2'> No.7,Vairasamy Street,Ushman Road,Chennai</option>
  <option value="vol" className='whradd3'> No.8,Mansi Street,Long Road,Kovai</option>
  <option value="vol" className='whradd4'> No.9,Ashok Street,Tollgate Road,Madurai</option>
  <option value="vol" className='whradd5'> No.10,Havel Street,Coolis Road,Tenkasi</option>



 <img className='whrhmg-1' src={hsimg11} width={'600px'} height={'300px'} alt="" />   
 <img className='whrhmg-2' src={hsimg22} width={'600px'} height={'300px'} alt="" />   
 <img className='whrhmg-3' src={hsimg33} width={'600px'} height={'300px'} alt="" />   
 <img className='whrhmg-4' src={hsimg44} width={'600px'} height={'300px'} alt="" />   
 <img className='whrhmg-5' src={hsimg55} width={'600px'} height={'300px'} alt="" />   


 <button type='submit' className='whrbuths1'><Link to = "/bookingdetails6" className='whrbuthadd'>Book</Link></button>
 <button type='submit' className='whrbuths1'><Link to = "/bookingdetails7" className='whrbuthadd1'>Book</Link></button>
 <button type='submit' className='whrbuths1'><Link to = "/bookingdetails8" className='whrbuthadd2'>Book</Link></button>
 <button type='submit' className='whrbuths1'><Link to = "/bookingdetails9" className='whrbuthadd3'>Book</Link></button>
 <button type='submit' className='whrbuths1'><Link to = "/bookingdetails10" className='whrbuthadd4'>Book</Link></button>

{/* <audio src={skymusic} autoplay="autoplay" loop="loop"></audio> */}


<div className='whrcardhouse1'>
{data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Youvariz Warehouse"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1000"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹50000/₹20000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
</div>

<div className='whrcardhouse2'>
{data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Storingly Warehouse"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1000"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹50000/₹20000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
</div>

<div className='whrcardhouse3'>
{data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Rolex Warehouse"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1000"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹50000/₹20000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
</div>

<div className='whrcardhouse4'>
{data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Cargofy Warehouse"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1000"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹50000/₹20000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
</div>

<div className='whrcardhouse5'>
{data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Chipkot Warehouse"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1000"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹50000/₹20000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
</div>

<button type="button" className='whrbackhp'><Link to = "/" className='whrbacksubhp' >Back to Home Page</Link></button>

</div>
  )
}

export default WHR