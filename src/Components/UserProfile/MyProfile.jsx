import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome, {user?.displayName || "User"}!
        </h2>

        {/* Profile Information */}
        <div className="space-y-6">
          {/* Profile Image */}
          <div className="text-center">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              className="w-32 h-32 rounded-full mx-auto border border-gray-300 shadow-sm"
            />
          </div>

          {/* Profile Details */}
          <div className="space-y-4 text-center">
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold text-gray-900">Name:</span>{" "}
              {user?.displayName || "Not provided"}
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              {user?.email || "Not provided"}
            </p>
          </div>

          {/* Update Button */}
          <div className="text-center">
            <Link to="/updateProfile">
              <button className="py-2 px-6 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition-all">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
