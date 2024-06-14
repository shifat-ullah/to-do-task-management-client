import TaskManagement from '../components/dashboard/TaskManagement';
import Home from '../components/pages/home/home/Home';
import LogIn from '../components/shared/LogIn';
import SignUp from '../components/shared/SignUp';
import DashboardLayout from '../layout/DashboardLayout';
import MainLayout from './../layout/MainLayout';
import {createBrowserRouter} from "react-router-dom";
import PrivateRouters from './PrivateRouters';
import TaskForm from '../components/dashboard/task/TaskForm';


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

     // dashboard router
     {
      path:'/dashboard',
      element:<PrivateRouters><DashboardLayout></DashboardLayout></PrivateRouters>,
      children:[
        {
          path:'/dashboard/task-management',
          element:<TaskManagement></TaskManagement>
        },
        {
          path:'/dashboard/add-task',
          element:<TaskForm></TaskForm>
        }
      ]
    },
  ]);