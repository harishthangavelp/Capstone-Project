import React, { useState } from 'react'
import '../components/Login.css'
import logimgbg from '../images/autumn.jpg';
import Register from './Register';
import Navigation from '../Navigation';
import Home from './Home';
import {Link} from 'react-router-dom'
import axios from 'axios'
import bcrypt from 'bcryptjs'

function Login(props) {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [hashpass,setHashpass]=useState('');
 
  const click = () => {
   document.getElementById('entry').innerHTML = "Hi " + email;
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const hashpass = bcrypt.hashSync(password, 10)
    axios.post('https://capstone-project-17.onrender.com/register',{email,hashpass})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  
  function disco(){
    alert("Welcome to haVel.com"); 
    }

  return (
    <>
    <div className='bglog' src={logimgbg}></div>
    
  <form  className='formlog' onSubmit={handleLogin}>
  <h1 className='formheading'>Login</h1>
  <input type="email" value={email}  className='boxlog' id='email' onChange={(e)=> setEmail(e.target.value)} name='email' placeholder='Enter Username' />
  <input type="password" value={hashpass} className='boxlog' onChange={(e)=> setHashpass(e.target.value)} placeholder='Enter Password' />
  <button type='submit' onClick={click} className='submog'
   data-bs-toggle="modal" data-bs-target="#exampleModal" value='Login'><Link to = "/about" className='logsubmogfinal'>Login</Link></button>
  <h1 className='lsttxt'>If new user, Kindly register below</h1>
  <button type='submit' className='submeg'><Link to = "/register" className='topbutlogs'>Register</Link></button>
</form>

<p id='entry'></p>

<button type="button" class="homenav"><Link to = "/"  className='homedesign'>Back to Home Page</Link></button>


<div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" >
    <div className={'modal-content'} >
      <div class="modal-header popsbg" style={{border:'none'}}> 
        <p class="modal-title fs-5 logpopup" id="exampleModalLabel">Login Successful</p>
      </div>
      <div class="modal-footer bubolo" style={{border:'none',backgroundColor:'lightblue'}}>
        <button type="button" class=" bubolo logpopup" data-bs-dismiss="modal">OK</button>
        </div>
 
</div>
</div>
</div>





</> 
  )
}

export default Login