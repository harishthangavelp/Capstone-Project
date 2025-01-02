import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../mini-components/MSC.css';

import hsimg1 from '../new-images/msc1.jpg';
import hsimg2 from '../new-images/msc2.jpg';
import hsimg3 from '../new-images/msc3.jpg';
import hsimg4 from '../new-images/msc4.jpg';
import hsimg5 from '../new-images/msc5.jpg';

import CT1 from '../Cart-Storage/CT1';

function MSC() {
  
  const [data, setData] = useState([]); // State for storing data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for handling errors

  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const handleAddToCart = () => {
    // Add a new Cart component to the list
    setCartItems((prevCartItems) => [...prevCartItems, <CT1 key={prevCartItems.length} />]);
};

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
    <div className='housebg'>
      <h1 className='msmhead'>Malls and Shopping Centres</h1>

      <option value="vol" className='houseadd1'> No.1, Saanthi Street, Lake side road, Chennai</option>
      <option value="vol" className='houseadd2'> No.2, Vairasamy Street, Ushman Road, Chennai</option>
      <option value="vol" className='houseadd3'> No.3, Mansi Street, Long Road, Kovai</option>
      <option value="vol" className='houseadd4'> No.4, Ashok Street, Tollgate Road, Madurai</option>
      <option value="vol" className='houseadd5'> No.5, Havel Street, Coolis Road, Tenkasi</option>

      <img className='hmg-1' src={hsimg1} width={'600px'} height={'300px'} alt="Mall 1" />
      <img className='hmg-2' src={hsimg2} width={'600px'} height={'300px'} alt="Mall 2" />
      <img className='hmg-3' src={hsimg3} width={'600px'} height={'300px'} alt="Mall 3" />
      <img className='hmg-4' src={hsimg4} width={'600px'} height={'300px'} alt="Mall 4" />
      <img className='hmg-5' src={hsimg5} width={'600px'} height={'300px'} alt="Mall 5" />

{/* <button className='add-to-cart-button' onClick={handleAddToCart}>Add to Cart</button> */}
<div className="cart-items">
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        {item}
                    </div>
                ))}
            </div>


      <button type='submit' className='buths1'><Link to="/bookingdetails1" className='buthadd'>Book</Link></button>
      <button type='submit' className='buths1'><Link to="/bookingdetails2" className='buthadd1'>Book</Link></button>
      <button type='submit' className='buths1'><Link to="/bookingdetails3" className='buthadd2'>Book</Link></button>
      <button type='submit' className='buths1'><Link to="/bookingdetails4" className='buthadd3'>Book</Link></button>
      <button type='submit' className='buths1'><Link to="/bookingdetails5" className='buthadd4'>Book</Link></button>

      <div className='cardhouse1'>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "East Coast Mall"}</p>
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

      <div className='cardhouse2'>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Sunrise Mall"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1000"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹55000/₹25000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>

      <div className='cardhouse3'>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "SKS Shopping Centre"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1500"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹300000/₹10000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>

      <div className='cardhouse4'>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Rianas Shopping Centre"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "1550"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹105000/₹55000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>

      <div className='cardhouse5'>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <h3>Description</h3>
              <p>{item.Description = "Leosandy Mall"}</p>
              <h3>Furnishing:</h3><p>{item.Furnishing = "Furnished"}</p>
              <h3>Parking:</h3><p>{item.Parking = "Bike/Car"}</p>
              <h3>Sqft:</h3><p>{item.Sqft = "25000"}</p>
              <h3>Advance/Monthly:</h3><p>{"₹500000/₹50000"}</p>
              
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>

  

      <button type="button" className='rentbackhp'><Link to="/" className='rentbacksubhp'>Back to Home Page</Link></button>
    </div>
  );
}

export default MSC;