import React, { useState } from 'react'
import '../components/Register.css'
import regimgbg from '../images/autumn.jpg';
import Login from './Login';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs'

function Register() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [cpassword,setCpassword]=useState('')
  const [hashpass1,setHashpass1]=useState('');
  const [hashpass2,setHashpass2]=useState('');


  const handleRegister = (e) => {
    e.preventDefault()
    const hashpass1 = bcrypt.hashSync(password, 10)
    const hashpass2 = bcrypt.hashSync(cpassword, 10)
    axios.post('https://capstone-project-17.onrender.com/register',{email,hashpass1,hashpass2})
    
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }


  function discos(){
    alert("Welcome to haVel.com"); 
    }

    function check(){
 if(hashpass1.length === hashpass2.length && hashpass1.charAt === hashpass2.charAt){
  alert('Password set successful')
 }
 else{
  alert('Confirm password not matches with password')
 }
}

  return (
    <>
    <div className='bgreg' src={regimgbg}></div>
    
  <form onSubmit={handleRegister} className='formreg'>
  <h1>Register</h1>
  <input type="email" value={email}  onChange={(e)=> setEmail(e.target.value)} className='boxreg' id='email' name='email' placeholder='Enter Username' />
  <input type="password" value={hashpass1}  onChange={(e)=> setHashpass1(e.target.value)} className='boxreg' placeholder='Enter Password' />
  <input type="password" value={hashpass2}  onChange={(e)=> setHashpass2(e.target.value)} className='boxreg' placeholder='Confirm Password' />
  <button type='submit' className='submeg' onClick={check} data-bs-toggle="modal" data-bs-target="#exampleModal" value='Register'>Register</button>
</form>

<button type="button" class="homenav"><Link to = "/login" className='homedesign'>Back to Login Page</Link></button>


  <h1 className='tip1'>Tip:</h1><p className='tip2'>If password and confirm password are equal, <br /> you are registered successfully</p>


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
