import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import './navbar.css';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
      await signOut(auth)
  };

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

      {isLoggedIn ? (
        <button onClick={handleLogout} className='signup'>
          Logout
        </button>
      ) : (
        <NavLink to="/login" className='signup'>
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default NavBar;