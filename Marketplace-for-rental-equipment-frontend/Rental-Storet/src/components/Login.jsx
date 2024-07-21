import React from 'react'
import '../components/Login.css'
import logimgbg from '../images/autumn.jpg';

function Login(props) {
  function disco(){
    alert("Welcome to haVel.com"); 
    }
  return (
    <>
    <div className='bglog' src={logimgbg}></div>
    
  <form action="" className='formlog'>
  <h1>Login</h1>
  <input type="email" className='boxlog' id='email' name='email' placeholder='Enter Username' />
  <input type="password" className='boxlog' placeholder='Enter Password' />
  <button type='button' className='submog'  data-bs-toggle="modal" data-bs-target="#exampleModal" value='Login'>Login</button>
</form>



{/* <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}










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