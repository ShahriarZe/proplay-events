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
import Coaches from './Components/Pages/Coaches';
import Shop from './Components/Pages/Shop';
import ErrorPage from './Components/Pages/ErrorPage';
import PrivateRoute from './Routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/coaches",
        element: <PrivateRoute>
          <Coaches></Coaches>
        </PrivateRoute>
      },
      {
        path: "/shop",
        element: <PrivateRoute>
          <Shop></Shop>
        </PrivateRoute>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
