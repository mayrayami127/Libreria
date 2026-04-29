import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

 

const router = createBrowserRouter([
{
  path: "/",
  element: <Login />, 
},
{
  path: "/Signup",
  element: <Signup />, 
},
{
  path: "/",
  element: <ProtectedRoute />, 
  children: [
    {
       
      path: "/Dashboard",
      element: <Dashboard />,
    }
  ]
},
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
