import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Login, Products, Footer, About, Contact } from '../exports'
import './navbar.css'

function NavBar() {
  return (
    <BrowserRouter>
      <nav>
        <div className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Link to="/signup" className='signup'>Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default NavBar