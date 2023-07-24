import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main';
import AuthProviders from './Login and Register/Provider';
import Login from './Login and Register/Login';
import Register from './Login and Register/Register';
import Home from './Pages/Home/Home';
import AddComic from './Pages/Addmission/AddComic';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AllComics from './Pages/AllComics/AllCollege';
import Details from './Pages/AllComics/Details';

import ErrorPage from './ErrorPage/ErrorPage';

import Addmission from './Pages/Addmission/Addmission';
import Mycollege from './Pages/MyCollege/Mycollege';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path : "/allColleges",
        element : <AllComics></AllComics> ,
        // loader : () => fetch(`http://localhost:5000/comics`) 
      } ,
      {
        path : "/details/:id",
        element : <PrivateRoute><Details></Details></PrivateRoute> ,
        loader : ({params}) => fetch(`http://localhost:5000/colleges/${params.id}`)
        
      },
      {
        path: "/addmission",
        element: <Addmission></Addmission>
      },
      {
        path: "/addmission/:id",
        element: <AddComic></AddComic>
      },
      {
        path: "/myCollege",
        element : <Mycollege></Mycollege>
      },
  

      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    

    ]
  },
  {
    path : "*" ,
    element : <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
