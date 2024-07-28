import React, { useState } from 'react'
import '../components/Login.css'
import logimgbg from '../images/autumn.jpg';
import Register from './Register';

function Login(props) {

// const history = useNavigate();
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const collectData = async (e)=> {
    e.preventDefault();
    let result = await fetch('http://localhost:8000/',{
      method: 'post',
      body: JSON.stringify({email,password}),
      headers:{
        'Content-Type': 'application/json'
      },
    });
    result = await result.json;
    localStorage.setItem("loger",JSON.stringify(result));
  }


  function disco(){
    alert("Welcome to haVel.com"); 
    }

  return (
    <>
    <div className='bglog' src={logimgbg}></div>
    
  <form onSubmit={collectData} className='formlog'>
  <h1>Login</h1>
  <input type="email" value={email}  onChange={(e)=> setEmail(e.target.value)} className='boxlog' id='email' name='email' placeholder='Enter Username' />
  <input type="password" value={password}  onChange={(e)=> setPassword(e.target.value)} className='boxlog' placeholder='Enter Password' />
  <button type='submit' className='submog' data-bs-toggle="modal" data-bs-target="#exampleModal" value='Login'>Login</button>
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