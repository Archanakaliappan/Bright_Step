import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Home from './pages/Home.jsx';  
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile.jsx';
import Assessments from './pages/Assements.jsx';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path:"/signup",
      element:<SignUp/>,

    },
    {
      path:"/home",
      element:<Home/>,  
    },
    {
      path:"/Dashboard",  
      element:<Dashboard/>,
    },
    {
      path:"/Profile",
      element:<Profile/>,
    },
    {
      path:"/Assessments",
      element:<Assessments/>,
    },

  ]);
createRoot(document.getElementById('root')).render(

  <StrictMode>
 
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
