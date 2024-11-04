import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Logre.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Modal } from 'react-bootstrap'; // Import Modal from react-bootstrap

const Logre = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [modalMessage, setModalMessage] = useState(''); // State for modal message

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setModalMessage("Passwords do not match!");
            setShowModal(true);
            return;
        }

        // Send registration request to backend
        try {
            const response = await fetch('http://localhost:5555/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                try {
                    const errorData = JSON.parse(errorText);
                    setModalMessage(errorData.message);
                } catch (parseError) {
                    setModalMessage('An unexpected error occurred.');
                }
                setShowModal(true);
                return;
            }

            setModalMessage("Registration successful! Please log in.");
            setShowModal(true);
            setFormData({ username: '', password: '', confirmPassword: '' });
            setIsRegistered(true); 

        } catch (error) {
            console.error('Registration error:', error);
            setModalMessage('An error occurred. Please try again later.');
            setShowModal(true);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        // Send login request to backend
        try {
            const response = await fetch('http://localhost:5555/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                }),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Login error response:', errorText);
                const errorData = await response.json();
                setModalMessage(errorData.message || "Invalid username or password.");
                setShowModal(true);
                return;
            }
    
            // If login is successful
            const data = await response.json();
            const expirationTime = new Date().getTime() + 60 * 60 * 1000; // Set expiration time to 1 hour
            localStorage.setItem('username', data.username); // Save username to local storage
            localStorage.setItem('expirationTime', expirationTime); // Save expiration time to local storage
    
            setModalMessage(`Welcome ${data.username}! You have successfully logged in.`);
            setShowModal(true);
            setTimeout(() => {
                navigate('/', { state: { welcomeMessage: modalMessage } });
            }, 2000);
        } catch (error) {
            console.error('Login error:', error);
            setModalMessage('An error occurred during login. Please try again later.');
            setShowModal(true);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('expirationTime');
        setFormData({ username: '', password: '', confirmPassword: '' }); // Clear form data
        setModalMessage('You have successfully logged out.');
        setShowModal(true);
        setTimeout(() => {
            navigate('/'); // Redirect to home page after logout
        }, 2000);
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="auth-containerl">
            <div className="form-wrapperl">
                <h2 className="h2l">{isRegistered ? "Login" : "Register"}</h2>
                <form className="forml" onSubmit={isRegistered ? handleLogin : handleRegister}>
                    <div className="input-groupl">
                        <label className="labell">Username:</label>
                        <input
                            type="text"
                            className="inputl"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-groupl">
                        <label className="labell">Password:</label>
                        <input
                            type="password"
                            className="inputl"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {!isRegistered && (
                        <div className="input-groupl">
                            <label className="labell">Confirm Password:</label>
                            <input
                                type="password"
                                className="inputl"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="submit-btnl">
                        {isRegistered ? "Login" : "Register"}
                    </button>
                </form>
                <button className="toggle-btnl" onClick={() => setIsRegistered(!isRegistered)}>
                    {isRegistered ? "Need to Register?" : "Already Registered? Log In"}
                </button>
                <Link to="/" className="back-btnl">
                    Back to Home Page
                </Link>
                {/* Logout Button */}
                <button className="logout-btnl" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            {/* Modal for messages */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#dff0d8', color: '#3c763d' }}>
                    <h4>{modalMessage}</h4>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Logre;
