import React, { useState } from "react";
import './Home.css'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";  
import Navigation from '../Navigation';
import {Link} from 'react-router-dom'
import { Fragment,PureComponent } from "react";
import { NavLink } from "react-router-dom";

import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { compareAsc, format } from "date-fns";
import {enUS, de} from 'date-fns/locale';

import finalimg1 from '../images/luxurious_life-1.jpg';
import finalimg2 from '../images/luxurious_life-2.jpeg';
import finalimg3 from '../images/luxurious_life-3.jpg';
import notify from '../images/not.jpg'
import userProf from '../images/user.webp'
import finalaudio1 from '../mini-images/havel.mp3';



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




function Home(props) {

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



  function display(){
    alert("Welcome to haVel.com"); 
    }

  
  return (
    <div className='bghome'>

<audio src={finalaudio1} autoplay="autoplay" loop="loop"></audio>






    <div class="centPad">
    <div class="topnav1">
      {/* <button type="button" class="flex-box btn btn-dark"><Link to = "/register" className='topbut' >Register</Link></button> */}
      {/* <button type="button" class="flex-box btn btn-dark" ><Link to = "/login" className='topbut'>Login</Link></button> */}
      <button type="button" class="flex-box btn btn-dark"><Link to = "/contact" className='topbut'>Contact</Link></button>
      <button type="button" class="flex-box btn btn-dark"><Link to = "/service" className='topbut'>Service</Link></button>
      <button type="button" class="flex-box btn btn-dark"><Link to = "/about" className='topbut'>About</Link></button>
      <button type="button" class="flex-box btn btn-dark" ><Link to = "/" className='topbut'>Home</Link></button>
    </div>
    
    <p id='entry'></p>

    <div>
    <NavLink to = "/login" className='topbut'><img src={userProf} className='usprof' width={'45px'} height={'45px'} /></NavLink>
    </div>

    <div className="hide"></div>
    
    <div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog"  >
        <div class="modal-content homepopbgc" style={{backgroundColor:'beige'}} >
          <div class="modal-header" style={{border:'none'}}> 
            <p class="modal-title fs-5 pophom popdirhome">www.havel.com wants to</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
       
    
          <img src={notify} className='pophome-img' width={'20px'} height={'25px'} />
    
          <p class="modal-title fs-5" className='hpop-txt' id="exampleModalLabel">Show notifications </p>
     
          <div class="modal-footer" style={{border:'none'}}>
            <button type="button" class=" btn btn-secondary bu1ho" data-bs-dismiss="modal">Allow</button>
            <button type="button" class=" btn btn-secondary bu1ho" data-bs-dismiss="modal">Block</button>
          </div>
        </div>
      </div>
    </div>
    


    <div className='dispNeed'>
<img src={notify} className='dispdisp' style={{mixBlendMode:'multiply'}} width={'20px'} height={'20px'} />
<p className='dispNeedTxt'>Get notified</p>
</div>




    <button className='hometoptop'><h3 class="homelogove" data-bs-toggle="modal" data-bs-target="#exampleModal">haVel.com</h3></button>
    </div>
    
   

    <div class="card-container">
    <div class="homecard">
    <img src={finalimg1} style={{objectFit:'cover',width:'100%'}} width="384px" height="240px" alt="" />
    <div class="card-content">
    <p>Own rental houses based on your comfortability</p>
    <i><q class="desc">True luxury is being able to own your time – to be able to take a walk, sit on your porch, read the paper, not take the call, not be compelled by obligation</q></i>
    <br /><br />
    <div class="center-button">
    <a href="" class="card-button"><Link to = "/housedetails" className='topbut'>Click to view</Link></a>
  
    </div>
    </div>
    </div>
    
    <div class="homecard">
    <img src={finalimg2} style={{objectFit:'cover',width:'100%'}} width="384px" height="240px" alt="" />
    <div class="card-content">
    <p>Own luxurious cars available with brand new models</p>
    <i><q class="desc">Driving a luxury car that is the pinnacle of a successful lifestyle," "living the good life in my luxury car</q></i>
    <br /><br /><br />
    <div class="center-button">
    <a href="" class="card-button"><Link to = "/cardetails" className='topbut'>Click to view</Link></a>
    
    </div>
    </div>
    </div>
    
    <div class="homecard">
    <img src={finalimg3} style={{objectFit:'cover',width:'100%'}} width="384px" height="240px" alt="" />
    <div class="card-content">
    <p>Own fashionable jewels with latest brand new collections</p>
    <i><q class="desc">Don’t find you need to wear jewellery for others but for your own pleasure. It feels wonderful</q></i>
    <br /><br /><br />
    <div class="center-button">
    <a href="" class="card-button"><Link to = "/jeweldetails" className='topbut'>Click to view</Link></a>
    </div>
    </div>
    </div>
    </div>
    <br /><br /><br />
    
    
    <h1 className='abt'> About Us </h1>
    
    <p className='abtdesc'> 
      <q>A place to make your life comfortable</q><br />
    
      havel.com provides you a luxurious life by making you own houses, cars and jewels <br />
    
      Our products are worthy, valuable and cheap
    </p>
    
    <p className='abtdesc'> 
      <q>Man can live without chrome, but can't live without a house</q><br />
      <q>Man can live without bar, but can't live without a car</q><br />
      <q>Man can live without fuel, but can't live without a jewel</q>
    </p>
    
    <div class="footer-last">
    <p>Copyright © 2024 haVel.com. All Rights Reserved</p>
    </div>



    <div className='dispNeed'>
<img src={notify} className='dispdisp' style={{mixBlendMode:'multiply'}} width={'20px'} height={'20px'} />
<p className='dispNeedTxt'>Get notified</p>
</div>


            <div>
                <input type="text" placeholder="Add Title" className="calendarTitle" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" className="calendarStart" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" className="calendarEnd" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }}  className="calendarButton" onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} className="calendarMain" events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "20px" }} />


        </div>
        
  )
}

export default Home

