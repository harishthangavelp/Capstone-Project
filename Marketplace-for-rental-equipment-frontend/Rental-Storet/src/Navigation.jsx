import React from 'react'
import { Link } from 'react-router-dom' 

function Navigation() {
  return (
    <>
    <nav>
        <Link to = "/" ></Link>
        <Link to = "/about"></Link>
        <Link to = "/service" ></Link>
        <Link to = "/contact" ></Link>
        <Link to = "/login" ></Link>
        <Link to = "/register"></Link>
        <Link to = "/housedetails"></Link>
        <Link to = "/cardetails"></Link>
        <Link to = "/jeweldetails"></Link>

        <Link to = "/bookingdetails1"></Link>
        <Link to = "/bookingdetails2"></Link>
        <Link to = "/bookingdetails3"></Link>
        <Link to = "/bookingdetails4"></Link>
        <Link to = "/bookingdetails5"></Link>

        <Link to = "/bookingdetails6"></Link>
        <Link to = "/bookingdetails7"></Link>
        <Link to = "/bookingdetails8"></Link>
        <Link to = "/bookingdetails9"></Link>
        <Link to = "/bookingdetails10"></Link>


    </nav>
    </>
  )
}

export default Navigation