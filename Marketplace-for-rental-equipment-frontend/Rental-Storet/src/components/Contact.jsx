import React, { useState } from 'react';
import '../components/Contact.scss';
import { Link } from 'react-router-dom';
import Hasc from '../Hasc';

function Contact() {
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [serverError, setServerError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!fname.trim()) newErrors.fname = 'First name is required.';
    if (!lname.trim()) newErrors.lname = 'Last name is required.';
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Phone number must be 10 digits.';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!text.trim()) newErrors.text = 'Message cannot be empty.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const collectData = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Simulate form submission
    
      setSuccessMessage('Your message has been sent successfully!');
      setServerError('');
      setShowPopup(true); // Show popup on success
      setEmail('');
      setFname('');
      setLname('');
      setPhone('');
      setText('');
    } catch (err) {
      console.error('Error handling form data:', err);
      setServerError('Failed to send message. Please try again later.');
      setSuccessMessage('');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <Hasc/>
    <div className="bgcontact">
      <main>
        <section className="section-contact">
          <div className="container">
            <h1>Contact Us</h1>
            <p>
              Fill out the form below to get in touch with one of our team members. We will try to get back to you within 48
              hours. If we do not reply within that time, please feel free to use the form again.
            </p>

            {serverError && <p className="error-message">{serverError}</p>}

            <form onSubmit={collectData}>
              <div className="form-group inputbg">
                <label htmlFor="fname">First Name*</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className={`form-element ${errors.fname ? 'error-input' : ''}`}
                  placeholder="First Name"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                {errors.fname && <small className="error-text">{errors.fname}</small>}
              </div>

              <div className="form-group">
                <label htmlFor="lname">Last Name*</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  className={`form-element ${errors.lname ? 'error-input' : ''}`}
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
                {errors.lname && <small className="error-text">{errors.lname}</small>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className={`form-element ${errors.phone ? 'error-input' : ''}`}
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <small className="error-text">{errors.phone}</small>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`form-element ${errors.email ? 'error-input' : ''}`}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <small className="error-text">{errors.email}</small>}
              </div>

              <div className="form-group full">
                <label htmlFor="message">What are you looking for?</label>
                <textarea
                  name="message"
                  id="message"
                  className={`form-element ${errors.text ? 'error-input' : ''}`}
                  placeholder="Ask questions here"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                {errors.text && <small className="error-text">{errors.text}</small>}
              </div>

              <div className="submit-group">
                <input type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Popup Message */}
      {showPopup && (
        <div className="popup-overlayps">
          <div className="popupps">
            <h2>🎉 Sent Successfully! 🎉</h2>
            <p>Your message has been successfully sent. We will get back to you shortly!</p>
            <button className="close-btnps" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Contact;
