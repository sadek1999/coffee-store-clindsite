import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Updatecoffee from './Components/Updatecoffee.jsx';
import Addcoffee from './Components/Addcoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
  },
  {
    path:'update',
    element: <Updatecoffee></Updatecoffee>
  },
  {
    path:'add',
    element:<Addcoffee></Addcoffee>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
