import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navbar, Footer } from '../exports'
import { app } from '../../firebaseConfig'
import './products.css'

function Products() {
  const auth = getAuth(app)

  useEffect(onAuthStateChanged(auth, (user) => {
    if (user) {
      // const uid = user.uid;
      // console.log(uid)
      
    } else {
      // User is signed out
      // ...
    }
  }), [])

  return (
    <>
      <Navbar />
      <h1>asjkl</h1>
      <Footer />
    </>
  )
}

export default Products