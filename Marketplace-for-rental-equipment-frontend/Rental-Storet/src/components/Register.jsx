import React, { useState } from 'react'
import '../components/Register.css'
import regimgbg from '../images/autumn.jpg';
import Login from './Login';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Register() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [cpassword,setCpassword]=useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    axios.post('https://capstone-project-17.onrender.com/register',{email,password,cpassword})
    
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }



  function discos(){
    alert("Welcome to haVel.com"); 
    }


  return (
    <>
    <div className='bgreg' src={regimgbg}></div>
    
  <form onSubmit={handleRegister} className='formreg'>
  <h1>Register</h1>
  <input type="email" value={email}  onChange={(e)=> setEmail(e.target.value)} className='boxreg' id='email' name='email' placeholder='Enter Username' />
  <input type="password" value={password}  onChange={(e)=> setPassword(e.target.value)} className='boxreg' placeholder='Enter Password' />
  <input type="password" value={cpassword}  onChange={(e)=> setCpassword(e.target.value)} className='boxreg' placeholder='Confirm Password' />
  <button type='submit' className='submeg' data-bs-toggle="modal" data-bs-target="#exampleModal" value='Register'>Register</button>
</form>

<button type="button" class="homenav"><Link to = "/login" className='homedesign'>Back to Login Page</Link></button>

<div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" >
    <div className={'modal-content'} >
      <div class="modal-header popregbg" style={{border:'none'}}> 
        <p class="modal-title fs-5 regpops" id="exampleModalLabel">Registered Successfully</p>
      </div>
      <div class="modal-footer buboreg" style={{border:'none',backgroundColor:'lightblue'}}>
        <button type="button" class=" buboreg regpops" data-bs-dismiss="modal">OK</button>
        </div>
 
</div>
</div>
</div>


</> 
  )
}

export default Register