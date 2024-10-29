import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Service from './components/Service/Service'
import Users from './components/Users/Users'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/service',
        element:<Service/>
      },
      {
        path:'/users',
        loader: ()=> fetch('users.json'),
        element:<Users/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
