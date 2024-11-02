// src/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Popup from './PopUp'; // Import the Popup component
 // Optional: Import any additional styles for the form

const ContactForm = () => {
    const [formData, setFormData] = useState({
        toEmail: 'harishthangavelp@gmail.com',
        name: '',
        message: '',
    });
    
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/send-email', formData);
            setShowPopup(true); // Show the popup on successful send
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
        }

        // Reset form
        setFormData({
            toEmail: 'harishthangavelp@gmail.com',
            name: '',
            message: '',
        });
    };

    const closePopup = () => {
        setShowPopup(false); // Hide the popup
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            // required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            // required
                        />
                    </label>
                </div>
                <button type="submit">Send Email</button>
            </form>

            {/* Render Popup if showPopup is true */}
            {showPopup && <Popup message="Message sent successfully" onClose={closePopup} />}
        </>
    );
};

export default ContactForm;
