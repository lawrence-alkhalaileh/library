import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Navbar, Footer } from '../exports'
import { app } from '../../firebaseConfig'
import './products.css'
import axios from 'axios';

function Products() {
  const [data, setData] = useState(null)
  const auth = getAuth(app)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const response = await axios.get(
            "https://first-react-project-46279-default-rtdb.firebaseio.com/products.json"
          );
          const responseData = response.data || {};
          console.log(responseData)
          // setData(responseData)
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      } else {
        setData('you should be logged in to see the data')
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />
      <div>qqqqqq</div>
      <Footer />
    </>
  )
}

export default Products