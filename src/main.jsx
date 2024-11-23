
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Game from './Components/Game';
import Home from './Home.jsx'

const router=createBrowserRouter(
  [
    {
      
      element: <Home/>,
    
    children : [
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/game",
        element:<Game/>
      }
    ]
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
