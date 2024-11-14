import React, { useState, useEffect } from "react";
import './Home.css';
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import { RotatingLines } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import finalimg1 from '../new-images/msc1.jpg';
import finalimg2 from '../new-images/whb5.jpg';
import finalimg3 from '../new-images/bds1.jpg';
import cart from '../images/pink-cart.png'
import notify from '../images/not.jpg';
import userProf from '../images/door-removebg-preview.png';


function Home(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [username, setUsername] = useState('');
  const hasSeenModal = localStorage.getItem('hasSeenWelcomeModal');
  const [showLoginModal, setShowLoginModal] = useState(false); 
  const [loading, setLoading] = useState(false); // Spinner state

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const expirationTime = localStorage.getItem('expirationTime');

    if (storedUsername && expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime < expirationTime) {
        setUsername(storedUsername);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('expirationTime');
      }
    }

    if (!hasSeenModal) {
      setShowWelcomeModal(true);
      localStorage.setItem('hasSeenWelcomeModal', 'true');
    }
  }, [location]);

  const handleCloseWelcomeModal = () => setShowWelcomeModal(false);
  const handleCloseLoginModal = () => setShowLoginModal(false); 


  
  const handleLogin = () => {
    // Logic to handle login (e.g., redirect to login page)
    const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour
    localStorage.setItem('username', username);
    localStorage.setItem('expirationTime', expirationTime.toString());
    setUsername(username);
  };

  const handleLogout = () => {
    // Logic to handle logout (e.g., clear username, expiration time, etc.)
    localStorage.removeItem('username');
    localStorage.removeItem('expirationTime');
    setUsername('');
    
  };

  const handleLoginRedirect = () => {
    setTimeout(() => {
      navigate("/login");
    }, 3000); // Redirect to the login page after 3 seconds
  };

  
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginButton,setShowLoginButton] = useState();
 
  const handleClickToView = (service) => {
    if (username) {
      setLoading(true); // Start spinner
      setTimeout(() => {
        navigate(`/${service}`); // Navigate to the selected service
        setLoading(false); // Stop spinner after navigation
      }, 3000); // Simulate loading time
    } else {
      setShowLoginModal(true);
    }
  };
  
  const toggleDoor = () => {
    setIsOpen(true); // Open the door
    setShowLoginButton(false); 
    
    setTimeout(() => {
      navigate("/login"); // Navigate to the login page after 3 seconds
    }, 1000);
  };

  return (
    <>
   
    <div className="door-container">
   
      <div className={`door ${isOpen ? "open" : "closed"}`}>
        
        <div className="handle">
       
        </div>
      </div>
    
   
      {username ? (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="dbutton" onClick={()=>{
            handleLoginRedirect();
            toggleDoor();
          }}>
            Login
          </button>
        )}
     
      
    
   

    <div className="bghome">
      {/* Welcome Modal */}
      <Modal show={showWelcomeModal} onHide={handleCloseWelcomeModal} centered>
        <Modal.Header style={{ backgroundColor: '#ffdce0', justifyContent: 'center' }}>
          <Modal.Title style={{ color: '#ff3a5c', textAlign: 'center', fontWeight: 'bold', width: '100%' }}>
            Welcome!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#ffe6ea', color: '#333', textAlign: 'center' }}>
          <p style={{ fontSize: '18px' }}>Welcome to <strong>haVel Stores</strong></p>
        </Modal.Body>
        <Modal.Title style={{ color: '#ff5e78', backgroundColor: '#ffdce0', fontWeight: 'bold', width: '100%' }}>
          <button className="thankyou-button" style={{textAlign:'center'}} onClick={handleCloseWelcomeModal}>ThankYou</button>
        </Modal.Title>
      </Modal>

      <Modal show={showLoginModal} onHide={handleCloseLoginModal} centered>
  <Modal.Header style={{ backgroundColor: '#fce4ec', justifyContent: 'center' }}>
    <Modal.Title style={{ color: '#ff3a5c', fontWeight: 'bold', textAlign: 'center', width: '100%' }}>
      Login to View
    </Modal.Title>
    <button 
      onClick={handleCloseLoginModal} 
      style={{
        background: 'none',
        border: 'none',
        color: '#ff3a5c',
        cursor: 'pointer',
        fontSize: '18px',
        position: 'absolute',
        right: '10px',
        top: '10px',
      }}
    >
      Close
    </button>
  </Modal.Header>
  <Modal.Body style={{ backgroundColor: '#ffebee', color: '#333', textAlign: 'center' }}>
    <p>You need to be logged in to view this content. Please login first.</p>
  </Modal.Body>
  <Modal.Footer style={{ backgroundColor: '#fce4ec' }}>
    <button className="thankyou-button" onClick={handleLoginRedirect}>Login</button>
  </Modal.Footer>
</Modal>


      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to haVel.com</h1>
        <p>Your one-stop solution for retail and services</p>
        <button className="cta-button">
          <Link to="/about">Learn More</Link>
        </button>
      </div>


      {/* Top Navigation */}
      <div className="topnav1">
        <NavLink to="/" className="topbut">Home</NavLink>
        <hr className="nav-divider" />
        <NavLink to="/about" className="topbut">About</NavLink>
        <hr className="nav-divider" />
        <NavLink to="/service" className="topbut">Service</NavLink>
        <hr className="nav-divider" />
        <NavLink to="/contact" className="topbut">Contact</NavLink>
        <hr className="nav-divider" />
        <NavLink to="/login" className="topbut">Login</NavLink>
        <hr className="nav-divider" />
                 {/* Cart Image - OnClick to Navigate to Cart Page */}
                 {/* <img
              src={cart}
              style={{ width: '70px' }}
              alt="Cart"
              onClick={() => navigate('/cart')} // Navigate to /cart when clicked
              className="cart-image"
            /> */}
          </div>
     
{/* 583 428 */}
 {/* Spinner */}
 {loading && (
          <div className="spinner-overlay">
            <RotatingLines
              strokeColor="pink"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        )}

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Top Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <img src={finalimg1} alt="Malls and Supermarkets" />
            <p>Malls and Supermarkets</p>
            <button className="service-link" onClick={() => handleClickToView('malls-supermarkets')}>
                Click to View
              </button>
          </div>
          <div className="service-item">
            <img src={finalimg2} alt="Warehouse Retailers" />
            <p>Warehouse Retailers</p>
            <button className="service-link" onClick={() => handleClickToView('warehouse-retailers')}>
                Click to View
              </button>
          </div>
          <div className="service-item">
            <img src={finalimg3} alt="Department Stores" />
            <p>Department Stores</p>
            <button className="service-link" onClick={() => handleClickToView('department-stores')}>
                Click to View
              </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-item">
          <p>"haVel.com is amazing! It has everything I need in one place"</p>
          <span>- Alex, User</span>
        </div>
        <div className="testimonial-item">
          <p>"Super easy to navigate and find services"</p>
          <span>- Maria, User</span>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <h2>Join Our Community!</h2>
        <p>Sign up today and enjoy exclusive benefits</p>
        <button className="cta-button">
          <Link to="/login">Get Started</Link>
        </button>
      </div>

      {/* Footer */}
      <div className="footer-last">
        <p>Copyright © 2024 haVel.com. All Rights Reserved</p>
      </div>

      {/* Welcome User */}
      {username && <span className="username-display">  {username}</span>}
      
    </div>
     </div>
    </>
  );
}

export default Home;
