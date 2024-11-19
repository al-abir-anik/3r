import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import TourDetails from "../Components/TourDetails/TourDetails";

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
        element: <TourDetails></TourDetails>,
        loader: () => fetch("../../public/TourData.json"),
      },
    ],
  },
]);

export default Routes;
