import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import '../mini-components/Car.css'
import Navigation from '../Navigation';
import {Link} from 'react-router-dom'
// import BookingForm1 from '../car-payments/BookingForm1';

import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { compareAsc, format } from "date-fns";
import {enUS, de} from 'date-fns/locale';

import carimgshow1 from '../mini-images/hyundai-creta-removebg-preview.png';
import carimgshow2 from '../mini-images/honda-city-removebg-preview.png';
import carimgshow3 from '../mini-images/landrover-defender-removebg-preview.png';
import carimgshow4 from '../mini-images/bmw.png';
import carimgshow5 from '../mini-images/rollsroyce-removebg-preview.png';
import carbgnd from '../mini-images/carbg.png';
import carmusic from '../mini-images/carsnew.mp3';


const locales = {
    'en-US': enUS,
    'de': de,
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  
  const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
  ];
  
  

function Car() {


    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);
    
  
    function handleAddEvent() {
          
      for (let i=0; i<allEvents.length; i++){
  
          const d1 = new Date (allEvents[i].start);
          const d2 = new Date(newEvent.start);
          const d3 = new Date(allEvents[i].end);
          const d4 = new Date(newEvent.end);
  
           if (
            ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
              (d4 <= d3) )
            )
          {   
              alert("CLASH"); 
              break;
           }
  
      }
      
      
      setAllEvents([...allEvents, newEvent]);
  }

	const [house, setHouse] = useState({
        id:"1",
        bedroom:"4",
        tenant:"family",
        parking:"bike/car",
        type:"independent house",
        amount: 2000,
        });




  return (
<div className='carbg' src={carbgnd}>  


<audio src={carmusic} autoplay="autoplay" loop="loop"></audio>



<div className='car-1'>
<form action="" className='form1'>
<h1>Hyundai Creta</h1>
<h3>Model: </h3><p>Hyundai Creta</p>
<h3>Engine: </h3><p>1482 cc, 1493 cc & 1497 cc</p>
<h3>Transmission: </h3><p>
Manual & Automatic</p>
<h3>Seating Capacity: </h3><p>
5 Seater</p>
<h3>Rent: </h3><p>$35.74/day</p>
</form>
</div>

{/* <div>
<DatePicker placeholderText="Start Date" className="bookDate" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
</div> */}

<div className='imgs-1'>
 <img src={carimgshow1}  alt="" />   
 </div>
 

 <div className='car-2'>
<form action="" className='form1'>
<h1>Honda City</h1>
<h3>Model: </h3><p>Honda City</p>
<h3>Engine: </h3><p>1498 cc</p>
<h3>Transmission: </h3><p>
Manual & Automatic</p>
<h3>Seating Capacity: </h3><p>
5 Seater</p>
<h3>Rent: </h3><p>$29.77/day</p>
</form>
</div>

<div className='imgs-2'>
 <img src={carimgshow2} alt="" />   
 </div>



 <div className='car-3'>
<form action="" className='form1'>
<h1>Land Rover</h1>
<h3>Model: </h3><p>Land Rover Defender</p>
<h3>Engine: </h3><p>
1997 cc, 2996 cc, 2997 cc</p>
<h3>Transmission: </h3><p>
Manual & Automatic</p>
<h3>Seating Capacity: </h3><p>
5 Seater</p>
<h3>Rent: </h3><p>$89.31/day</p>
</form>
</div>

<div className='imgs-3'>
 <img src={carimgshow3} alt="" />   
 </div>


 
 <div className='car-4'>
<form action="" className='form1'>
<h1>BMW</h1>
<h3>Model: </h3><p>BMW 2 Series Gran Coupe</p>
<h3>Engine: </h3><p>
1995 cc & 1998 cc</p>
<h3>Transmission: </h3><p>
Manual & Automatic</p>
<h3>Seating Capacity: </h3><p>
5 Seater</p>
<h3>Rent: </h3><p>$53.59/day</p>
</form>
</div>

<div className='imgs-4'>
 <img src={carimgshow4} alt="" />   
 </div>


 
 <div className='car-5'>
<form action="" className='form1'>
<h1>Rolls-Royce</h1>
<h3>Model: </h3><p>Rolls-Royce Phantom</p>
<h3>Engine: </h3><p>
6749 cc</p>
<h3>Transmission: </h3><p>
Manual & Automatic</p>
<h3>Seating Capacity: </h3><p>
5 Seater</p>
<h3>Rent: </h3><p>$95.27/day</p>
</form>
</div>

<div className='imgs-5'>
 <img src={carimgshow5} alt="" />   
 </div>

 <button type='submit' className='submit bts11'><Link to = "/bookingdetails1" className='carnobg'>Book</Link></button>
 <button type='submit' className='submit bts22'><Link to = "/bookingdetails2" className='carnobg'>Book</Link></button>
 <button type='submit' className='submit bts33'><Link to = "/bookingdetails3" className='carnobg'>Book</Link></button>
 <button type='submit' className='submit bts44'><Link to = "/bookingdetails4" className='carnobg'>Book</Link></button>
 <button type='submit' className='submit bts55'><Link to = "/bookingdetails5" className='carnobg'>Book</Link></button>

 <button type="button" className='bookbackhp'><Link to = "/" className='bookbacksubhp' >Back to Home Page</Link></button>

</div>
  )
}

export default Car