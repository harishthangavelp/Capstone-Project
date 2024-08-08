import React, { useState,useEffect } from 'react'
import '../components/Login.css'
import logimgbg from '../images/autumn.jpg';
import Register from './Register';
import Navigation from '../Navigation';
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login(props) {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const handleLogin = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/login',{email,password})
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
  <input type="email" value={email} required  className='boxlog' id='email' onChange={(e)=> setEmail(e.target.value)} name='email' placeholder='Enter Username' />
  <input type="password" value={password} required className='boxlog' onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password' />
  <button type='submit' className='submog' data-bs-toggle="modal" data-bs-target="#exampleModal" value='Login'>Login</button>
  <h1 className='lsttxt'>If new user, Kindly register below</h1>
  <button type='submit' className='submeg'><Link to = "/register" className='topbutlogs'> Register</Link></button>
</form>





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