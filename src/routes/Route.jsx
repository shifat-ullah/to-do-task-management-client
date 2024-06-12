import Home from '../components/pages/home/home/Home';
import LogIn from '../components/shared/LogIn';
import SignUp from '../components/shared/SignUp';
import MainLayout from './../layout/MainLayout';
import {createBrowserRouter} from "react-router-dom";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <LogIn />,
        },
        {
          path: "/register",
          element: <SignUp />,
        },
      ],
    },
  ]);