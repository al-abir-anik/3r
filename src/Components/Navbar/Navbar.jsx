import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import blankProfile from "../../assets/blankProfile.webp";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <nav className="navbar justify-between h-20 bg-base-100 px-12">
      <a className="btn btn-ghost text-xl">EcoTourism</a>

      <ul className="menu menu-vertical lg:menu-horizontal space-x-5">
        <li>
          <NavLink to="/" className="text-xl">
            Home
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink to="/updateProfile" className="text-xl">
              Update Profile
            </NavLink>
          </li>
        )}
      </ul>

      <div className="flex-none gap-8">
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Log Out
          </button>
        ) : (
          <NavLink to="/login">
            <button className="btn">Log In</button>
          </NavLink>
        )}

        {user && (
          <Link to={"/myProfile"}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar relative group"
            >
              <div className="w-10 rounded-full">
                <img src={user ? user.photoURL : blankProfile} />
              </div>

              {user && (
                <span className="absolute top-1/2 -translate-y-1/2 right-full mr-2 w-max bg-gray-800 text-white text-sm font-semibold py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {user?.displayName}
                </span>
              )}
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
