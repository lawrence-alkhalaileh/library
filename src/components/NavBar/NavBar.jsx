import { NavLink } from 'react-router-dom'
import './navbar.css'

function NavBar() {


  return (
    <nav>
      <div className='navbar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <NavLink to="/Register" className='signup'>Register</NavLink>
    </nav>
  )
}

export default NavBar