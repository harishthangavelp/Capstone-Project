import React, { useState } from 'react'
import '../components/Register.css'
import regimgbg from '../images/autumn.jpg';

function Register() {


  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [cpassword,setCpassword]=useState('')

  const collectData = async (e)=> {
    e.preventDefault();
    let result = await fetch('http://localhost:8000/',{
      method: 'post',
      body: JSON.stringify({email,password,cpassword}),
      headers:{
        'Content-Type': 'application/json'
      },
    });
    result = await result.json;
    localStorage.setItem("loger",JSON.stringify(result));
  }


  function discos(){
    alert("Welcome to haVel.com"); 
    }

  function check(){
if(password===cpassword){
  alert("Succcessfully registered");
  var bbon = document.getElementById("exampleModel")
  bbon.value.disabled = false;
}
else{
  alert("Your confirm password is not matching with password");
  var bbon = document.getElementById("exampleModel")
  bbon.value.disabled = true;
}

  }
  return (
    <>
    <div className='bgreg' src={regimgbg}></div>
    
  <form onSubmit={collectData} className='formreg'>
  <h1>Register</h1>
  <input type="email" value={email}  onChange={(e)=> setEmail(e.target.value)} className='boxreg' id='email' name='email' placeholder='Enter Username' />
  <input type="password" value={password}  onChange={(e)=> setPassword(e.target.value)} className='boxreg' placeholder='Enter Password' />
  <input type="password" value={cpassword}  onChange={(e)=> setCpassword(e.target.value)} className='boxreg' placeholder='Confirm Password' />
  <button type='submit' className='submeg' onClick={check} data-bs-toggle="modal" data-bs-target="#exampleModal" value='Register'>Register</button>
</form>

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