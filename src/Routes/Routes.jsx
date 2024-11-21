import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import TourDetails from "../Components/TourDetails/TourDetails";
import LogIn from "../Components/Register/LogIn";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import SecureRoute from "./SecureRoute";
import MyProfile from "../Components/UserProfile/MyProfile";
import UpdateProfile from "../Components/UserProfile/updateProfile";
import Forgotpass from "../Components/Register/Forgotpass";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/TourData.json"),
      },
      {
        path: "card/:id",
        element: (
          <PrivateRoute>
            <TourDetails></TourDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/TourData.json"),
      },
      {
        path: "login",
        element: (
          <SecureRoute>
            <LogIn></LogIn>
          </SecureRoute>
        ),
      },
      {
        path: "forgotPass",
        element: (
          <SecureRoute>
            <Forgotpass></Forgotpass>
          </SecureRoute>
        ),
      },
      {
        path: "register",
        element: (
          <SecureRoute>
            <Register></Register>
          </SecureRoute>
        ),
      },
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
