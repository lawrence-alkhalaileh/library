import { NavLink } from 'react-router-dom'
import './navbar.css'

function NavBar() {


  return (
    <nav>
      <div className='navbar'>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive ? '#4CAF50' : '',
            color: isActive ? 'white' : '',
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            backgroundColor: isActive ? '#4CAF50' : '',
            color: isActive ? 'white' : '',
          })}
        >
          About us
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            backgroundColor: isActive ? '#4CAF50' : '',
            color: isActive ? 'white' : '',
          })}
        >
          Contact
        </NavLink>
      </div>
      <NavLink to="/Register" className='signup'>Register</NavLink>
    </nav>
  )
}

export default NavBar