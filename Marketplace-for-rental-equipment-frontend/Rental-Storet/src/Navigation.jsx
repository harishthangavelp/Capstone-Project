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
        <Link to = "/bookingdetails"></Link>
    </nav>
    </>
  )
}

export default Navigation