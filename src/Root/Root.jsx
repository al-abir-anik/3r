import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    let title = "";

    switch (path) {
      case "":
        title = "Eco-Adventure Experiences ";
        break;
      case "login":
        title = "Eco-Adventure | Login";
        break;
      case "register":
        title = "Eco-Adventure | Register";
        break;
      case "myProfile":
        title = "Eco-Adventure | My Profile";
        break;
      case "updateProfile":
        title = "Eco-Adventure | Update Profile";
        break;
      case "forgotPass":
        title = "Eco-Adventure | Forgot Password";
        break;
      default:
        title = "Gadget Heaven";
    }

    document.title = title;
  }, [location]);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
