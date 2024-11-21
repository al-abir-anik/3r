import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../AuthProvider/AuthProvider";

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

      <ul className="space-x-5">
        <li>
          <NavLink to="/" className="btn btn-ghost text-xl">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink>Update User</NavLink>
        </li>
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

        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar relative group"
        >
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>

          {user && (
            <span className="absolute top-1/2 -translate-y-1/2 right-full mr-2 w-max bg-gray-800 text-white text-sm font-semibold py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {user?.email}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
