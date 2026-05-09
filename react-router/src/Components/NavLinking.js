import React from 'react'
import { NavLink } from 'react-router-dom'

function NavLinking() {
  const NavStyle = ({isActive}) =>{
    return{
      fontSize: isActive? "1.25rem" : "1.2rem",
      fontWeight: isActive? "bold" : "Normal",
      // color: isActive? "Green" : "aqua"
    }
  }
  return (
    <div>
      <nav>
        <NavLink style={NavStyle} to="/">Home</NavLink>
        <NavLink style={NavStyle} to="/products">Products</NavLink>
        <NavLink style={NavStyle} to="/about">About</NavLink>
        <NavLink style={NavStyle} to="/contact">Contact</NavLink>
        <NavLink style={NavStyle} to="/users">Users</NavLink>
      </nav>
    </div>
  )
}

export default NavLinking
