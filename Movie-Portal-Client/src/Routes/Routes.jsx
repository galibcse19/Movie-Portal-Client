import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import AllMovies from "../Pages/AllMovies/AllMovies";
import AddMovie from "../Pages/AddMovie/AddMovie";
import MyFavorites from "../Pages/MyFavorites/MyFavorites";
import PrivateRoutes from "./PrivateRoutes";
import About from "../Pages/About/About";
import MovieDetails from "../Pages/AllMovies/MovieDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
 

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/logIn',
            element:<LogIn></LogIn>
        },
        {
          path:'/allMovies',
          element:<AllMovies></AllMovies>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/addMovie',
          element:<PrivateRoutes><AddMovie></AddMovie></PrivateRoutes>
        },
        {
          path:'/myFavorites',
          element:<PrivateRoutes><MyFavorites></MyFavorites></PrivateRoutes>
        },
        {
          path:'/movieDetails/:id',
          element:<PrivateRoutes><MovieDetails></MovieDetails></PrivateRoutes>
        }
      ]
    },
  ]);