import React from 'react'
import '../components/Register.css'

function Register() {
  function discos(){
    alert("Welcome to haVel.com"); 
    }
  return (
    <>
    <div className='bgreg'></div>
    
  <form action="" className='formreg'>
  <h1>Register</h1>
  <input type="email" className='boxreg' id='email' name='email' placeholder='Enter Username' />
  <input type="password" className='boxreg' placeholder='Enter Password' />
  <input type="password" className='boxreg' placeholder='Confirm Password' />
  <button type='button' className='submeg'  data-bs-toggle="modal" data-bs-target="#exampleModal" value='Login'>Login</button>
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