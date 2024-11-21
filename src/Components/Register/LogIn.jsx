import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const LogIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  const handleGoogleSignIn = () => {
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
        backgroundImage:
          "url('https://i.ibb.co.com/0cCNVDq/Mountain-Trek-to-Everest-Base-Camp.jpg')",
      }}
    >
      <div className="w-full max-w-md p-6 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-6">
          EcoTourism Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-green-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-green-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Forget Password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-green-500 hover:text-green-700"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Other Options */}
        <div className="mt-6 text-center">
          {/* Register Link */}
          <p className="text-sm text-gray-700">
            Don't have an account?
            <Link
              to="/register"
              className="text-green-500 hover:text-green-700"
            >
              {" "}
              Register
            </Link>
          </p>

          {/* Social Login */}
          <div className="mt-4">
            <button
              className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
