import TaskManagement from '../components/dashboard/TaskManagement';
import Home from '../components/pages/home/home/Home';
import LogIn from '../components/shared/LogIn';
import SignUp from '../components/shared/SignUp';
import DashboardLayout from '../layout/DashboardLayout';
import MainLayout from './../layout/MainLayout';
import {createBrowserRouter} from "react-router-dom";
import PrivateRouters from './PrivateRouters';
import TaskForm from '../components/dashboard/task/TaskForm';
import Contact from '../components/contact/Contact';
import BlogPost from '../components/blog/BlogPost';
import Profile from '../components/profile/Profile';
import UpdateProfile from '../components/profile/UpdateProfile';


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
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog",
          element: <BlogPost />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/updateProfile/:id",
          element: <UpdateProfile />,
          loader: ({ params }) => fetch(`https://to-do-task-server-ochre.vercel.app/user/update/${params.id}`)
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
          path:'/dashboard',
          element:<TaskManagement></TaskManagement>
        },
        {
          path:'/dashboard/add-task',
          element:<TaskForm></TaskForm>
        }
      ]
    },
  ]);