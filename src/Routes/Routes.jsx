import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Home from "../components/Home/Home";
import Details from "../components/Home/Details/Details";
import CollegeRoute from "../components/CollegeRoute/CollegeRoute";
import AllCardDetails from "../components/AllCardDetails/AllCardDetails";
import Admission from "../components/Admission/Admission";
import AdmissionFiled from "../components/AdmissionFiled/AdmissionFiled";
import MyCollege from "../components/MyCollege/MyCollege";
import PrivateRoutes from "../components/Routes/PrivateRoutes";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: 'registration',
        element: <Registration></Registration>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'details/:id',
        element:<PrivateRoutes> <Details></Details></PrivateRoutes>,
        loader: ({params})=>fetch(`http://localhost:5000/colleges/${params.id}`)
      },
      {
        path: 'collegeroute',
        element: <CollegeRoute></CollegeRoute>
      },
      {
        path: 'allcard/:id',
        element:<PrivateRoutes> <AllCardDetails></AllCardDetails></PrivateRoutes>,
        loader: ({params})=>fetch(`http://localhost:5000/allcard/${params.id}`)
      },
      {
        path: 'admission',
        element: <Admission></Admission>
      },
      {
        path: 'admissionfiled',
        element: <AdmissionFiled></AdmissionFiled>
      },
      {
        path: 'mycollege',
        element: <MyCollege></MyCollege>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage></NotFoundPage>
  },
  
]);


export default router;