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
    loader:()=>fetch(`http://localhost:5000/coffee`)
  },
  {
    path:'update/:id',
    element: <Updatecoffee></Updatecoffee>,
  loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
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
