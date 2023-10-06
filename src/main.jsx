import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import Home from './Components/Home/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
