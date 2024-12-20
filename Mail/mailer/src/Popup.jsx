// src/Popup.js
import React from 'react';
import '../src/Popup.css'; // Import the CSS for styling

const Popup = ({ message, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Popup;
