import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import TourDetails from "../Components/TourDetails/TourDetails";
import LogIn from "../Components/Register/LogIn";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import SecureRoute from "./SecureRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../../public/TourData.json"),
      },
      {
        path: "card/:id",
        element: (
          <PrivateRoute>
            <TourDetails></TourDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("../../public/TourData.json"),
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
        path: "register",
        element: (
          <SecureRoute>
            <Register></Register>
          </SecureRoute>
        ),
      },
    ],
  },
]);

export default Routes;
