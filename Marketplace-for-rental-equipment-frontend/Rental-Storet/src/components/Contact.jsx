import React from 'react'
import '../components/Contact.scss'

function Contact() {
  return (
    <div className='bgcontact'>
    <div>
    <main>
		<section class="section-contact">
			<div class="container">
				<h1>Contact Us</h1>
				<p>Fill out the form below to get in touch with one of our team members. We will try to get back to you within 48 hours. If we do not reply within that time please feel free to use the form again.</p>

				<form>
					<div class="form-group inputbg" >
						<label for="name">First Name*</label>
						<input 
							type="text" 
							name="name" 
							id="name" 
							required 
							class="form-element"
							placeholder="First Name" />
					</div>
					<div class="form-group">
						<label for="name">Last Name*</label>
						<input type='text' name="name" id="name" required class="form-element" placeholder="Last Name" />
                    </div>
                    <div class="form-group">
						<label for="phone">Phone*</label>
						<input type="tel" name="phone" id="phone" required class="form-element" placeholder="Phone" />
					</div>
                    <div class="form-group">
						<label for="email">Email*</label>
						<input type="email" name="email" id="email" required class="form-element" placeholder="Mail" />
					</div>
					<div class="form-group full">
						<label for="message">What are you looking for?</label>
						<textarea name="message" id="message" class="form-element" placeholder="Ask questions here"></textarea>
					</div>
					<div class="submit-group">
						<input type="submit" value="Send Message" />
					</div>
				</form>
			</div>
		</section>
	</main>
    </div>




	<main>
		<section class="section-contact">
			<div class="container">
				<h1>Contact Us</h1>

				</div>
		</section>
	</main>

 <div className='card-container-31'>
<div class="card text-bg-dark mb-3" style={{maxWidth: '18rem'}}>
	<div className='footer-card-title'>
  <div class="card-header">Phone</div></div>
  <div class="card-body">
    <h5 class="card-title">94628 93374<br />93578 93375</h5>
  </div>
</div>

<div class="card text-bg-dark mb-3" style={{maxWidth: '18rem'}}>
	<div className='footer-card-title'>
  <div class="card-header">Mail</div></div>
  <div class="card-body">
    <h5 class="card-title">info@havel.com</h5>
  </div>
</div>
</div>

<div className='card-container-32'>
<div class="card text-bg-dark mb-3" style={{maxWidth: '18rem'}}>
	<div className='footer-card-title'>
  <div class="card-header">Address</div></div>
  <div class="card-body">
    <h5 class="card-title">407, Sample Street, <br />Lake View, <br />Blue Star,Anna Nagar, <br />Chennai - 600 014</h5>
  </div>
</div>
</div>



















    </div>
  )
}

export default Contact