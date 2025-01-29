import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Register, Products, Footer, About, Contact, Login } from './components/exports'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Products />,
      errorElement: <div>404 Not Found !</div>
    },
    {
      path: '/Register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/Footer',
      element: <Footer />,
    },
    {
      path: '/About',
      element: <About />,
    },
    {
      path: '/Contact',
      element: <Contact />,
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
