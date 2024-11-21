import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Link for navigation
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUserProfile,signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const fullname = e.target.fullname.value;
    const photo = e.target.photo.value;

    setErrorMessage("");
    if (password.length < 6) {
      setErrorMessage("Password should be 6 characters or longer");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password required at least one UPPERCASE and one lowercase"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: fullname, photoURL: photo });
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setErrorMessage(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/pWMJZm4/ecoTour1.jpg')",
      }}
    >
      <div className="w-full max-w-md p-6 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-6">
          EcoTourism Registration
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-green-600">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-600">
              Profile Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter profile photo URL"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="btn w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            Already have an account?
            <Link to="/login" className="text-green-500 hover:text-green-700">
              {" "}
              Log In
            </Link>
          </p>

          <div className="mt-4">
            <button onClick={handleGoogleSignUp} className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
