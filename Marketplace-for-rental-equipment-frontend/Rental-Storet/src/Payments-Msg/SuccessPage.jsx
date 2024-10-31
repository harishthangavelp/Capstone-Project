import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../Payments-Msg/Payments.css'
import '../Payments-Msg/Success'

const SuccessPage = () => {
    const location = useLocation();

    useEffect(() => {
        const fetchSessionData = async () => {
            const sessionId = new URLSearchParams(location.search).get('session_id'); // Extract session_id from URL
            if (!sessionId) return; // If there's no session_id, exit

            try {
                const response = await fetch(`https://capstone-project-140.onrender.com/checkout-session/${sessionId}`); // Your GET endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const sessionData = await response.json(); // Parse response JSON
                console.log(sessionData); // Handle or display session data here
            } catch (error) {
                console.error('Error fetching session data:', error);
            }
        };

        fetchSessionData(); // Fetch session data when the component mounts
    }, [location]);

    return (
        <div>
            <h1>Payment Successful!</h1>
            {/* You can display session data or any other information here */}
        </div>
    );
};

export default SuccessPage;
